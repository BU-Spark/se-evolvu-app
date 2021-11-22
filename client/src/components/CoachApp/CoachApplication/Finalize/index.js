import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

import "../index.css";

const Finalize = () => {
    return( 
        <div id = "centerBlockCoach" className = "col-sm mx-auto">
            <div id = "bigHeader">
                Review of your Plan: EvolvU Lite
            </div>
            
            <br/>
            

            <ul id ="coachFeatures">
                <li className ="coachFeature">Public Evolv U Profile</li>
                <li className ="coachFeature">Access to Coach Dashboard including multiple features.</li>
                <li className ="coachFeature">Client leads</li>
            </ul>

            <div id = "orangeText">
                Pricing:
            </div>
            <div id = "whiteText">
                One-time activation fee.
                You have unlimited access to the EvolvU Network with limited features.
            </div>
            
            <br/>
            <br/>

            <div style={{ borderTop: "2px solid #779ECC"}}></div>

            <br/>

            <div id = "bigHeader">
                Payment Information
            </div>
            
            <br/>

            <div id = "blackText">
                Upon approval of your application, you will be charged a one time activation fee of $45.99.
            </div>
            
            <br/>
            <br/>

            <div id = "whiteText">
                Enter your credit card information below
            </div>

            <div id = "smallWhiteText">
                * All fields required
            </div>
            

            <br/>
            <br/>
            
            <div id = "questionsRow" className = "d-flex row">


                <div id="questionCol" className = "col-sm-5 mx-1">

                    <div id = "information">
                        Full Name (in card)
                    </div>

                    <br/>

                    <Form.Group id="input" style = {{width: "75%"}}>
                        <Form.Control  placeholder= ""/>
                    </Form.Group>

                    <br/>

                    <Form.Row>

                        <Col>
                            <div id = "information">
                                Exp. Month
                            </div>

                            <br/>

                            <Form.Group id="dropDown" className="register-form-input" style = {{width: "100%"}}>
                                <Form.Control as="select">
                                    <option></option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        

                        <Col style = {{marginLeft: "30%"}}>
                            <div id = "information">
                                Exp. Year
                            </div>

                            <br/>

                            <Form.Group id="dropDown" className="register-form-input" style = {{width: "100%"}}>
                                <Form.Control as="select">
                                    <option></option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>26</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                    </Form.Row>

                        <br/>

                        <div id = "information">
                            Billing Zip Code
                        </div>

                        <br/>

                        <Form.Group id="input" style = {{width: "55%"}}>
                            <Form.Control  placeholder= ""/>
                        </Form.Group>
                </div>

                <div id="questionCol" className = "col-sm-1 mx-3"></div> 

                <div id="questionCol" className = "col-sm-5 mx-1">
                    
                        <div id = "information">
                            Credit Card Number
                        </div>

                        <br/>

                        <Form.Group id="input" style = {{width: "55%"}}>
                            <Form.Control  placeholder= ""/>
                        </Form.Group>

                        <br/>

                        <div id = "information">
                            Security Code (CVC)
                        </div>

                        <br/>

                        <Form.Group id="input" style = {{width: "55%"}}>
                            <Form.Control  placeholder= ""/>
                        </Form.Group>
                </div>

            </div> {/*row*/}

            <br/>

            <div id = "blackText">
                By submitting your application you authorize EvolvU to request the following:
                ID verification check, National Criminal check, Sex offender check and any other
                background check EvolvU performs.
            </div>
            
            <Button variant = "dark"  

                

                style = {{ marginTop: "5%", marginLeft: "75%"}}>
                Submit Application

            </Button>

            <br/>
            <br/>
            

            <div class="form-check" style ={{paddingRight: "0px", marginRight: "0px"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault" id = "information">
                        By clicking ‘submit Application’ or by using the EvolvU Platform,
                        you agree to our Terms of Service and Privacy Policy.
                    </label>
            </div>
            
        </div>
    )

}


export default Finalize;