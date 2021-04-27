import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import  { isEmail, isAlpha, isStrongPassword, equals, isNumeric } from 'validator';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';

import { register } from '../../redux/actions/authAction.js';
import { clearMessage } from '../../redux/actions/messageAction.js';
import { Types } from '../../redux/actions/actionTypes.js';

import './index.css';

const RegisterPage = () => {

    const message = useSelector(state => state.messageReducer.message);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [confirmPassword, setConfirmPassword] = useState(" ");
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [strongPasswordError, setStrongPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState(false);
    const [concentration, setConcentration] = useState(" ");
    const [zipCode, setzipCode] = useState(" ");

    const [successfullyRegistered, setSuccessfullyRegistered] = useState(false);

    const validate = () => {

        let valid = true;

        if (firstName === " " || firstName === "" || !isAlpha(firstName)) {
            setNameError(true);
            valid = false;
        } else { 
            setNameError(false);
        }

        if (lastName === " " || lastName === "" || !isAlpha(firstName)) {
            setNameError(true);
            valid = false;
        } else { 
            setNameError(false);
        }

        if (email === " " || email === "" || !isEmail(email)) {
            setEmailError(true);
            valid = false;
        } else { 
            setEmailError(false); 
        }


        if (zipCode === " " || zipCode === "" || !isNumeric(zipCode)) {
            setZipCodeError(true);
            valid = false;
        } else {
            setZipCodeError(false);
        }

        // Check if passwords match
        if (!equals(password, confirmPassword) ) {
            setConfirmPasswordError(true);
            valid = false;
        } else {
            setConfirmPasswordError(false);
        }

        if (password === " " || password === "" || 
            !isStrongPassword(password, 
                {
                    minLength: 8, 
                    minLowercase: 1,
                    minUppercase: 1, 
                    minNumbers: 1, 
                    minSymbols: 1
                }
            )) {
            setStrongPasswordError(true);
            valid = false;
        } else { 
            setStrongPasswordError(false);
        }

        return valid;
    }

    const onRegister = (e) => {
        e.preventDefault();
        let valid = validate();
        if (valid) {
            const params = {
                "first_name": firstName,
                "last_name": lastName,
                "username": firstName + lastName + Math.ceil(Math.random() * 10),
                "email": email,
                "password": password,
                "password2": confirmPassword,
                "is_coach": false,
                "is_customer": true,
                "concentration": concentration,
                "zipCode": zipCode
            };
            dispatch(register(params))
                .then( () => {
                    setSuccessfullyRegistered(true);
                })
                .catch( () => {
                    setSuccessfullyRegistered(false);
                });
        } else {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: "One or more of the fields below are invalid.",
            });
        }
    }

    if (successfullyRegistered) {
        dispatch(clearMessage());
        return <Redirect to="/login"/>
    }

    return (
        <div className="container" id="register-container">
            
            <div className="register-form-container">
                <h2 style={{ paddingBottom: '10px', textAlign: 'center'}}>
                    Sign Up to Join the EvolvU Network and Find Your Coach
                </h2>
                <p style={{ paddingBottom: '10px', textAlign: 'center'}}> Already have an account? Sign in <Link to="/login"> here</Link>.</p>
                <div className="register-form">
                
                    <Form >
                        { message && (
                                <Alert variant="danger">
                                    {message}
                                </Alert>
                        )}
                        { nameError && (
                                <Alert variant="danger">
                                    First and Last names may only container alphabetic letters (A - Z).
                                </Alert>
                        )}
                        { emailError && (
                                <Alert variant="danger">
                                    Please enter a valid email address.
                                </Alert>
                        )}
                        { zipCodeError && (
                                <Alert variant="danger">
                                    Please enter a valid 5-digit zip code.
                                </Alert>
                        )}
                        { strongPasswordError && (
                                <Alert variant="danger">
                                    Password is not strong enough. A strong password requires:
                                    <ul>
                                        <li>A minimum of 8 characters.</li>
                                        <li>A minimum of 1 lowercase letter.</li>
                                        <li>A minimum of 1 uppercase letter.</li>
                                        <li>A minimum of 1 number.</li>
                                        <li>A minimum of 1 symbol (e.g. #, $, !).</li>
                                    </ul>
                                </Alert>
                        )}
                        {
                            confirmPasswordError ? <Alert variant="danger"> Passwords do not match. </Alert> : null
                        }
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="registrationFirstName" className="register-form-input" onChange={ (e) => setFirstName(e.target.value)}>
                                    <Form.Label>First Name <span style={{ color: 'red'}}>*</span></Form.Label>
                                    <Form.Control type="" placeholder="Enter First Name" />
                                </Form.Group>
                                {
                                    firstName ? null : <Alert variant="danger"> This is a required field </Alert> 
                            }
                            </Col>
                            <Col>
                                <Form.Group controlId="registrationLastName" className="register-form-input" onChange={ (e) => setLastName(e.target.value)}>
                                    <Form.Label>Last Name <span style={{ color: 'red'}}>*</span></Form.Label>
                                    <Form.Control type="" placeholder="Enter Last Name" />
                                </Form.Group>
                                {
                                    lastName ? null : <Alert variant="danger"> This is a required field. </Alert>
                                }
                            </Col>

                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="registrationEmail" className="register-form-input" onChange={ (e) => setEmail(e.target.value)}>
                                    <Form.Label>Email address <span style={{ color: 'red'}}>*</span></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                {
                                    email ? null : <Alert variant="danger"> {!isEmail(email) ? "Not a valid email" : "This is a required field."} </Alert> 
                                }
                            </Col>
                            <Col>
                                <Form.Group controlId="registrationzipCode" className="register-form-input" onChange={ (e) => setzipCode(e.target.value)}>
                                    <Form.Label>Zip Code <span style={{ color: 'red'}}>*</span></Form.Label>
                                    <Form.Control type="" placeholder="Zip Code" />
                                </Form.Group>
                                {
                                    zipCode ? null : <Alert variant="danger"> This is a required field. </Alert>
                                }
                            </Col>
                        </Form.Row>
                        <Form.Group controlId="registrationConcentration" className="register-form-input" onChange={ (e) => setConcentration(e.target.value)}>
                            <Form.Label>Concentration <span style={{ color: 'red'}}>*</span></Form.Label>
                            <Form.Control as="select">
                                <option>Life Coaching</option>
                                <option>Nutrition & Fitness</option>
                                <option>Health and Wellness Coaching</option>
                                <option>Holistic Health & Wellness Coaching</option>
                                <option>Spiritual Wellness Coaching</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="registrationPassword" className="register-form-input" onChange={ (e) => setPassword(e.target.value)}>
                                    <Form.Label>Password <span style={{ color: 'red'}}>*</span></Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                {
                                    password ? null : <Alert variant="danger"> This is a required field. </Alert>
                                }
                            </Col>
                            <Col>
                                <Form.Group controlId="registrationPasswordConfirm" className="register-form-input" onChange={ (e) => setConfirmPassword(e.target.value)}>
                                    <Form.Label>Password Confirmation <span style={{ color: 'red'}}>*</span></Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <p>*By signing up and joining EvolvU, you agree to our <Link to="/tos-and-policy">Terms of Service and Privacy Policy</Link></p>
                        <Button id="register-form-submit" type="submit" onClick={(e) => onRegister(e)}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            
        </div>
    )
}

export default RegisterPage;