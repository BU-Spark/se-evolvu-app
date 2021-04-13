import React, { useState } from 'react';
import "./index.css";
import InputGroup from 'react-bootstrap/InputGroup';
import { Tabs, Tab } from 'react-bootstrap';
import "./index.css";
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';


const CoachApplication = () => {
    
    const [source, setSource] = useState("");
    const [local, setLocal] = useState("");
    const [area, setArea] = useState(1);
    const [tab, setTab] = useState("basicInfo");

    const [firstNameError, setFirstNameError] = useState(false)
    const [firstName, setFirstName] = useState("");
    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const [lastNameError, setLastNameError] = useState(false)
    const [lastName, setLastName] = useState("");
    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }


    const [emailError, setEmailError] = useState(false)
    const [email, setEmail] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const [passwordError, setPasswordError] = useState(false)
    const [password, setPassword] = useState("");
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const [DateOfBirth, setDateOfBirth] = useState("");
    const onChangeDateOfBirth = (e) => {
        setDateOfBirth(e.target.value);
    }

    const validate = () => {

        if (!isEmail(email) || (!email)) {
            setEmailError(true)
        } else { setEmailError(false) }

        if (!password) {
            setPasswordError(true) 
        } else { setPasswordError(false) }

        if (!firstName) {
            setFirstNameError(true) 
        } else { setFirstNameError(false) }

        if (!lastName) {
            setLastNameError(true) 
        } else { setLastNameError(false) }


        if (email === " " || email === "" || !isEmail(email)) {
            return false;
        }

        if (firstName === " " || firstName === "") {
            return false;
        }

        if (lastName === " " || lastName === "") {
            return false;
        }

        if (password === " " || password === "" || !isEmail(email)) {
            return false;
        }

        return true;
            
    }

    const [concentration, setConcentration] = useState(" ");

    return( 

        <div id= "CoachAppPage">
            <div  id = "headerMessage" style = {{paddingTop:"3.125rem", height: "5rem"}}className = "col-sm-5 mx-auto">
                <h1>Apply and Start Your Health
                    <br/>and Wellness Coaching Journey with EvolvU!</h1>
            </div>


                
                <div id="ApplicationPage">
                    <div className = "container" style ={{width: "70%"}}>

                        <div className="profile-tabs">
                            <Tabs activeKey = {tab}>


                                {/*xxxxxxxxxxxxxFIRST PAGExxxxxxxxxxx */}
                                <Tab  eventKey= "basicInfo" title="Basic Information" tabClassName="profile-tabitem">
                                    <div id = "centerBlockCoach" className = "col-sm mx-auto">

                                        <div id = "questionsRow" className = "d-flex row">
                                            {/*BEGIN FIRST COLUMN BELOW*/} 
                                            <div id="questionCol" className = "col-sm-5 mx-1">

                                                <ul className="list-unstyled">
                                                    <li id = "information">First Name <span style={{ color: 'red'}}>*</span></li>

                                                    <li>
                                                        <Form.Group id = "input" onChange={(e) => { onChangeFirstName(e) }}>
                                                            <Form.Control type = "name" placeholder= "John"/>
                                                        </Form.Group>
                                                        {
                                                        firstNameError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                                        }

                                                    </li>
                                                </ul>

                                                <br/>

                                                <ul className="list-unstyled">
                                                    <li id = "information">Email <span style={{ color: 'red'}}>*</span></li>

                                                    <li>
                                                    <Form.Group id="input" onChange={(e) => { onChangeEmail(e)}}>
                                                        <Form.Control type = "email" placeholder= "JohnDoe@xmail.com"/>
                                                    </Form.Group>
                                                    {
                                                         emailError ? <Alert style = {{padding: "0px"}} variant="danger"> {!isEmail(email) ? "Not a valid email" : "This is a required field."} </Alert> : null
                                                    }

                                                    </li>
                                                </ul>

                                                <br/>

                                                <ul className="list-unstyled">
                                                    <li id = "information">Password <span style={{ color: 'red'}}>*</span></li>

                                                    <li>
                                                        <Form.Group id="input" onChange={(e) => { onChangePassword(e) }}>
                                                                <Form.Control type="password" placeholder= ""/>
                                                        </Form.Group>
                                                        {
                                                        passwordError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                                        }
                                                    </li>
                                                </ul>

                                                <br/>

                                                <div class="form-check" style ={{paddingRight: "0px", marginRight: "0px"}}>
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                            <label class="form-check-label" for="flexCheckDefault" id = "information">
                                                                Outside US or Canada?
                                                            </label>
                                                </div>

                                                <div id = "benefits" className = "container">
                                                    Coach with EvolveU

                                                    <ul id ="listBenefits">
                                                        <li id ="listBenefit"><small>Reach new clients</small></li>
                                                        <li id ="listBenefit"><small>Have endless acess to manage your business</small></li>
                                                        <li id ="listBenefit"><small>Be part of a growing wellness community</small></li>
                                                    </ul>

                                                </div>

                                            {/*END FIRST COLUMN BELOW*/} 
                                            </div> 

                                            {/*SEPARATOR COLUMN BELOW*/} 
                                            <div id="questionCol" className = "col-sm-1 mx-3"></div> 

                                            {/*BEGIN SECOND COLUMN BELOW*/}
                                            <div id="questionCol" className = "col-sm-5 mx-1">

                                                <ul className="list-unstyled">
                                                    <li id = "information">Last Name <span style={{ color: 'red'}}>*</span></li>

                                                    <li>

                                                        <Form.Group id = "input"onChange={(e) => { onChangeLastName(e) }}>
                                                            <Form.Control placeholder= "Doe"/>
                                                        </Form.Group>
                                                        {
                                                        lastNameError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                                        }

                                                    </li>
                                                </ul>

                                                <br/>

                                                <ul className="list-unstyled">
                                                    <li id = "information">How did you hear about us?</li>

                                                    <li>
                                                    <Form.Group id="information" className="register-form-input" onChange={ (e) => setConcentration(e.target.value)}>
                                                            <Form.Control as="select">
                                                                <option onClick={() => setSource("Google")}>Google</option>
                                                                <option onClick={() => setSource("Instagram")}>Instagram</option>
                                                                <option onClick={() => setSource("Facebook")}>Facebook</option>
                                                                <option onClick={() => setSource("Other")}>Other</option>
                                                                </Form.Control>
                                                        </Form.Group>
                                                    </li>
                                                </ul>

                                               <br/>
                                               <br/>
                                               <br/>
                                                <Button variant = "dark" disableElevation onClick={() => 

                                                    {if(validate())
                                                    {
                                                        setTab("background");
                                                    }
                                                    else{
                                                        setTab("basicInfo");
                                                    }}}

                                                    style = {{marginTop: "11.5rem", marginLeft: "7.5rem"}}>
                                                    Continue
                                                </Button>
                                            {/*END SECOND COLUMN BELOW*/}
                                            </div>
                                        </div> 

                                    </div>
                                </Tab>

                                {/*xxxxxxxxxxSECOND PAGExxxxxxxxxxxxxxxxxxxxx*/}
                                <Tab eventKey= "background" title="Background" tabClassName="profile-tabitem">
                                    <div id = "centerBlockCoach" className = "col-sm mx-auto">

                                        <div id = "applicationHeaders">EvolvU needs some more background about you first. All information is required to continue.</div>

                                        <br/>

                                        <div id = "questionsRow" className = "d-flex row">

                                            <div id="questionCol" className = "col-sm-5 mx-1">
                                                <ul className="list-unstyled">
                                                    
                                                    <li>

                                                        <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => setConcentration(e.target.value)}>
                                                            <Form.Label>My coaching focus is <span style={{ color: 'red'}}>*</span></Form.Label>
                                                            <Form.Control as="select">
                                                                <option>Life Coaching</option>
                                                                <option>Nutrition & Fitness</option>
                                                                <option>Health and Wellness Coaching</option>
                                                                <option>Holistic Health & Wellness Coaching</option>
                                                                <option>Spiritual Wellness Coaching</option>
                                                            </Form.Control>
                                                        </Form.Group>

                                                    </li>

                                                    <br/>
                                                    <br/>

                                                    <li>
                                                        <Form.Group id= "input" onChange={ (e) => setDateOfBirth(e.target.value)}>
                                                                <Form.Label id = "information"> Date of birth <span style={{ color: 'red'}}>*</span></Form.Label>
                                                                <Form.Control placeholder = "Year/Month/Day"/>
                                                        </Form.Group>
                                                    </li>
                                                    
                                                    <br/>

                                                    <li>
                                                        <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => setConcentration(e.target.value)}>
                                                            <Form.Label>Gender <span style={{ color: 'red'}}>*</span></Form.Label>
                                                            <Form.Control as="select">
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Non-Binary</option>
                                                                <option>Other</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </li>
                                                    
                                                    <br/>

                                                    <li id = "information">
                                                        <Form.Check  inline label="LGBTQIA+ Inclusive"/>
                                                    </li>

                                                </ul>
                                            </div>
    
                                        </div>
                                    </div>
                                </Tab>

                            </Tabs>
                        </div>

                    </div>
                </div>
        </div>
    )

}


export default CoachApplication;