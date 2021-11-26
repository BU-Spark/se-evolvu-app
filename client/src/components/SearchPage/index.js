import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import ListProfileCard from './ListProfileCard/index.js';
import GalleryProfileCard from './GalleryProfileCard/index.js';
import LoadingCircle from './LoadingCircle/index.js';

import userServices from '../../services/userServices.js';
import './index.css';

const SearchPage = (props) => {
    // set initial focuses based on search
    const initialLocation = props.location.state ? props.location.state.local : "02215"
    const initialFocus = props.location.state ? props.location.state.focus : "life-coaching"
    // Params Coach Search
    const [location, setLocation] = useState(initialLocation);
    const [label, setLabel] = useState("Life Coaching");
    const [price, setPrice] = useState(50);
    const [remote, setRemote] = useState(false);
    const [distance, setDistance] = useState(10);
    const [gender, setGender] = useState("nopref");
    const [lifeFocus, setLifeFocus] = useState(initialFocus === "life-coaching" ? true : false);
    const [behavioralWellness, setBehavioralWellness] = useState(initialFocus === "behavioral-wellness-coaching" ? true : false);
    const [healthWellnessFocus, setHealthWellnessFocus] = useState(initialFocus === "health-wellness-coaching" ? true : false);
    const [holisticHealthFocus, setHolsticHealthFocus] = useState(initialFocus === "holistic-health-wellness-coaching" ? true : false);
    const [businessFocus, setBusinessFocus] = useState(initialFocus === "business-coaching" ? true : false);
    const [sortBy, setSortBy] = useState("");
    const [sortByLabel, setSortByLabel] = useState("Sort By")


    // Additional States for component
    const [galleryView, setView] = useState(false);
    const [coachList, setCoachList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [invalidLocationError, setInvalidLocation] = useState(false);
    const [searchError, setSearchError] = useState(false);


    const handleChange = () => {
        setTimeout(() => {
            setLoading(false);
          }, 500);
    }

    const onSearch = () => {
        const params = { 
            price: price,
            remote: remote,
            sortBy: sortBy,
            location: location,
            distance: distance,
            gender: gender,
            focus_life: lifeFocus,
            focus_behavioral_wellness: behavioralWellness,
            focus_health_wellness: healthWellnessFocus,
            focus_holistic: holisticHealthFocus,
            focus_business: businessFocus,
            travel: false
        };
        userServices.searchCoaches(params)
            .then( (res) => {
                setCoachList(res.data.results);
            }).catch( () =>{
                setCoachList([]);
                setSearchError(true);
            })
    };

    const handleLocationChange = (e) => {
        setInvalidLocation(e.target.value === "")
        setLocation(e.target.value)
    }


    const handleSortBy = (e) => {
        setSortBy(e);
        if (e === "avg_rating") {
            setSortByLabel("Rating")
        }
        else {
            setSortByLabel("Distance")
        }
        onSearch();
    }

    useEffect( () => {
        onSearch();
    // eslint-disable-next-line
    }, [])          // Add this line to prevent infinite loop 

    // NOTE: Function for filtering remote and in person coaches (disabled temporarily)
    // const [viewList, setViewList] = useState([]);
    // const filterRemote = () => {
    //     let res = coachList.filter( (coach) => {
    //         return coach.remote===remote;
    //     })
    //     setViewList(res);
    // }

    let card;
    if (searchError) {
        card = <Alert  variant="danger">An error has occurred with searching for valid coaches. Please try again. </Alert>

    } else if (!galleryView) {
        card = coachList.map( (coach) => (
                <ListProfileCard key={coach.slug} coach={coach}/>
            ))
    } else {
        card = 
        <Row className="justify-content-md-center">
            {coachList.map( (coach) => (
                <GalleryProfileCard key={coach.slug} coach={coach}/>
            ))}
        </Row>
    }

    return (
        <div className="search-results-body container-fluid">
            <p className="font-weight-bold" style={{padding: "2rem", zIndex: "-1", background:""}}>

            </p>
            <Row>
                <Col sm={3} className="search-page-filter-container">
                    <div className="search-page-filter">
                        <Form>
                            <div>
                                <p style={{textAlign: "left", fontWeight: "bold"}}>Coach Search Filter</p>
                                <hr></hr>
                            </div>
                            <div>
                                <p style={{textAlign: "left", fontWeight: "bold"}}>Location</p>
                                <div>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={location}
                                            placeholder="Enter 'city, state' here" 
                                            onChange={e => handleLocationChange(e)}
                                        />
                                    </Form.Group>
                                    { invalidLocationError ? <Alert  variant="danger">Please enter a valid location.</Alert> : null }
                                    <Form.Group controlId="formBasicRange">
                                        <Form.Label>Distance</Form.Label>
                                        <Form.Control 
                                            type="range" 
                                            max="20"
                                            min="0"
                                            onChange={ (e) => setDistance(e.target.value)}
                                        />
                                        {distance} miles
                                    </Form.Group>
                                </div>
                            </div>
                            <div>
                                <hr></hr>
                                <p style={{textAlign: "left", fontWeight: "bold"}}>Coach's Gender</p>
                                <div className="mb-3" style={{ textAlign: "left", justifyContent: "center"}}>
                                    {
                                        [ 
                                            { label: "Male", key: "male"},
                                            { label: "Female", key: "female"},
                                            { label: "Non-Binary", key: "nonbinary"},
                                            { label: "No Preference", key: "nopref"},
                                        ].map((type) => (
                                        <div key={`search-focus-${type.key}`} className="mb-3">
                                            <Form.Check 
                                                type="radio" 
                                                id="search-filter-gender"
                                                label={`${type.label}`}
                                                onChange={() => setGender(type.key)}
                                                checked={ gender === type.key}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <hr></hr>
                            <div className="search-page-focus">
                                <p style={{textAlign: "left", fontWeight: "bold"}}>Focus</p>
                                    
                                    <div key={`search-focus-life-coaching`} className="mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`search-filter-focus`}
                                            label={`Life Coaching`}
                                            onChange={() => setLifeFocus(!lifeFocus)}
                                            checked={lifeFocus}
                                        />
                                    </div>
                                    <div key={`search-focus-behavioral-wellness`} className="mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`search-filter-focus`}
                                            label={`Behavioral Wellness Coaching`}
                                            onChange={() => setBehavioralWellness(!behavioralWellness)}
                                            checked={behavioralWellness}
                                        />
                                    </div>
                                    <div key={`search-focus-health-and-wellness-coaching`} className="mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`search-filter-focus`}
                                            label={`Health and Wellness Coaching`}
                                            onChange={() => setHealthWellnessFocus(!healthWellnessFocus)}
                                            checked={healthWellnessFocus}
                                        />
                                    </div>
                                    <div key={`search-focus-holistic-wellness`} className="mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`search-filter-focus`}
                                            label={`Holistic Health & Wellness Coaching`}
                                            onChange={() => setHolsticHealthFocus(!holisticHealthFocus)}
                                            checked={holisticHealthFocus}
                                        />
                                    </div>
                                    <div key={`search-focus-business-coaching`} className="mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`search-filter-focus`}
                                            label={`Business Coaching`}
                                            onChange={() => setBusinessFocus(!businessFocus)}
                                            checked={businessFocus}
                                        />
                                    </div>
                            </div>
                            <hr></hr>
                            <div>
                                <p style={{textAlign: "left", fontWeight: "bold"}}>Price</p>
                                <Form.Group controlId="formBasicRange">
                                    <Form.Control 
                                        type="range" 
                                        onChange={ (e) => setPrice(e.target.value)}
                                    />
                                    ${price}{ price === "100" ? "+" : "" }
                                </Form.Group>
                            </div>
                            <hr></hr>
                            <Button
                                onClick={ () => {
                                    setLoading(true)
                                    handleChange()
                                    onSearch()
                                }}
                            >
                                Search
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col sm={6}>
                    <div>
                        <ButtonToolbar
                            className="justify-content-between"
                            aria-label="Toolbar for Preferences"
                        >
                            <ButtonGroup aria-label="Personal Preferences">
                                <Button 
                                    variant="outline-secondary" 
                                    id="search-page-preferences-one" 
                                    className={ !remote ? "active" : ""}
                                    onClick={ () => setRemote(false)}
                                    >
                                        In-Person
                                </Button>{' '}
                                <Button 
                                    variant="outline-secondary" 
                                    id="search-page-preferences-one"
                                    className={ remote ? "active" : ""}
                                    onClick={ () => setRemote(true)}
                                    >
                                        Remote
                                </Button>{' '}
                            </ButtonGroup>
                            <ButtonGroup aria-label="View Preferences">
                                <Button 
                                    variant="outline-secondary" 
                                    id="search-page-preferences-two"
                                    className={ !galleryView ? "active" : ""}
                                    onClick={ () => {
                                            setView(false)
                                            setLoading(true)
                                            handleChange()
                                        }}
                                    >
                                        List
                                </Button>{' '}
                                <Button 
                                    variant="outline-secondary" 
                                    id="search-page-preferences-two"
                                    className={ galleryView ? "active" : ""}
                                    onClick={ () => {
                                        setView(true)
                                        setLoading(true)
                                        handleChange()
                                    }}
                                    >
                                        Grid
                                </Button>{' '}
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                    {loading ? <div className="justify-content-center"><LoadingCircle /></div> : 
                        <div className="search-page-cards">
                            {card}
                        </div> 
                    }
                </Col>
                <Col sm={3}>
                    <div>
                        <Dropdown size="sm">
                            <DropdownButton variant="outline-secondary" id="dropdown-search-sort" title={sortByLabel} onSelect={e => handleSortBy(e)}>
                                <Dropdown.Item eventKey="avg_rating">Rating</Dropdown.Item>
                                <Dropdown.Item eventKey="distance">Distance</Dropdown.Item>
                            </DropdownButton>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SearchPage;