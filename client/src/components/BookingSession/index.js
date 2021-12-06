import React, {useState, useEffect} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import userServices from '../../services/userServices';
import queryString from 'query-string';
import {setMessage, clearMessage} from '../../redux/actions/messageAction';

import "./index.css";

// Import Form Components
import ContactInformation from './ContactInformation';
import Finalize from './Finalize';
import FindTime from './FindTime';
import SessionOptions from './SessionOptions';
import Confirmation from './Confirmation';



const BookingSession = (props) => {

    const mapping = {
        0: "sunday",
        1: "monday", 
        2: "tuesday",
        3: "wednesday",
        4: "thursday",
        5: "friday",
        6: "saturday"
    }
    const dispatch = useDispatch();
    const isLoggedin = useSelector(state => state.authReducer.isLoggedin);
    const user_slug = useSelector(state => state.authReducer.slug);
    const message = useSelector(state => state.messageReducer.message);
    const state = useSelector(state => state);
    const [title, setTitle] = useState("Let's get some basic contact info");
    const [subtitle, setSubtitle] = useState("Looking good! Nowe we just need you to confirm your contact information");
    const [step, setStep] = useState(1);


    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [startTimeError, setStartTimeError] = useState(true);
    const [endTimeError, setEndTimeError] = useState(true);
    const [coachParams, setCoachParams] = useState(queryString.parse(props.location.search));
    const [showConfirmation, setShowConfirmation] = useState(false);
    
    const onChangeStartTime = (e) => {
        setStartTime(e.target.value);
        setStartTimeError(!e.target.value);
    }

    const onChangeEndTime = (e) => {
        setEndTime(e.target.value);
        setEndTimeError(!e.target.value);
    }

    const onChangeDate = (date) => {
        setDate(date);
    }


    const handleNext = () => {
        switch (step) {
            case 1:
                nextStep();
                break;
            case 2:
                nextStep();
                break;
            case 3:
                nextStep();
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

    const nextStep = () => {
        setStep(prevStep => prevStep + 1)
    }

    const prevStep = () => {
        setStep(prevStep => prevStep - 1)
    }


    const handleSubmit = async () => {
        try {
            const dayOfWeek = mapping[date.getDay()];
            const dateString = date.toLocaleDateString();
            const params = {
                "coach_slug": coachParams.coach_slug,
                "user_slug": user_slug,
                "dayOfWeek": dayOfWeek,
                "date": dateString,
                "start_time": startTime,
                "end_time": endTime,
                "description": ""
            }
            const response = await userServices.bookAppointment(params);
            dispatch(clearMessage());
            setShowConfirmation(true);
        } catch (error) {
            dispatch(setMessage(error.response.data.message ? error.response.data.message : "Unable to create an appointment at this time"));
        }
    }
    if (showConfirmation) {
        return (
            <div id= "CoachAppPage">
            <div  id = "headerMessage" className = "col-sm-5 mx-auto">
                <h1>{title}</h1>
                <h3 id="subtitleDesc">{subtitle}</h3>
            </div>
                <div id="ApplicationPage">
                    <div className = "container" style ={{width: "70%"}}>
                        { message && (
                                <Alert variant="danger">
                                    {message}
                                </Alert>
                        )}
                        <Confirmation />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id= "CoachAppPage">
        <div  id = "headerMessage" className = "col-sm-5 mx-auto">
            <h1>{title}</h1>
            <h3 id="subtitleDesc">{subtitle}</h3>
        </div>
            <div id="ApplicationPage">
                <div className = "container" style ={{width: "70%"}}>
                    { message && (
                            <Alert variant="danger">
                                {message}
                            </Alert>
                    )}
                    <div className="profile-tabs">
                        <Tabs activeKey = {step} >
                            <Tab eventKey={1} title="Contact Information" tabClassName="profile-tabitem">
                                <ContactInformation
                                    isLoggedIn={isLoggedin} 
                                    handleNext={handleNext}
                                />
                            </Tab>
                            {/*xxxxxxxxxxSECOND PAGExxxxxxxxxxxxxxxxxxxxx*/}
                            <Tab eventKey={2} title="Session Options" tabClassName="profile-tabitem">
                                <SessionOptions
                                    handleNext={handleNext} 
                                />
                            </Tab>

                            <Tab eventKey={3} title="Find a time" tabClassName="profile-tabitem">
                                <FindTime 
                                    date={date}
                                    startTimeError={startTimeError}
                                    endTimeError={endTimeError}
                                    onChangeStartTime={onChangeStartTime}
                                    onChangeEndTime={onChangeEndTime}
                                    onChangeDate={onChangeDate}
                                    handlePrev={handlePrev}
                                    handleNext={handleNext}
                                />
                            </Tab>

                            <Tab eventKey={4} title="Finalize" tabClassName="profile-tabitem">
                                <Finalize
                                    handlePrev={handlePrev}
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

export default BookingSession; 