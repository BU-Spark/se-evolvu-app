import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';
import AvailabilitySelector from '../../../AvailabilitySelector';
import ScheduleSelector from 'react-schedule-selector'


import "../index.css";

const SetSchedule = ({
    schedule,
    scheduleError,
    onChangeSchedule,
    handlePrev,
    handleNext,
}) => {
    return( 
        <div id = "centerBlockCoach" className = "col-sm mx-auto">
            <AvailabilitySelector 
                schedule={schedule}
                onChangeSchedule={onChangeSchedule}
                title={"Drag and select your weekly availability"}
            />
        {
            scheduleError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
        }
        <div style={{marginTop: "10%"}}>
            <Button variant = "dark"  onClick={handlePrev}
                style = {{ float: "left"}}>
                Back
            </Button>
            <Button variant = "dark"  onClick={handleNext}
                style = {{ float: "right"}}>
                Continue
                </Button>
        </div>
    </div>                       
    )

}


export default SetSchedule;