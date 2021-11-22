import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

import "./index.css";

// Import Steps of the Form
import Background from './Background/index.js';
import BasicInformation from './BasicInformation/index.js';
import SetPricing from './SetPricing/index.js';
import SetSchedule from './SetSchedule/index.js';
import Finalize from './Finalize/index.js';

const CoachApplication = () => {
    
    // const [source, setSource] = useState("");
    // const [local, setLocal] = useState("");
    // const [area, setArea] = useState(1);
    const [tab, setTab] = useState("basicInfo");
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(prevStep => prevStep + 1)
    }

    const prevStep = () => {
        setStep(prevStep => prevStep - 1)
    }

    const handleNext = () => {
        switch (step) {
            case 1:
                if (validateBackground()) {
                    nextStep()
                }
                break;
            case 2:
                if (validateBasicInformation()){
                    nextStep()
                }
                break;
            case 3: 
                if (validatePricing()) {
                    nextStep();
                }
                break;
            case 4:
                if (validateSchedule()) {
                    nextStep();
                }
                break;
            default:
                // Final case 
                console.log('Should not handle next but rather submit');
                break;
        }
    }

    const handlePrev = () => {
        prevStep();
    }
    

    const [firstNameError, setFirstNameError] = useState(true)
    const [firstName, setFirstName] = useState("");
    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(!e.target.value);
    }

    const [lastNameError, setLastNameError] = useState(true)
    const [lastName, setLastName] = useState("");
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
        setPasswordError(!password)
    }


    const [confirmPasswordError, setConfirmPasswordError] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState("");
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(!e.target.value || e.target.value !== password)
    }

    const [birthdayError, setBirthdayError] = useState(true)
    const [DateOfBirth, setDateOfBirth] = useState("");
    const onChangeDateOfBirth = (e) => {
        setDateOfBirth(e.target.value);
        setBirthdayError(!e.target.value);
    }

    const [focusError, setFocusError] = useState(true)
    const [focus, setFocus] = useState("");
    const onChangeFocus = (e) => {
        setFocus(e.target.value);
        setFocusError(!e.target.value);
    }

    const [genderError, setGenderError] = useState(true)
    const [gender, setGender] = useState("");
    const onChangeGender = (e) => {
        setGender(e.target.value);
        setGenderError(!e.target.value);
    }

    const [phoneError, setPhoneError] = useState(true)
    const [phone, setPhone] = useState("");
    const onChangePhone = (e) => {
        setPhone(e.target.value);
        setPhoneError(!e.target.value)
    }

    const [streetError, setStreetError] = useState(true)
    const [street, setStreet] = useState("");
    const onChangeStreet = (e) => {
        setStreet(e.target.value);
        setStreetError(!e.target.value);
    }

    const [aptError, setAptError] = useState(true)
    const [apt, setApt] = useState("");
    const onChangeApt = (e) => {
        setApt(e.target.value);
        setAptError(!e.target.value);
    }

    const [cityError, setCityError] = useState(true)
    const [city, setCity] = useState("");
    const onChangeCity = (e) => {
        setCity(e.target.value);
        setCityError(!e.target.value);
    }

    const [stateError, setStateError] = useState(true)
    const [state, setState] = useState("");
    const onChangeState = (e) => {
        setState(e.target.value);
        setStateError(!e.target.value);
    }

    const [zipError, setZipError] = useState(true)
    const [zip, setZip] = useState("");
    const onChangeZip = (e) => {
        if (isNaN(e.target.value)) {
            setDigitOnly(true);
        } else if (digitOnlyError) {
            setDigitOnly(true);
        }
        setZip(e.target.value);
    }

    const [countryError, setCountryError] = useState(true)
    const [country, setCountry] = useState("");
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
        setCountryError(!e.target.value);
    }

    const [experienceError, setExperienceError] = useState(true)
    const [experience, setExperience] = useState("");
    const onChangeExperience = (e) => {
        setExperience(e.target.value);
        setExperienceError(!e.target.value);
    }

    const [sessionError, setSessionError] = useState(true)
    const [session, setSession] = useState("");
    const onChangeSession = (e) => {
        setSession(e.target.value);
        setSessionError(!e.target.value);
    }

    const [credentialError, setCredentialError] = useState(true)
    const [credential, setCredential] = useState("");
    const onChangeCredential = (e) => {
        setCredential(e.target.value);
        setCredentialError(!e.target.value);
    }

    const [page3PhoneError, setPage3PhoneError] = useState(true)
    const [page3Phone, setPage3Phone] = useState("");
    const onChangePage3Phone = (e) => {
        setPage3Phone(e.target.value);
        setPage3PhoneError(!e.target.value);
    }

    const [page3AddressError, setPage3AddressError] = useState(true)
    const [page3Address, setPage3Address] = useState("");
    const onChangePage3Address = (e) => {
        setPage3Address(e.target.value);
        setPage3AddressError(!e.target.value);
    }

    const [digitOnlyError, setDigitOnly] = useState(true);

    const [sessionLengthError, setSessionLengthError] = useState(true);
    const [sessionLength, setSessionLength] = useState("");
    const onChangeSessionLength = (e) => {
        setSessionLength(e.target.value);
        setSessionRateError(!e.target.value);
    }

    const [sessionRateError, setSessionRateError] = useState(true);
    const [sessionRate, setSessionRate] = useState("");
    const onChangeSessionRate = (e) => {
        setSessionRate(e.target.value);
        setSessionRateError(!e.target.value);
    }

    const validateBackground = () => {
        return !(firstNameError || lastNameError || emailError || passwordError || confirmPasswordError);
    }

    const validateBasicInformation = () => {
        return !(
            focusError || 
            birthdayError || 
            genderError || 
            phoneError || 
            streetError || 
            aptError || 
            stateError || 
            cityError ||
            zipError ||
            digitOnlyError ||
            countryError || 
            experienceError || 
            sessionError || 
            credentialError 
            )
    }
    
    const validatePricing = () => {
        return !(sessionLengthError || sessionRateError || page3AddressError || page3PhoneError)
    }

    const validateSchedule = () => {
        return true;
    }

    const validateFinalize = () => {
        return true;
    }
    return( 

        <div id= "CoachAppPage">
            <div  id = "headerMessage" style = {{paddingTop:"2.5%", height: "0rem", paddingBottom: "1.25%"}}className = "col-sm-5 mx-auto">
                <h1>Apply and Start Your Health
                    <br/>and Wellness Coaching Journey with EvolvU!</h1>
            </div>


                
                <div id="ApplicationPage">
                    <div className = "container" style ={{width: "70%"}}>

                        <div className="profile-tabs">
                            <Tabs activeKey = {step} >


                                {/*xxxxxxxxxxxxxFIRST PAGExxxxxxxxxxx */}
                                <Tab eventKey={1} title="Basic Information" tabClassName="profile-tabitem">
                                    <Background 
                                            onChangeFirstName={onChangeFirstName}
                                            onChangeLastName={onChangeLastName}
                                            onChangeEmail={onChangeEmail}
                                            onChangePassword={onChangePassword}
                                            onChangeConfirmPassword={onChangeConfirmPassword}
                                            firstNameError={firstNameError}
                                            lastNameError={lastNameError}
                                            emailError={emailError}
                                            passwordError={passwordError}
                                            confirmPasswordError={confirmPasswordError}
                                            email={email}
                                            handleNext={handleNext}
                                            />
                                </Tab>

                                {/*xxxxxxxxxxSECOND PAGExxxxxxxxxxxxxxxxxxxxx*/}
                                <Tab eventKey={2} title="Background" tabClassName="profile-tabitem">
                                    <BasicInformation 
                                            focusError={focusError}
                                            birthdayError={birthdayError}
                                            genderError={genderError}
                                            phoneError={phoneError}
                                            streetError={streetError}
                                            cityError={cityError}
                                            countryError={countryError}
                                            aptError={aptError}
                                            stateError={stateError}
                                            zipError={zipError}
                                            digitOnlyError={digitOnlyError}
                                            experienceError={experienceError}
                                            credentialError={credentialError}
                                            sessionError={sessionError}
                                            onChangeFocus={onChangeFocus}
                                            onChangeDateOfBirth={onChangeDateOfBirth}
                                            onChangeGender={onChangeGender}
                                            onChangePhone={onChangePhone}
                                            onChangeStreet={onChangeStreet}
                                            onChangeCity={onChangeCity}
                                            onChangeCountry={onChangeCountry}
                                            onChangeApt={onChangeApt}
                                            onChangeState={onChangeState}
                                            onChangeZip={onChangeZip}
                                            onChangeExperience={onChangeExperience}
                                            onChangeCredential={onChangeCredential}
                                            onChangeSession={onChangeSession}
                                            handlePrev={handlePrev}
                                            handleNext={handleNext}
                                    />
                                </Tab>

                                <Tab eventKey={3} title="Set Pricing" tabClassName="profile-tabitem">
                                    <SetPricing 
                                            page3AddressError={page3AddressError}
                                            page3PhoneError={page3PhoneError}
                                            onChangeSessionLength={onChangeSessionLength}
                                            onChangeSessionRate={onChangeSessionRate}
                                            onChangePage3Address={onChangePage3Address}
                                            onChangePage3Phone={onChangePage3Phone}
                                            handlePrev={handlePrev}
                                            handleNext={handleNext}
                                    />
                                </Tab>

                                <Tab eventKey={4} title="Set Schedule" tabClassName="profile-tabitem">
                                    <SetSchedule 
                                        handlePrev={handlePrev}
                                        handleNext={handleNext}
                                    />
                                </Tab>

                                <Tab eventKey={5} title="Payment" tabClassName="profile-tabitem">
                                    <Finalize 

                                    />
                                </Tab>

                            </Tabs>
                        </div>

                    </div>
                </div>
        </div>
    )

}


export default CoachApplication;