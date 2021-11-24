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
    sessionLengthError,
    sessionRateError,
    trainingAddressError,
    trainingPhoneError,
    onChangeSessionLength,
    onChangeSessionRate,
    onChangeTrainingAddress,
    onChangeTrainingPhone,
    handlePrev,
    handleNext,
}) => {
    return (
            <div id = "centerBlockCoach" className = "col-sm mx-auto">

                <div id = "page3Top">
                Set your pricing and so potential clients can quickly see it! Please enter your single session length and single session rate. You get to list up to 5 different session packages and can do this within your “packages” button on your dashboard. 
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
                                <option></option>
                                <option value="30 mins-3 hours">30 mins - 3 hours</option>
                                <option value="3 hours-4 hours">3 hours - 4 hours</option>
                                <option value="4 hours-5 hours">4 hours - 5 hours</option>
                            </Form.Control>
                        </Form.Group>
                        {
                        sessionLengthError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                        }

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
                                <option></option>
                                <option value="25-250">$25 - $250</option>
                                <option value="250-300">$250 - $300</option>
                                <option value="300-350">$300 - $350</option>
                            </Form.Control>
                        </Form.Group>

                        {
                        sessionRateError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                        }

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

                        <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeTrainingAddress(e) }}>
                            <Form.Control  placeholder= ""/>
                        </Form.Group>
                        {
                            trainingAddressError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
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

                        <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeTrainingPhone(e) }}>
                            <Form.Control  placeholder= ""/>
                        </Form.Group>
                        {
                            trainingPhoneError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                        }

                    </div>
                </div>

                <div style={{marginTop: "5%"}}>
                    <Button variant = "dark"  onClick={handlePrev} style={{float: "left"}}> 
                        Back
                    </Button>  
                    <Button variant = "dark"  onClick={handleNext}

                        style = {{float: "right"}}>
                        Continue
                    </Button>    
                </div>          
            </div>
                                    
    )
}

export default SetPricing