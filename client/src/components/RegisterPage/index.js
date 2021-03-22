import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import  { isEmail } from 'validator';
import { Types } from '../../redux/actions/actionTypes.js';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';

import { register } from '../../redux/actions/authAction.js';

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
    const [concentration, setConcentration] = useState(" ");
    const [areaCode, setAreaCode] = useState(" ");

    const [successfullyRegistered, setSuccessfullyRegistered] = useState(false);

    const validate = () => {

        if (firstName === " " || firstName === "") {
            return false;
        }

        if (lastName === " " || lastName === "") {
            return false;
        }

        if (email === " " || email === "" || !isEmail(email)) {
            return false;
        }

        if (password === " " || password === "" || !isEmail(email)) {
            return false;
        }

        if (areaCode === " " || areaCode === "" || !isEmail(email)) {
            return false;
        }

        // Check if passwords match
        if (confirmPassword.localeCompare(password) ) {
            setConfirmPasswordError(true)
        } else {
            setConfirmPasswordError(false)
        }

        return true;
    }

    const onRegister = (e) => {
        e.preventDefault()

        if (validate()) {
            const params = { 
                firstName,
                lastName,
                email,
                password,
                areaCode,
                concentration
            };
            dispatch(register(params))
                .then( () => {
                    setSuccessfullyRegistered(true);
                })
                .catch( () => {
                    setSuccessfullyRegistered(false);
                })
        } else {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: "One or more of the fields below are invalid.",
            });
        }
    }

    if (successfullyRegistered) {
        return <Redirect to="/login"/>
    }

    return (
        <div className="container" id="register-container">
            
            <div className="register-form-container">
                <h2 style={{ paddingBottom: '10px', textAlign: 'center'}}>
                    Sign Up to Join the EvolvU Network and Find Your Coach
                </h2>
                <p style={{ paddingBottom: '10px', textAlign: 'center'}}> Already have an account? Sign in <Link to="/login"> here </Link>.</p>
                <div className="register-form">
                
                    <Form >
                        { message && (
                                <Alert variant="danger">
                                    {message}
                                </Alert>
                        )}
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
                                <Form.Group controlId="registrationAreaCode" className="register-form-input" onChange={ (e) => setAreaCode(e.target.value)}>
                                    <Form.Label>Area Code <span style={{ color: 'red'}}>*</span></Form.Label>
                                    <Form.Control type="" placeholder="Area Code" />
                                </Form.Group>
                                {
                                    areaCode ? null : <Alert variant="danger"> This is a required field. </Alert>
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
                                {
                                    confirmPasswordError ? <Alert variant="danger"> Passwords do not match. </Alert> : null
                                }
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