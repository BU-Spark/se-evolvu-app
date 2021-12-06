
import React, {useState} from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

import "../../index.css";

const Signup = (
    {
        email,
        password,
        confirmPassword,
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        confirmPasswordError,
        phoneNumberError,
        onChangeFirstName,
        onChangeLastName,
        onChangeEmail,
        onChangePassword,
        onChangeConfirmPassword,
        onChangePhoneNumber,
        setFormShowing,
        handleSubmit 
    }) => {
    return (
        <div id = "centerBlockCoach" className = "col-sm mx-auto">
                <div style={{"textAlign": "left;", "marginBottom": "5%", "fontWeight": "bold"}}>
                    <h2>Signup with contact information</h2>
                </div>
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

                    <ul className="list-unstyled">
                        <li id = "information">Phone Number <span style={{ color: 'red'}}>*</span></li>

                        <li>
                        <Form.Group id="input" onChange={(e) => { onChangePhoneNumber(e)}}>
                            <Form.Control type = "text" placeholder= ""/>
                        </Form.Group>
                        {
                                phoneNumberError ? <Alert style = {{padding: "0px"}} variant="danger">This is a required field</Alert> : null
                        }

                        </li>
                    </ul>

                    <br/>

                    <ul className="list-unstyled">
                        <li>
                            <h6>Already have an account? <Button variant="link" onClick={() => setFormShowing("login")}>Login</Button></h6>
                        </li>
                    </ul>

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

                {/*END SECOND COLUMN BELOW*/}
                </div>
            </div> 
            <Button variant = "dark"  onClick={handleSubmit} style = {{float: "right"}}>
            Continue
            </Button>
        </div>
)

}

export default Signup