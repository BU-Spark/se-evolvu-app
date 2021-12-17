
import React, {useState} from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

import "../index.css";

const BasicInformation = (
    {
        onChangeFirstName,
        onChangeLastName, 
        onChangeEmail,
        onChangePassword, 
        onChangeConfirmPassword,
        onChangeFacebook,
        onChangeInstagram,
        onChangeTwitter,  
        firstNameError,
        lastNameError, 
        emailError, 
        passwordError, 
        confirmPasswordError,
        password,
        confirmPassword,
        email,
        handleNext 
    }) => {
    return (

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

                    <ul className="list-unstyled">
                        <li id = "information">Confirm Password <span style={{ color: 'red'}}>*</span></li>

                        <li>
                            <Form.Group id="input" onChange={(e) => { onChangeConfirmPassword(e) }}>
                                    <Form.Control type="password" placeholder= ""/>
                            </Form.Group>
                            {
                            confirmPasswordError ? <Alert style = {{padding: "0px"}} variant="danger"> {password !== confirmPassword ? "Confirmed password must equal password" : "This is a required field."} </Alert> : null
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
                        Join EvolvU

                        <ul id ="listBenefits">
                            <li id ="listBenefit"><small>Reach new clients</small></li>
                            <li id ="listBenefit"><small>Have endless acess to manage your business</small></li>
                            <li id ="listBenefit"><small>Be a part of a growing wellness community</small></li>
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
                            {/*onChange={ (e) => setConcentration(e.target.value)}*/}
                            <Form.Group id="information" className="register-form-input" > 
                                <Form.Control as="select">
                                    <option></option>
                                    <option>Search Engine (Google, Safari, etc)</option>
                                    <option>Social Media</option>
                                    <option>Blog Post or Advertisement</option>
                                    <option>Peer Referral/Word of Mouth</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                        </li>
                    </ul>

                    <br/>
                    
                    <ul className="list-unstyled">
                        <li id = "information">Facebook Link </li>

                        <li>
                        <Form.Group id="input" onChange={(e) => { onChangeFacebook(e)}}>
                            <Form.Control type = "url" placeholder= "https://www.facebook.com/johndoe"/>
                        </Form.Group>

                        </li>
                    </ul>

                    <br/>

                    <ul className="list-unstyled">
                        <li id = "information">Instagram Link </li>

                        <li>
                        <Form.Group id="input" onChange={(e) => { onChangeInstagram(e)}}>
                            <Form.Control type = "url" placeholder= "https://www.instagram.com/johndoe"/>
                        </Form.Group>

                        </li>
                    </ul>

                    <br/>

                    <ul className="list-unstyled">
                        <li id = "information">Twitter Link </li>

                        <li>
                        <Form.Group id="input" onChange={(e) => { onChangeTwitter(e)}}>
                            <Form.Control type="url" placeholder= "https://www.twitter.com/johndoe"/>
                        </Form.Group>

                        </li>
                    </ul>

                    <br/>
                    <br/>
                {/*END SECOND COLUMN BELOW*/}
                </div>
            </div> 
            <Button variant = "dark"  onClick={handleNext} style = {{float: "right"}}>
            Continue
            </Button>
        </div>
)

}

export default BasicInformation