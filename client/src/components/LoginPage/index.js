import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

import  { isEmail } from 'validator';

import { setLoginSuccess, setLoginFailure } from '../../redux/actions/authAction.js';
import authServices from '../../services/authServices.js';
import "./index.css";

const LoginPage = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const message = useSelector(state => state.messageReducer.message);
    const isLoggedin = useSelector(state => state.authReducer.isLoggedin);

    const validate = () => {

        if (!isEmail(email) || (!email)) {
            setEmailError(true)
        } else { setEmailError(false) }

        if (!password) {
            setPasswordError(true) 
        } else { setPasswordError(false) }

        return (!emailError && !passwordError)
            
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = async (e) => {
        try {
            e.preventDefault();

            if (validate()) {
                const data = await authServices.login(email, password);
                dispatch(setLoginSuccess(data));                
            }   
        } catch (error) {
            dispatch(setLoginFailure(error.message ? error.message : "Unable to login with provided credentials"));
        }
    }

    if (isLoggedin) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="outer-container">
            <div className="container-fluid" id="login-container">
                <h1 className="login-header">Sign in</h1>
                <div className="login-subtitle">Don't have an account? Sign up <Link to="/register"> here </Link> </div> 
                <div className="login-form">
                    <Form>
                        { message && (
                                <Alert variant="danger">
                                    {message}
                                </Alert>
                        )}
                        <Form.Group controlId="formBasicEmail" onChange={(e) => { onChangeEmail(e)}}>
                            <Form.Label>Email</Form.Label>
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
                            Sign-in
                        </Button>
                    </Form>
                    <hr></hr>
                    <p> You can also login with: </p>
                    <Button id="login-social-media">Google</Button>
                    <Button id="login-social-media">Facebook</Button>
                </div>
            </div>
        </div>
    )
}


export default LoginPage;