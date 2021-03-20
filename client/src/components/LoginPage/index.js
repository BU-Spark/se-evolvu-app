import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { login } from '../../redux/actions/authAction.js'
import "./index.css";

const LoginPage = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        console.log(password)
        setPassword(e.target.value);
    }

    const onLogin = (e) => {
        e.preventDefault();
        dispatch(
            login(email, password)
                .then( () => {
                    // Redirect to homepage
                    setError(false)
                })
                .catch( () => {
                    setError(true)
                })
        )
    }

    return (
        <div className="container" id="login-container">
            
            <div className="login-form">
                <h3 style={{ paddingBottom: '10px'}}>
                    Login
                </h3>
                {
                    error ? <Alert variant="danger">An error has occurred while trying to login.</Alert> : null
                }
                <Form>
                    <Form.Group controlId="formBasicEmail" onChange={(e) => { onChangeEmail(e)}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" onChange={(e) => { onChangePassword(e) }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button id="login-form-submit" type="submit" onClick={(e) => onLogin(e)}>
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