import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import ProfileCard from './ProfileCard/index.js';

import './index.css';

const SearchPage = (props) => {

    const [price, setPrice] = useState(50);
    const [remote, setRemote] = useState(false);
    const [galleryView, setView] = useState(false);
    const [distance, setDistance] = useState(10);
    const [gender, setGender] = useState("nopref");
    const [focus, setFocus] = useState(props.location.state.focus);
    const [coachList, setCoachList] = useState([])

    useEffect( () => {
         axios.get('https://jsonplaceholder.typicode.com/users', {
        }).then( (res) => {
            setCoachList(res.data)
            console.log(res.data)
        })
    }, [])          // Add this line to prevent infinite loop 

    return (
        <div className="search-results-body container-fluid">
            <p className="font-weight-bold" style={{padding: "1rem", zIndex: "-1", background:""}}>
                You are searching for {props.location.state.focusLabel} in {props.location.state.local}
            </p>
            <Row>
                <Col sm={3}>
                    <div className="search-page-filter">
                        <Form>
                            <div>
                                <p style={{textAlign: "left", fontWeight: "bold"}}>Coach Search Filter</p>
                                <hr></hr>
                            </div>
                            <div>
                                <p style={{textAlign: "left", fontWeight: "bold"}}>Location</p>
                                <div>
                                    Zip Code: {props.location.state.local}
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
                                {
                                    [ 
                                        { label: "Life Coaching", key: "life-coaching"},
                                        { label: "Nutrition & Fitness", key: "nutrition-fitness"},
                                        { label: "Health and Wellness Coaching", key: "health-and-wellness-coaching"},
                                        { label: "Holistic Health & Wellness Coaching", key: "holistic-Health-wellness-coaching"},
                                        { label: "Spiritual Wellness Coaching", key: "spiritual-wellness-coaching"},
                                    ].map((type) => (
                                    <div key={`search-focus-${type.key}`} className="mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`search-filter-focus`}
                                            label={`${type.label}`}
                                            onChange={() => setFocus(type.key)}
                                            checked={ focus === type.key}
                                        />
                                    </div>
                                ))}
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
                                    onClick={ () => setView(false)}
                                    >
                                        List
                                </Button>{' '}
                                <Button 
                                    variant="outline-secondary" 
                                    id="search-page-preferences-two"
                                    className={ galleryView ? "active" : ""}
                                    onClick={ () => setView(true)}
                                    >
                                        Grid
                                </Button>{' '}
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                    <div>
                        {
                            coachList.map( (coach) => (
                                <ProfileCard key={coach.id} coach={coach} view={galleryView}/>
                            ))
                        }
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <Dropdown size="sm">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-search-sort">
                                Sort by
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/action-1">Rating</Dropdown.Item>
                                <Dropdown.Item href="/action-2">Distance</Dropdown.Item>
                                <Dropdown.Item href="/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SearchPage;