import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

import "../index.css";

const Background = ({
    focusError,
    birthdayError,
    genderError,
    phoneError,
    streetError,
    cityError,
    countryError,
    aptError,
    stateError,
    zipError,
    digitOnlyError,
    experienceError,
    credentialError,
    sessionError,
    bioError,
    onChangeFocus,
    onChangeDateOfBirth,
    onChangeGender,
    onChangePhone,
    onChangeStreet,
    onChangeCity,
    onChangeCountry,
    onChangeApt,
    onChangeState,
    onChangeZip,
    onChangeExperience,
    onChangeCredential,
    onChangeSession,
    onChangeBio,
    handlePrev,
    handleNext
}) => {
    return( 
                <div id = "centerBlockCoach" className = "col-sm mx-auto">

                    <div id = "questionsRow" className = "d-flex row">

                        <div id="questionCol" className = "col-sm-5 mx-1">
                            <ul className="list-unstyled">
                                
                                <li>

                                    <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => onChangeFocus(e)}>
                                        <Form.Label>Check every focus that applies to you <span style={{ color: 'red'}}>*</span></Form.Label>
                                        <Form.Control as="select">
                                            <option></option>
                                            <option value="life-coaching">Life Coaching</option>
                                            <option value="behavioral-wellness">Behavioral Wellness Coaching</option>
                                            <option value="health-and-wellness-coaching">Health and Wellness Coaching</option>
                                            <option value="holistic-health-wellness-coaching">Holistic Health & Wellness Coaching</option>
                                            <option value="spiritual-wellness-coaching">Business Coaching</option>
                                        </Form.Control>
                                    </Form.Group>
                                    {
                                    focusError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                    }

                                </li>

                                <br/>
                                <br/>

                                <li>
                                    <Form.Group id= "input" onChange={ (e) => onChangeDateOfBirth(e)}>
                                            <Form.Label id = "information"> Date of birth <span style={{ color: 'red'}}>*</span></Form.Label>
                                            <Form.Control placeholder = "Year/Month/Day"/>
                                    </Form.Group>
                                    {
                                    birthdayError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                    }
                                </li>
                                
                                <br/>

                                <li>
                                    <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => onChangeGender(e)}>
                                        <Form.Label>Gender <span style={{ color: 'red'}}>*</span></Form.Label>
                                        <Form.Control as="select">
                                            <option></option>
                                            <option>Non-Binary</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>Transgender</option>
                                            <option>Prefer not to specify</option>
                                        </Form.Control>
                                    </Form.Group>
                                    {
                                    genderError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                    }
                                </li>


                                <li>
                                    <Form.Group id="input" style = {{width: "80%"}} onChange={ (e) => onChangePhone(e)}>
                                        <Form.Label id = "information"> Phone Number <span style={{ color: 'red'}}>*</span></Form.Label>
                                        <Form.Control  placeholder= ""/>
                                    </Form.Group>
                                    {
                                    phoneError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                    }
                                </li>
                                
                                <br/>
                                <br/>
                                <br/>

                                <li id = "information">
                                    <Form.Check  inline label="I am LGBTQIA+ Inclusive 
                                    and have committed to following EvolvU’s Health and Wellness Community Commitment."/>
                                </li>

                            </ul>
                        </div>

                        {/*SEPARATOR COLUMN*/}
                        <div id="questionCol" className = "col-sm-1 mx-3"></div> 

                        {/*SECOND COLUMN*/}
                        <div id="questionCol" className = "col-sm-5 mx-1">

                            <ul className="list-unstyled">
                                <li>
                                    <HiUserCircle size={180}/>
                                </li>

                                <li>
                                    <Form style = {{marginLeft: "8%", paddingRight: "0%"}}>
                                        <Form.File style = {{width: "46.7%"}} id="custom-file" label="" data-browse="Upload Photo" custom accept="image/*"/>
                                    </Form>
                                </li>

                                <li>
                                    <div id = "blueText1" style = {{marginLeft: "8%", paddingTop: "2%"}}>
                                        Please crop and save to continue. It must be a picture of you. No logos or other images.
                                    </div>
                                </li>

                                <li>
                                    <Button variant = "dark" style = {{marginLeft: "25%", marginTop: "2%"}}>
                                        Save
                                    </Button>
                                </li>

                                <br/>
                            </ul>

                        </div>

                    </div> {/*row*/}
                    
                    <div style={{ borderTop: "2px solid #779ECC"}}></div>

                    <br/>
                    
                    <div id = "blueText2">
                        EvolvU uses your mailing address from time to time to send important documents.
                    </div>

                    <br/>

                    <div id = "blackHeader">
                        Mailing Address
                    </div>


                    <div id = "questionsRow" className = "d-flex row">

                        <div id="questionCol" className = "col-sm-5 mx-1">

                            <br/>

                            <ul className="list-unstyled">

                                <li>
                                    <Form.Group id="input" style = {{width: "100%"}} onChange={ (e) => onChangeStreet(e)}>
                                        <Form.Label id = "information"> Street <span style={{ color: 'red'}}>*</span></Form.Label>
                                        <Form.Control  placeholder= ""/>
                                    </Form.Group>
                                    {
                                    streetError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                    }
                                </li>
                                
                                <br/>
                                <br/>

                                <li>
                                    <Form.Group id="input" style = {{width: "100%"}} onChange={ (e) => onChangeCity(e)}>
                                        <Form.Label id = "information"> City <span style={{ color: 'red'}}>*</span></Form.Label>
                                        <Form.Control  placeholder= ""/>
                                    </Form.Group>
                                    {
                                    cityError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                    }
                                </li>

                                <br/>
                                <br/>

                                <li>
                                    <Form.Group id="input" style = {{width: "100%"}} onChange={ (e) => onChangeCountry(e)}>
                                        <Form.Label id = "information"> Country <span style={{ color: 'red'}}>*</span></Form.Label>
                                        <Form.Control  placeholder= ""/>
                                    </Form.Group>
                                    {
                                    countryError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                    }
                                </li>
                                
                            </ul>

                        </div>

                        <div id="questionCol" className = "col-sm-5 mx-1">

                            <br/>

                            <ul className="list-unstyled">
                                <li>
                                    <Form.Group id="input" style = {{width: "80%"}} onChange={ (e) => onChangeApt(e)}>
                                        <Form.Label id = "information"> Apt or Unit #</Form.Label>
                                        <Form.Control  placeholder= ""/>
                                    </Form.Group>
                                    {
                                    aptError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                    }
                                </li>

                                <br/>
                                <br/>

                                <li>
                                    <Form.Row>

                                        <Col style = {{width: "60%", marginRight: "10%"}}>
                                            <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => onChangeState(e)}>
                                                <Form.Label>State or Province<span style={{ color: 'red'}}>*</span></Form.Label>
                                                <Form.Control as="select">
                                                    <option></option>
                                                    <option>New York</option>
                                                    <option>Massachusetts</option>
                                                    <option>Vermont</option>
                                                    <option>New Mexico</option>
                                                    <option>Colorado</option>
                                                </Form.Control>
                                            </Form.Group>
                                            {
                                            stateError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                            }
                                        </Col>

                                        <Col style = {{width: "30%"}}>
                                            <Form.Group id="input" style = {{width: "100%"}} onChange={ (e) => onChangeZip(e)}>
                                                <Form.Label id = "information"> Zip <span style={{ color: 'red'}}>*</span></Form.Label>
                                                <Form.Control  placeholder= ""/>
                                            </Form.Group>
                                            {
                                            zipError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                            }
                                            {
                                            digitOnlyError ? <Alert variant="danger">Please only enter digits.</Alert> : null 
                                            }
                                            

                                        </Col>

                                    </Form.Row>

                                </li>
                            </ul>

                        </div>

                    </div> {/*row end*/}

                    {/*THIRD SECTION OF 2ND PAGE*/}

                    <br/>

                    <div style={{ borderTop: "2px solid #779ECC"}}></div>

                    <br/>

                    <div id = "blackHeader">
                        Evolv U Coach Profile
                    </div>
                    
                    <br/>

                    <div id = "information">
                        Coaching Experience
                    </div>
                    

                    <br/>

                    <div id = "prompts">
                        What professional experience do you have within the health and wellness sector? 
                        What experience do you have with coaching clients? 
                        At what levels and/or ages have you coached? Where have you worked as a coach or trainer?
                    </div>
                    
                    <br/>

                    <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeExperience(e) }}>
                        <Form.Control  placeholder= ""/>
                    </Form.Group>
                    {
                    experienceError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                    }

                    <br/>

                    <div id = "information">
                        Career Credentials
                    </div>

                    <br/>

                    <div id = "prompts">
                        Do you have any industry certifications/Degrees? 
                        Do you also have any medical education or clinical experience in addition to your certification(s)? 
                        Please list the date you became certified, the program you went through, and upload a copy of your certification below.
                    </div>

                    <br/>

                    <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeCredential(e) }}>
                        <Form.Control  placeholder= ""/>
                    </Form.Group>
                    {
                    credentialError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                    }

                    <br/>

                    <Form style = {{marginLeft: "50%", paddingRight: "0%"}}>
                        <Form.File style = {{width: "100%"}} id="custom-file" label="" data-browse="Upload Certification" custom/>
                    </Form>

                    <br/>

                    <div id = "information">
                        Session Plan
                    </div>

                    <br/>

                    <div id = "prompts">
                        What might a new client who is feeling down and having a hard time balancing stress expect from a typical session with you? 
                        What might you focus on? 
                        Walk us through how you would coach this session.
                    </div>

                    <br/>

                    <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeSession(e) }}>
                        <Form.Control  placeholder= ""/>
                    </Form.Group>
                    {
                    sessionError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                    }

                    <br/>

                    <div id = "information">
                        Are you CPR/AED Certified?
                    </div>

                    
                    <Form style = {{marginLeft: "50%", paddingRight: "0%"}}>
                        <Form.File style = {{width: "100%"}} id="custom-file" label="" data-browse="Upload Certification" custom/>
                    </Form>
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

                    <div id = "prompts">
                        Give us a one sentence summary of your experience. 
                        This is a client’s first impression of you and is displayed in search results
                            and on your profile on EvolvU.
                    </div>
                    
                    <br/>

                    <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => onChangeBio(e)}>
                        <Form.Control  placeholder= ""/>
                    </Form.Group>
                    {
                    bioError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                    }

                    <br/>
                    <div>
                        <Button variant = "dark"  onClick={handlePrev} style={{float: "left"}}>Back</Button>
                        <Button variant = "dark"  onClick={handleNext} style={{float: "right"}}>Continue</Button>
                    </div>
                </div> 
    )        

}


export default Background;