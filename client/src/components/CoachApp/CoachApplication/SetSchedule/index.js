import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';
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
            <div style={{"marginBottom": "5%"}} id = "page3Top">
                Drag and select your weekly availability
            </div>
            <ScheduleSelector
                dateFormat={"dd"}
                selection={schedule}
                numDays={7}
                minTime={0}
                maxTime={24}
                hourlyChunks={1}
                onChange={onChangeSchedule}
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