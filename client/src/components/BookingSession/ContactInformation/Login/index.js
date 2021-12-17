import React from 'react';
import { Button } from 'react-bootstrap';
import  { isEmail } from 'validator';
import { Col, Alert, Form } from 'react-bootstrap';
import "../../index.css";


const Login = (
    {
        email,
        onChangeEmail,
        onChangePassword,
        emailError,
        passwordError,
        setFormShowing,
        handleSubmit,
}) => {
    return (
        <div id = "centerBlockCoach" className = "col-sm mx-auto">
                <div style={{"textAlign": "left;", "marginBottom": "5%", "fontWeight": "bold"}}>
                    <h2>Login</h2>
                </div>
            <div id = "questionsRow" className = "d-flex row">
                {/*BEGIN FIRST COLUMN BELOW*/} 
                <div id="questionCol" className = "col-sm-5 mx-1">
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
                        <li>
                            <h6>Need an account? <Button variant="link" onClick={() => setFormShowing("signup")}>Sign Up</Button></h6>
                        </li>
                        <li>
                            <h6>Forgot your Password? <Button variant="link">Reset It</Button></h6>
                        </li>
                    </ul>
                    <br/>

                    <div id = "benefits" className = "container">
                        Find the Coach for You

                        <ul id ="listBenefits">
                            <li id ="listBenefit"><small>Save time searching</small></li>
                            <li id ="listBenefit"><small>Easy booking process</small></li>
                            <li id ="listBenefit"><small>Find your perfect coach</small></li>
                            <li id ="listBenefit"><small>Be a part of a growing wellness community.</small></li>
                        </ul>

                    </div>

                {/*END FIRST COLUMN BELOW*/} 
                </div> 

            </div> 
            <Button variant = "dark"  onClick={handleSubmit} style = {{float: "right"}}>
                Continue
            </Button>
        </div>
    )
}


export default Login