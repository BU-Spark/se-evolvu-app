import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

import "../index.css";


const SetPricing = ({
    page3AddressError,
    page3PhoneError,
    onChangeSessionLength,
    onChangeSessionRate,
    onChangePage3Address,
    onChangePage3Phone,
    handlePrev,
    handleNext
}) => {
    return (
            <div id = "centerBlockCoach" className = "col-sm mx-auto">

                <div id = "page3Top">
                    Please enter your single session length and single session rate.
                    Here at EvolvU we want you to be able to provide your clients with multiple session options.
                    You get to list up to 5 different session packages. We do not offer the ability to hold group sessions at the moment.
                    You can set and change your package(s) anytime within your sessions tab on your dashboard.
                </div>

                <div id = "questionsRow" className = "d-flex row">

                    <div id="questionCol" className = "col-sm-5 mx-1">

                        <br/>
                        <br/>

                        <div id = "information">
                            Session Length
                        </div>

                        <br/>

                        <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => onChangeSessionLength(e)}>
                            <Form.Control as="select">
                                <option>30 mins - 3 hours</option>
                                <option>3 hours - 4 hours</option>
                                <option>4 hours - 5 hours</option>
                            </Form.Control>
                        </Form.Group>

                    </div>
                    
                    <div id="questionCol" className = "col-sm-1 mx-3"></div> 

                    <div id="questionCol" className = "col-sm-5 mx-1">

                        <br/>
                        <br/>

                        <div id = "information">
                            Session Rate
                        </div>

                        <br/>

                        <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => onChangeSessionRate(e)}>
                            <Form.Control as="select">
                                <option>$25 - $250</option>
                                <option>$250 - $300</option>
                                <option>$300 - $350</option>
                            </Form.Control>
                        </Form.Group>

                    </div>
                </div> {/*row end*/}

                <br/>
                <br/>

                <div style={{ borderTop: "2px solid #779ECC"}}></div>

                <br/>

                <div id = "blackHeader">
                    Are you willing to travel to clients
                </div>

                <br/>

                <div id = "page3Descriptor">
                    Are you willing to meet clients at a location near them?
                    If yes, please enter your home or work address and how how many 
                    miles you’re willing to travel from there.
                </div>
                
                <br/>

                <form>

                    <div className="form-check">
                        <label>
                            <input
                            type="radio"
                            name="react-tips"
                            value="option1"
                            checked={true}
                            className="form-check-input"
                            />
                            Yes
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                            type="radio"
                            name="react-tips"
                            value="option2"
                            className="form-check-input"
                            />
                            No
                        </label>
                    </div>

                </form>

                <br/>

                <div id = "blackHeader">
                    Add Specific Training Location
                </div>

                <br/>

                <div id = "page3Descriptor">
                    You may add different session locations by name or address.
                    Please secure your location from the outer suggestion list that pops up when you begin typing.
                    Coaches who cannot travel to sessions must provide their specific session location here.
                    Clients will need to know where to meet you once they’ve booked.
                </div>

                <div id = "questionsRow" className = "d-flex row">

                    <div id="questionCol" className = "col-sm-5 mx-1">

                        <br/>
                        <br/>

                        <div id = "information">
                            Location Name/Address
                        </div>

                        <br/>

                        <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangePage3Address(e) }}>
                            <Form.Control  placeholder= ""/>
                        </Form.Group>
                        {
                            page3AddressError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                        }

                    </div>

                    <div id="questionCol" className = "col-sm-1 mx-3"></div> 

                    <div id="questionCol" className = "col-sm-5 mx-1">

                        <br/>
                        <br/>

                        <div id = "information">
                            Phone Number
                        </div>

                        <br/>

                        <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangePage3Phone(e) }}>
                            <Form.Control  placeholder= ""/>
                        </Form.Group>
                        {
                            page3PhoneError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                        }

                    </div>
                </div>

                <Button variant = "dark"  onClick={handleNext}

                    style = {{marginTop: "5%", marginLeft: "85%"}}>
                    Continue
                </Button>

                <Button variant = "dark"  onClick={handlePrev}

                    style = {{ marginTop: "5%", marginLeft: "89%"}}>
                    Back
                    
                </Button>                
            </div>
                                    
    )
}

export default SetPricing