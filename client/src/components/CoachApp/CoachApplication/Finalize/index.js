import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';

import "../index.css";

const Finalize = ({
    handleSubmit
}) => {
    return( 
        <div id = "centerBlockCoach" className = "col-sm mx-auto">
            <div id = "bigHeader">
                Review of your Plan: EvolvU Lite
            </div>
            
            <br/>
            

            <ul id ="coachFeatures">
                <li className ="coachFeature">Public Evolv U Profile</li>
                <li className ="coachFeature">Access to Coach Dashboard including multiple features.</li>
                <li className ="coachFeature">Client leads</li>
            </ul>

            <div id = "pricingLabel">
                Pricing: Free. You have unlimited access to the EvolvU Network with limited features.  
            </div>

            <div id = "pricingLabel">
                Change plan <span style={{color: "black", textDecoration: "underline"}}>here</span>  
            </div>
            
            <br/>
            <br/>

            <div style={{ borderTop: "2px solid #779ECC"}}></div>

            <br/>

            <br/>

            <div id = "blackText">
                By submitting your application you authorize EvolvU to request the following:
                ID verification check, National Criminal check, Sex offender check and any other
                background check EvolvU performs.
            </div>
            
            <br/>
            <br/>
        
            <div class="form-check" style ={{paddingRight: "0px", marginRight: "0px"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault" id = "information">
                    By clicking ‘Submit’ or by using the EvolvU Platform, you agree to our Terms of Service and Privacy Policy. 
                    You must agree to our EvolvU Health and Wellness Community Commitment on the next page. 
                    </label>
            </div>

            <Button variant = "dark" style = {{ marginTop: "15%", marginLeft: "75%"}} onClick={handleSubmit}>
                Submit
            </Button>
            
        </div>
    )

}


export default Finalize;