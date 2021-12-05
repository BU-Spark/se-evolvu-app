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
import "react-datepicker/dist/react-datepicker.css";


const FindTime = ({
    date,
    startTimeError,
    endTimeError,
    onChangeDate,
    onChangeStartTime,
    onChangeEndTime,
    handlePrev,
    handleNext,
}) => {
    return (
        <div id = "centerBlockCoach" className = "col-sm mx-auto">

        <div style={{"textAlign": "left", "fontWeight": "bold", "marginBottom": "5%"}}>
            <h2>Find your preferred time</h2>
        </div>
        <div id = "page3Descriptor">
                    <p>Please select a time from Coach Thomas’s listed General availability. </p>
                    <p>If you’re unsure, simply select “I’m Flexible” and you can message your coach at your own convince to discuss scheduling a time after you book</p>
        </div>
        <br/>
        <div id = "questionsRow" className = "d-flex row">
            <div id="questionCol" className = "col-sm-12 mx-1">                 
                <div class="form-check" style ={{paddingRight: "0px", marginTop: "5%"}}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault" id = "information">
                            I'm flexible or unsure
                        </label>
                </div>
            </div>
        </div>

        <br/>
        <br/>

        <div style={{ borderTop: "2px solid #cacaca"}}></div>

        <br/>
        <br/>

        <div id = "questionsRow" className = "d-flex row">

            <div id="questionCol" className = "col-sm-3 mx-1">

                <br/>
                <br/>

                <div id = "information">
                    Select a date
                </div>

                <br/>

                <DatePicker selected={date} onChange={(date) => onChangeDate(date)} />

            </div>

            <div id="questionCol" className = "col-sm-3 mx-1">
                    <br/>
                    <br/>

                    <div id = "information">
                        Select a start time
                    </div>

                    <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeStartTime(e) }}>
                        <Form.Control  placeholder= ""/>
                    </Form.Group>
                    {
                        startTimeError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                    }
                    <br/>
            </div> 

            <div id="questionCol" className = "col-sm-3 mx-1">

                <br/>
                <br/>

                <div id = "information">
                    Select a end time
                </div>

                <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeEndTime(e) }}>
                    <Form.Control  placeholder= ""/>
                </Form.Group>
                {
                    endTimeError ? <Alert style = {{padding: "0px"}} variant="danger"> This is a required field. </Alert> : null
                }
                <br/>

            </div>
        </div>  
        <br/>
        <br/>

        <div style={{marginTop: "5%"}}>
        <Button variant = "dark"  onClick={handlePrev}
            style = {{float: "left"}}>
            Back
        </Button>    
            <Button variant = "dark"  onClick={handleNext}

                style = {{float: "right"}}>
                Continue
            </Button>    
        </div>          
    </div>
    )
}


export default FindTime;