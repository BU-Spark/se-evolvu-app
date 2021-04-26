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
import Image from 'react-bootstrap/Image'
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

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

    const [birthdayError, setBirthdayError] = useState(false)
    const [DateOfBirth, setDateOfBirth] = useState("");
    const onChangeDateOfBirth = (e) => {
        setDateOfBirth(e.target.value);
    }

    const [focusError, setFocusError] = useState(false)
    const [focus, setFocus] = useState("");
    const onChangeFocus = (e) => {
        setFocus(e.target.value);
    }

    const [genderError, setGenderError] = useState(false)
    const [gender, setGender] = useState("");
    const onChangeGender = (e) => {
        setGender(e.target.value);
    }

    const [phoneError, setPhoneError] = useState(false)
    const [phone, setPhone] = useState("");
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const [streetError, setStreetError] = useState(false)
    const [street, setStreet] = useState("");
    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }

    const [aptError, setAptError] = useState(false)
    const [apt, setApt] = useState("");
    const onChangeApt = (e) => {
        setApt(e.target.value);
    }

    const [cityError, setCityError] = useState(false)
    const [city, setCity] = useState("");
    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const [stateError, setStateError] = useState(false)
    const [state, setState] = useState("");
    const onChangeState = (e) => {
        setState(e.target.value);
    }

    const [zipError, setZipError] = useState(false)
    const [zip, setZip] = useState("");
    const onChangeZip = (e) => {
        setZip(e.target.value);
    }

    const [countryError, setCountryError] = useState(false)
    const [country, setCountry] = useState("");
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const [experienceError, setExperienceError] = useState(false)
    const [experience, setExperience] = useState("");
    const onChangeExperience = (e) => {
        setExperience(e.target.value);
    }

    const [sessionError, setSessionError] = useState(false)
    const [session, setSession] = useState("");
    const onChangeSession = (e) => {
        setSession(e.target.value);
    }

    const [credentialError, setCredentialError] = useState(false)
    const [credential, setCredential] = useState("");
    const onChangeCredential = (e) => {
        setCredential(e.target.value);
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

    const validate2 = () => {

        
        if (!focus) {
            setFocusError(true) 
        } else { setFocusError(false) }

        if (!DateOfBirth) {
            setBirthdayError(true) 
        } else { setBirthdayError(false) }

        if (!gender) {
            setGenderError(true) 
        } else { setGenderError(false) }

        if (!phone) {
            setPhoneError(true) 
        } else { setPhoneError(false) }

        if (!street) {
            setStreetError(true) 
        } else { setStreetError(false) }

        if (!apt) {
            setAptError(true) 
        } else { setAptError(false) }

        if (!state) {
            setStateError(true) 
        } else { setStateError(false) }

        if (!city) {
            setCityError(true) 
        } else { setCityError(false) }

        if (!zip) {
            setZipError(true) 
        } else { setZipError(false) }

        if (!country) {
            setCountryError(true) 
        } else { setCountryError(false) }

        if (!experience) {
            setExperienceError(true) 
        } else { setExperienceError(false) }

        if (!session) {
            setSessionError(true) 
        } else { setSessionError(false) }

        if (!credential) {
            setCredentialError(true) 
        } else { setCredentialError(false) }

        if (focus === "") {
            return false;
        }

        if (DateOfBirth === "") {
            return false;
        }

        if (gender === "") {
            return false;
        }

        if (phone === "") {
            return false;
        }

        if (street === "") {
            return false;
        }

        if (apt === "") {
            return false;
        }

        if (city === "") {
            return false;
        }

        if (zip === "") {
            return false;
        }

        if (country === "") {
            return false;
        }

        if (experience === "") {
            return false;
        }

        if (session === "") {
            return false;
        }

        if (credential === "") {
            return false;
        }

        return true;
    }

    const [concentration, setConcentration] = useState(" ");

    return( 

        <div id= "CoachAppPage">
            <div  id = "headerMessage" style = {{paddingTop:"2.5%", height: "0rem", paddingBottom: "1.25%"}}className = "col-sm-5 mx-auto">
                <h1>Apply and Start Your Health
                    <br/>and Wellness Coaching Journey with EvolvU!</h1>
            </div>


                
                <div id="ApplicationPage">
                    <div className = "container" style ={{width: "70%"}}>

                        <div className="profile-tabs">
                            <Tabs activeKey = {tab} >


                                {/*xxxxxxxxxxxxxFIRST PAGExxxxxxxxxxx */}
                                <Tab  eventKey= "basicInfo" title="Basic Information" tabClassName="profile-tabitem">
                                    <div id = "centerBlockCoach" className = "col-sm mx-auto">

                                        <div id = "questionsRow" className = "d-flex row">
                                            {/*BEGIN FIRST COLUMN BELOW*/} 
                                            <div id="questionCol" className = "col-sm-5 mx-1">

                                                <ul className="list-unstyled">
                                                    <li id = "information">First Name <span style={{ color: 'red'}}>*</span></li>

                                                    <li>
                                                        <Form.Group id = "input" onChange={(e) => {onChangeFirstName(e)}}>
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
                                                                <option></option>
                                                                <option>Google</option>
                                                                <option>Instagram</option>
                                                                <option>Facebook</option>
                                                                <option>Other</option>
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

                                                        <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => onChangeFocus(e)}>
                                                            <Form.Label>My coaching focus is <span style={{ color: 'red'}}>*</span></Form.Label>
                                                            <Form.Control as="select">
                                                                <option></option>
                                                                <option>Life Coaching</option>
                                                                <option>Nutrition & Fitness</option>
                                                                <option>Health and Wellness Coaching</option>
                                                                <option>Holistic Health & Wellness Coaching</option>
                                                                <option>Spiritual Wellness Coaching</option>
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
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Non-Binary</option>
                                                                <option>Other</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                        {
                                                        genderError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                                        }
                                                    </li>
                                                    
                                                    <br/>
                                                    <br/>
                                                    <br/>

                                                    <li id = "information">
                                                        <Form.Check  inline label="LGBTQIA+ Inclusive"/>
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
                                                            <Form.File style = {{width: "46.7%"}} id="custom-file" label="" data-browse="Upload Photo" custom/>
                                                        </Form>
                                                    </li>

                                                    <li>
                                                        <div id = "blueText1" style = {{marginLeft: "8%", paddingTop: "2%"}}>
                                                            Please crop and save to continue. It must be a picture of you. No logos or other images.
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <Button variant = "dark" disableElevation  style = {{marginLeft: "25%", marginTop: "2%"}}>
                                                            Save
                                                        </Button>
                                                    </li>

                                                    <br/>

                                                    <li>
                                                        <Form.Group id="input" style = {{width: "80%"}} onChange={ (e) => onChangePhone(e)}>
                                                            <Form.Label id = "information"> Phone Number <span style={{ color: 'red'}}>*</span></Form.Label>
                                                            <Form.Control  placeholder= ""/>
                                                        </Form.Group>
                                                        {
                                                        phoneError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                                                        }
                                                    </li>
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
                                                            <Form.Label id = "information"> Apt or Unit # <span style={{ color: 'red'}}>*</span></Form.Label>
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
                                                                        <option>Massachussetts</option>
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

                                        <Form.Group id="input" style = {{width: "100%"}}>
                                            <Form.Control  placeholder= ""/>
                                        </Form.Group>

                                        <br/>

                                        <Button variant = "dark" disableElevation onClick={() => 

                                            {if(validate2())
                                            {
                                                setTab("setPricing");
                                            }
                                            else{
                                                setTab("background");
                                            }}}

                                            style = {{ marginLeft: "88%"}}>
                                            Continue
                                        </Button>

                                        <Button variant = "dark" disableElevation onClick={() => 

                                            {setTab("basicInfo");}}

                                            style = {{ marginTop: "5%", marginLeft: "92.5%"}}>
                                            Back
                                        </Button>
       

                                    </div> {/*page end*/}
                                </Tab>

                                <Tab eventKey= "setPricing" title="Set Pricing" tabClassName="profile-tabitem">
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

                                                <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => onChangeState(e)}>
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

                                                <Form.Group id="dropDown" className="register-form-input" onChange={ (e) => onChangeState(e)}>
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

                                                <Form.Group id="input" style = {{width: "100%"}}>
                                                    <Form.Control  placeholder= ""/>
                                                </Form.Group>

                                            </div>

                                            <div id="questionCol" className = "col-sm-1 mx-3"></div> 

                                            <div id="questionCol" className = "col-sm-5 mx-1">

                                                <br/>
                                                <br/>

                                                <div id = "information">
                                                    Phone Number
                                                </div>

                                                <br/>

                                                <Form.Group id="input" style = {{width: "100%"}}>
                                                    <Form.Control  placeholder= ""/>
                                                </Form.Group>

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