
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import  { isEmail } from 'validator';
import { login, register} from '../../../redux/actions/authAction';


import "../index.css";

import Login from './Login';
import Signup from './Signup';

const ContactInformation = (
    {
        isLoggedIn,
        handleNext 
    }) => {

    const dispatch = useDispatch();

    const [formShowing, setFormShowing] = useState("login");
    // Login Page Values
    const [loginEmail, setLoginEmail] = useState("");
    const [loginEmailError, setLoginEmailError] = useState(true);
    const onChangeLoginEmail = (e) => {
        setLoginEmail(e.target.value);
        setLoginEmailError(!e.target.value);
    }

    const [loginPassword, setLoginPassword] = useState("");
    const [loginPasswordError, setLoginPasswordError] = useState(true);
    const onChangeLoginPassword = (e) => {
        setLoginPassword(e.target.value);
        setLoginPasswordError(!e.target.value);
    }


    useEffect(() => {
        if (isLoggedIn) {
            handleNext();
        }
    }, [isLoggedIn])

    const handleLogin = async () => {
        try {
            if (!loginEmailError && !loginPasswordError) {
                dispatch(login(loginEmail, loginPassword));
            }
        } catch (error) {
            console.log(error);   
        }
    }

    // Signup page values
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState(true);
    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(!e.target.value);
    }

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState(true);
    const onChangeLastName = (e) => {
        setLastName(e.target.value);
        setLastNameError(!e.target.value);
    }

    const [emailError, setEmailError] = useState(true)
    const [email, setEmail] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        setEmailError(!isEmail(e.target.value) || (!e.target.value))
    }

    const [passwordError, setPasswordError] = useState(true)
    const [password, setPassword] = useState("");
    const onChangePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError(!e.target.value);
        setConfirmPasswordError(e.target.value !== confirmPassword)
    }


    const [confirmPasswordError, setConfirmPasswordError] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState("");
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(!e.target.value || e.target.value !== password)
    }


    const [phoneError, setPhoneError] = useState(true)
    const [phone, setPhone] = useState("");
    const onChangePhoneNumber = (e) => {
        setPhone(e.target.value);
        setPhoneError(!e.target.value)
    }

    const validatedSignup = () => {
        return (!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError && !phoneError )
    }
 
    const handleSignup = async() => {
        try {
            if (validatedSignup()) {
                const params = {
                    "first_name": firstName,
                    "last_name": lastName,
                    "username": firstName + lastName + Math.ceil(Math.random() * 10),
                    "email": email,
                    "password": password,
                    "password2": confirmPassword,
                    "is_coach": false,
                    "is_customer": true,
                    "is_active": true,
                    "zip_code": '',
                    'dob': '',
                    'street': '',
                    'city': '',
                    'state': '',
                    'country': ''
                };
                const response = await dispatch(register(params));
            }
        } catch (error) {
            console.log(error);
        }
    }
        return (
            <div>
                {formShowing === "signup" ? 
                    <Signup
                        email={email}
                        password={password} 
                        confirmPassword={confirmPassword}
                        firstNameError={firstNameError}
                        lastNameError={lastNameError}
                        emailError={emailError}
                        passwordError={passwordError}
                        confirmPasswordError={confirmPasswordError}
                        phoneNumberError={phoneError}
                        onChangeFirstName={onChangeFirstName}
                        onChangeLastName={onChangeLastName}
                        onChangeEmail={onChangeEmail}
                        onChangePassword={onChangePassword}
                        onChangeConfirmPassword={onChangeConfirmPassword}
                        onChangePhoneNumber={onChangePhoneNumber}
                        setFormShowing={setFormShowing}
                        handleSubmit={handleSignup} 
                    /> : 
                    <Login 
                        email={loginEmail}
                        onChangeEmail={onChangeLoginEmail}
                        onChangePassword={onChangeLoginPassword}
                        emailError={loginEmailError}
                        passwordError={loginPasswordError}
                        setFormShowing={setFormShowing}
                        handleSubmit={handleLogin}
     
                    />
                }
            </div>   
        )
}

export default ContactInformation