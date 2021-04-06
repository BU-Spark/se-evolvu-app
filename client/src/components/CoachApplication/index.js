import React, { useState } from 'react';
import "./index.css";
import InputGroup from 'react-bootstrap/InputGroup';
import FirstPage from "./FirstPage/";
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

    const validate = () => {

        if (!isEmail(email) || (!email)) {
            setEmailError(true)
        } else { setEmailError(false) }

        if (!password) {
            setPasswordError(true) 
        } else { setPasswordError(false) }

        return (!emailError && !passwordError)
            
    }

    return( 

        <div id= "CoachAppPage">
            <div  id = "headerMessage" style = {{paddingTop:"50px", height: "80px"}}className = "col-sm-5 mx-auto">
                <h1>Apply and Start Your Health
                    <br/>and Wellness Coaching Journey with EvolvU!</h1>
            </div>


                
                <div id="ApplicationPage">
                    <div className = "container" style ={{width: "70%"}}>

                        <div className="profile-tabs">
                            <Tabs activeKey = {tab}>


                                {/*first page */}
                                <Tab  eventKey= "basicInfo" title="basic information" tabClassName="profile-tabitem">
                                    <div id = "centerBlockCoach" className = "col-sm mx-auto">

                                        <div id = "questionsRow" className = "d-flex row">
                                            {/*BEGIN FIRST COLUMN BELOW*/} 
                                            <div id="questionCol" className = "col-sm-5 mx-1">

                                                <ul className="list-unstyled">
                                                    <li style= {{color: "#373737"}}>First Name</li>

                                                    <li>
                                                        <InputGroup>
                                                            <Form.Control placeholder= "John"/>
                                                        </InputGroup>
                                                    </li>
                                                </ul>

                                                <br/>

                                                <ul className="list-unstyled">
                                                    <li style= {{color: "#373737"}}>Email</li>

                                                    <li>
                                                    <Form.Group controlId="formBasicEmail" onChange={(e) => { onChangeEmail(e)}}>
                                                        <Form.Control type = "email" placeholder= "JohnDoe@xmail.com"/>
                                                    </Form.Group>
                                                    {
                                                         emailError ? <Alert variant="danger"> {!isEmail(email) ? "Not a valid email" : "This is a required field."} </Alert> : null
                                                    }

                                                    </li>
                                                </ul>

                                                <br/>

                                                <ul className="list-unstyled">
                                                    <li style= {{color: "#373737"}}>Password</li>

                                                    <li>
                                                        <Form.Group controlId="formBasicPassword" onChange={(e) => { onChangePassword(e) }}>
                                                                <Form.Control type="password" placeholder= ""/>
                                                        </Form.Group>
                                                        {
                                                        passwordError ? <Alert variant="danger"> This is a required field. </Alert> : null
                                                        }
                                                    </li>
                                                </ul>

                                                <br/>

                                                <div class="form-check" style ={{paddingRight: "0px", marginRight: "0px"}}>
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                            <label class="form-check-label" for="flexCheckDefault" style={{paddingRight: "2rem", color:"#373737"}}>
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
                                                    <li style= {{color: "#373737"}}>Last Name</li>

                                                    <li>
                                                        <InputGroup>
                                                            <Form.Control placeholder= "Doe"/>
                                                        </InputGroup>
                                                    </li>
                                                </ul>

                                                <br/>

                                                <ul className="list-unstyled">
                                                    <li style= {{color: "#373737"}}>How did you hear about us?</li>

                                                    <li>
                                                        <InputGroup className="mb-3">
                                                            <DropdownButton as={InputGroup.Append} variant="light" style = {{width: "15%"}}
                                                            >
                                                                <Dropdown.Item onClick={() => setSource("Google")}>Google</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => setSource("Instagram")}>Instagram</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => setSource("Facebook")}>Facebook</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => setSource("Other")}>Other</Dropdown.Item>
                                                            </DropdownButton>
                                                            <FormControl placeholder = {source} aria-describedby="basic-addon1" />
                                                        </InputGroup>
                                                    </li>
                                                </ul>

                                               
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

                                {/*second page*/}
                                <Tab eventKey= "background" title="background" tabClassName="profile-tabitem">
                                        
                                </Tab>
                            </Tabs>
                        </div>

                    </div>
                </div>
        </div>
    )

}


export default CoachApplication;