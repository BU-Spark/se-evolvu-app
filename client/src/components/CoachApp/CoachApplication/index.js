import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import  { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Types } from '../../../redux/actions/actionTypes';
import { setRegisterError, setRegisterSuccess } from '../../../redux/actions/authAction.js';
import authServices from '../../../services/authServices';
import coachServices from '../../../services/coachServices';
import "./index.css";

// Import Steps of the Form
import Background from './Background/index.js';
import BasicInformation from './BasicInformation/index.js';
import SetPricing from './SetPricing/index.js';
import SetSchedule from './SetSchedule/index.js';
import Finalize from './Finalize/index.js';

const CoachApplication = () => {
    
    const titles = [
        "Welcome, let's set up your account!", 
        "Allow clients to get to know you through your coach profile", 
        "Next We’ll Set Up Your Single Session Rate!",
        "Successful Health and Wellness Coaching Starts with an Accurate Calendar",
        "You’ve Made it! Review Your Information Below to Get Started Coaching Clients!"
    ];
    const subtitles = [
        "Start your account setup by providing some basic information",
        "By selecting the focuses that apply to you, you'll show up in the search results for all services you select. All fields are required",
        "",
        "",
        ""
    ];
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState(titles[0]);
    const [subtitle, setSubtitle] = useState(subtitles[0]);

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedin);
    const history = useHistory();

    useEffect(() => {
        if (isLoggedIn) {
            history.push("/dashboard");
        }
    }, [isLoggedIn])


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
                    setTitle(titles[step]);
                    setSubtitle(subtitles[step])
                    nextStep();
                }
                break;
            case 2:
                if (validateBasicInformation()){
                    setTitle(titles[step]);
                    setSubtitle(subtitles[step])
                    nextStep();
                }
                break;
            case 3: 
                if (validatePricing()) {
                    setTitle(titles[step]);
                    setSubtitle(subtitles[step])
                    nextStep();
                }
                break;
            case 4:
                if (validateSchedule()) {
                    setTitle(titles[step]);
                    setSubtitle(subtitles[step])
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
        const curr = step;
        setTitle(titles[curr -2])
        setSubtitle(subtitles[curr -2])
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
        setPasswordError(!e.target.value);
        setConfirmPasswordError(e.target.value !== confirmPassword)
    }


    const [confirmPasswordError, setConfirmPasswordError] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState("");
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(!e.target.value || e.target.value !== password)
    }

    
    const [facebookLink, setFacebookLink] = useState("");
    const onChangeFacebook = (e) => {
        setFacebookLink(e.target.value);
    }

    const [instagramLink, setInstagramLink] = useState("");
    const onChangeInstagram = (e) => {
        setInstagramLink(e.target.value);
    }

    const [twitterLink, setTwitterLink] = useState("");
    const onChangeTwitter = (e) => {
        setTwitterLink(e.target.value);
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

    const [aptError, setAptError] = useState(false)
    const [apt, setApt] = useState("");
    const onChangeApt = (e) => {
        setApt(e.target.value);
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
        }
        else {
            setDigitOnly(false);
        }
        setZip(e.target.value);
        setZipError(!e.target.value);
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

    const [bioError, setBioError] = useState(true)
    const [bio, setBio] = useState("");
    const onChangeBio = (e) => {
        setBio(e.target.value);
        setBioError(!e.target.value);
    }

    const [isRemote, setIsRemote] = useState(false);
    const [isInPerson, setIsInPerson] = useState(false);
    const [isRemoteError, setIsRemoteError] = useState(true);
    const [remotePlatform, setRemotePlatform] = useState("zoom");
    const onChangeRemotePlatform = (e) => {
        setRemotePlatform(e.target.value);
    }
    const onChangeRemoteStatus = (e) => {
        setIsRemoteError(!e.target.value);
        if (e.target.value === "remote") {
            setIsRemote(true);
            setIsInPerson(false);
        }
        if (e.target.value === "in-person") {
            setIsInPerson(true);
            setIsRemote(false);
        }
        if (e.target.value === "both") {
            setIsInPerson(true);
            setIsRemote(true);
        }
    }

    const [trainingPhoneError, setTrainingPhoneError] = useState(true)
    const [trainingPhone, setTrainingPhone] = useState("");
    const onChangeTrainingPhone = (e) => {
        setTrainingPhone(e.target.value);
        setTrainingPhoneError(!e.target.value);
    }

    const [trainingAddressError, setTrainingAddressError] = useState(true)
    const [trainingAddress, setTrainingAddress] = useState("");
    const onChangeTrainingAddress = (e) => {
        setTrainingAddress(e.target.value);
        setTrainingAddressError(!e.target.value);
    }

    const [digitOnlyError, setDigitOnly] = useState(false);

    const [sessionLengthError, setSessionLengthError] = useState(true);
    const [sessionLength, setSessionLength] = useState("");
    const onChangeSessionLength = (e) => {
        setSessionLength(e.target.value);
        setSessionLengthError(!e.target.value);
    }

    const [sessionRateError, setSessionRateError] = useState(true);
    const [sessionRate, setSessionRate] = useState("");
    const onChangeSessionRate = (e) => {
        setSessionRate(e.target.value);
        setSessionRateError(!e.target.value);
    }

    const [schedule, setSchedule] = useState([]);
    const [scheduleError, setScheduleError] = useState(true);
    const onChangeSchedule = (newSchedule) => {
        setScheduleError(newSchedule.length === 0)
        setSchedule(newSchedule);
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const splitArray = sessionRate.split("-");
            const minPrice = splitArray[0];
            const maxPrice = splitArray[1];
            const params = {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "username": firstName + lastName + Math.ceil(Math.random() * 10),
                "password": password,
                "password2": confirmPassword,
                "facebook": facebookLink,
                "instagram": instagramLink,
                "twitter": twitterLink,
                "dob": DateOfBirth,
                "focus": focus,
                "gender": gender,
                "phone": phone,
                "street": street,
                "city": city,
                "state": state,
                "zip_code": zip,
                "country": country,
                'experienceDescription': experience, 
                'credentialDescription': session, 
                'sessionDescription': credential,
                'description': bio, 
                'remote': isRemote,
                'inPerson': isInPerson,
                'schedule': coachServices.formatCalendarForUpload(schedule),
                'remotePlatform': remotePlatform,
                'trainingAddress': trainingAddress, 
                'trainingPhone': trainingPhone, 
                'sessionLength': sessionLength, 
                'minPrice': parseInt(minPrice), 
                'maxPrice': parseInt(maxPrice),
                'is_customer': false,
                'is_coach': true,
                'is_active': true
            }
            const data = await authServices.register_coach(params);
            dispatch(setRegisterSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(setRegisterError("Unable to register for a coach account at this time."));
        }
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
        return !(sessionLengthError || sessionRateError || trainingAddressError || trainingPhoneError)
    }

    const validateSchedule = () => {
        if (schedule.length === 0) {
            setScheduleError(true);
            return false;
        }
        return true;
    }

    const validateFinalize = () => {
        return true;
    }
    return( 

        <div id= "CoachAppPage">
            <div  id = "headerMessage" className = "col-sm-5 mx-auto">
                <h1>{title}</h1>
                <h3 id="subtitleDesc">{subtitle}</h3>
            </div>
                <div id="ApplicationPage">
                    <div className = "container" style ={{width: "70%"}}>

                        <div className="profile-tabs">
                            <Tabs activeKey = {step} >


                                {/*xxxxxxxxxxxxxFIRST PAGExxxxxxxxxxx */}
                                <Tab eventKey={1} title="Basic Information" tabClassName="profile-tabitem">
                                    <BasicInformation 
                                            onChangeFirstName={onChangeFirstName}
                                            onChangeLastName={onChangeLastName}
                                            onChangeEmail={onChangeEmail}
                                            onChangePassword={onChangePassword}
                                            onChangeConfirmPassword={onChangeConfirmPassword}
                                            onChangeFacebook={onChangeFacebook}
                                            onChangeInstagram={onChangeInstagram}
                                            onChangeTwitter={onChangeTwitter}
                                            firstNameError={firstNameError}
                                            lastNameError={lastNameError}
                                            emailError={emailError}
                                            passwordError={passwordError}
                                            confirmPasswordError={confirmPasswordError}
                                            password={password}
                                            confirmPassword={confirmPassword}
                                            email={email}
                                            handleNext={handleNext}
                                            />
                                </Tab>

                                {/*xxxxxxxxxxSECOND PAGExxxxxxxxxxxxxxxxxxxxx*/}
                                <Tab eventKey={2} title="Background" tabClassName="profile-tabitem">
                                    <Background 
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
                                            bioError={bioError}
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
                                            onChangeBio={onChangeBio}
                                            handlePrev={handlePrev}
                                            handleNext={handleNext}
                                    />
                                </Tab>

                                <Tab eventKey={3} title="Set Pricing" tabClassName="profile-tabitem">
                                    <SetPricing
                                            isRemote={isRemote}
                                            isInPerson={isInPerson}
                                            isRemoteError={isRemoteError}
                                            sessionLengthError={sessionLengthError}
                                            sessionRateError={sessionRateError} 
                                            trainingAddressError={trainingAddressError}
                                            trainingPhoneError={trainingPhoneError}
                                            onChangeRemotePlatform={onChangeRemotePlatform}
                                            onChangeRemoteStatus={onChangeRemoteStatus}
                                            onChangeSessionLength={onChangeSessionLength}
                                            onChangeSessionRate={onChangeSessionRate}
                                            onChangeTrainingAddress={onChangeTrainingAddress}
                                            onChangeTrainingPhone={onChangeTrainingPhone}
                                            handlePrev={handlePrev}
                                            handleNext={handleNext}
                                    />
                                </Tab>

                                <Tab eventKey={4} title="Set Schedule" tabClassName="profile-tabitem">
                                    <SetSchedule
                                        schedule={schedule}
                                        scheduleError={scheduleError}
                                        onChangeSchedule={onChangeSchedule} 
                                        handlePrev={handlePrev}
                                        handleNext={handleNext}
                                    />
                                </Tab>

                                <Tab eventKey={5} title="Payment" tabClassName="profile-tabitem">
                                    <Finalize
                                        handleSubmit={handleSubmit}
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