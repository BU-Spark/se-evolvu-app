import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import ListProfileCard from './ListProfileCard/index.js';
import GalleryProfileCard from './GalleryProfileCard/index.js';
import LoadingCircle from './LoadingCircle/index.js';

import userServices from '../../services/userServices.js';
import './index.css';

const SearchPage = (props) => {

    // Params Coach Search
    const [zipCode, setZipCode] = useState("02215");
    const [label, setLabel] = useState("Life Coaching");
    const [price, setPrice] = useState(50);
    const [remote, setRemote] = useState(false);
    const [distance, setDistance] = useState(10);
    const [gender, setGender] = useState("nopref");
    const [lifeFocus, setLifeFocus] = useState(false);
    const [nutritionFitnessFocus, setNutritionFitness] = useState(false);
    const [healthWellnessFocus, setHealthWellnessFocus] = useState(false);
    const [holisticHealthFocus, setHolsticHealthFocus] = useState(false);
    const [spiritualFocus, setSpiritualFocus] = useState(false);


    // Additional States for component
    const [galleryView, setView] = useState(false);
    const [coachList, setCoachList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [invalidZipCodeError, setInvalidZipCode] = useState(false);
    const [digitOnlyError, setDigitOnly] = useState(false);
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
            distance: distance,
            gender: gender,
            focus_life: lifeFocus,
            focus_behavioral: false,
            focus_health_wellness: healthWellnessFocus,
            focus_holistic: holisticHealthFocus,
            focus_nutrition_fitness: nutritionFitnessFocus,
            focus_business: false,
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

    const handleZipChange = (e) => {

        if (isNaN(e.target.value)) {
            setDigitOnly(true);
        } else if (digitOnlyError) {
            setDigitOnly(false);
        }

        if (e.target.value === "" || e.target.value.length !== 5) {
            setInvalidZipCode(true);
        } 
        if (e.target.value.length === 5 && invalidZipCodeError) {
            setInvalidZipCode(false);
        }  

        setZipCode(e.target.value)
    }

    const setInitialFocus = () => {
        let focus = props.location.state.focus || "life-coaching";
        switch (focus) {
            case "life-coaching":
                setLifeFocus(true);
                break;
            case "nutrition-fitness":
                setNutritionFitness(true);
                break;
            case "health-and-wellness-coaching":
                setHealthWellnessFocus(true);
                break;
            case "holistic-health-wellness-coaching":
                setHolsticHealthFocus(true);
                break;
            case "spiritual-wellness-coaching":
                setSpiritualFocus(true);
                break;
            default:
                break;
        }
    }

    useEffect( () => {
        
        if (props.location.state === undefined || JSON.stringify(props.location.state) === JSON.stringify({focus: "Select your area", focusLabel: "Select your area", local: ""})) {
                props.location.state = {focus: "life-coaching", focusLabel: "Life Coaching", local: "02215"
            }
        } else {
            setLabel(props.location.state.focusLabel);
            setZipCode(props.location.state.local);
        }
        setInitialFocus();
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
                You are searching for {label} in {zipCode}
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
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            value={zipCode}
                                            placeholder="Enter Zip Code Here" 
                                            onChange={e => handleZipChange(e)}
                                        />
                                    </Form.Group>
                                    { invalidZipCodeError ? <Alert  variant="danger">Please enter a valid 5 digit zipcode.</Alert> : null }
                                    { digitOnlyError ? <Alert variant="danger">Please only enter digits. No characters or letters are allowed.</Alert> : null }
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
                                    <div key={`search-focus-nutrition-fitness`} className="mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`search-filter-focus`}
                                            label={`Nutrition & Fitness`}
                                            onChange={() => setNutritionFitness(!nutritionFitnessFocus)}
                                            checked={nutritionFitnessFocus}
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
                                    <div key={`search-focus-spiritual-wellness`} className="mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`search-filter-focus`}
                                            label={`Spiritual Wellness Coaching`}
                                            onChange={() => setSpiritualFocus(!spiritualFocus)}
                                            checked={spiritualFocus}
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
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-search-sort">
                                Sort by
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Rating</Dropdown.Item>
                                <Dropdown.Item>Distance</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SearchPage;