import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import  { isEmail } from 'validator';

import { login } from '../../redux/actions/authAction.js'
import "./index.css";

const LoginPage = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const message = useSelector(state => state.messageReducer.message);

    const validate = () => {

        if (!isEmail(email) || (!email)) {
            setEmailError(true)
        }

        if (!password) {
            setPasswordError(true)
        }

        return (!emailError && !passwordError)
            
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = (e) => {
        e.preventDefault();

        if (validate()) {
            dispatch( login(email, password) )
                    .then( () => {
                        // Redirect to homepage
                        setEmailError(false)
                        setPasswordError(false)
                    })
                    .catch( () => {
                    })
            
        }
    }

    return (
        <div className="container" id="login-container">
            
            <div className="login-form">
                <h3 style={{ paddingBottom: '10px'}}>
                    Login
                </h3>
                <Form>
                    { message && (
                            <Alert variant="danger">
                                {message}
                            </Alert>
                    )}
                    <Form.Group controlId="formBasicEmail" onChange={(e) => { onChangeEmail(e)}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    {
                        emailError ? <Alert variant="danger"> {!isEmail(email) ? "Not a valid email" : "This is a required field."} </Alert> : null
                    }
                    <Form.Group controlId="formBasicPassword" onChange={(e) => { onChangePassword(e) }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        passwordError ? <Alert variant="danger"> This is a required field. </Alert> : null
                    }
                    <Button id="login-form-submit" type="submit" onClick={(e) => onLogin(e)} disabled={ (email && password) ? false : true}>
                        Submit
                    </Button>
                </Form>
                <hr></hr>
                <p> You can also login with: </p>
                <Button id="login-social-media">Google</Button>
                <Button id="login-social-media">Facebook</Button>
            </div>
        </div>
    )
}


export default LoginPage;