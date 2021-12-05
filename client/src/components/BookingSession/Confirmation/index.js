import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useHistory, Redirect } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";


const Confirmation = () => {
    const history = useHistory();
    return (
        <div id = "centerBlockCoach" className = "col-sm mx-auto">

        <div style={{"textAlign": "left", "fontWeight": "bold", "marginBottom": "5%"}}>
            <h2>Booking Submitted</h2>
        </div>
        <div id = "page3Descriptor">
                    <p>We have sent your request to the coach. Upon their confirmation of the request you will be charged the full amount for your session(s).  </p>
                    <p>You will receive a confirmation email with your receipt. Don’t forget you can view your session history in your dashboard! </p>
        </div>
        <br/>

        <br/>
        <br/>

        <div style={{ borderTop: "2px solid #cacaca"}}></div>

        <div style={{marginTop: "5%"}}>
            <Button variant = "dark"  onClick={() => history.push("/")}

                style = {{float: "right"}}>
                Home
            </Button>    
        </div>          
    </div>
    )
}


export default Confirmation;