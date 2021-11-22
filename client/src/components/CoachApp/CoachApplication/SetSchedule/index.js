import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

import "../index.css";

const SetSchedule = ({
    handlePrev,
    handleNext,
}) => {
    return( 
        <div id = "centerBlockCoach" className = "col-sm mx-auto">
        Calendar goes here

        <Button variant = "dark"  onClick={handleNext}
            style = {{ marginTop: "5%", marginLeft: "85%"}}>
            Continue
            </Button>
        <Button variant = "dark"  onClick={handlePrev}
            style = {{ marginTop: "5%", marginLeft: "85%"}}>
            Back
        </Button>
    </div>                       
    )

}


export default SetSchedule;