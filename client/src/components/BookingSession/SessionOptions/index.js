import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { HiUserCircle } from "react-icons/hi";
import Col from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';

import "../index.css";

const SessionOptions = ({
    onChangeClientPrefName,
    onChangeClientPrefPronouns,
    handleNext,
}) => {
    return (
        <div id = "centerBlockCoach" className = "col-sm mx-auto">

        <div style={{"textAlign": "left;", "fontWeight": "bold"}}>
                <h2>Booking Selection</h2>
        </div>
        <br/>
        <div id = "questionsRow" className = "d-flex row">
            <div id="questionCol" className = "col-sm-12 mx-1"> 
                <p style={{"fontWeight": "bold"}}>1 Remote Session for up to 1 client</p>
                <p style={{"textDecoration": "underline"}}>View all other packages from Coach</p>
                
                <div class="form-check" style ={{paddingRight: "0px", marginTop: "10%"}}>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault" id = "information">
                            Enroll me in automatic, recurring sessions!
                        </label>
                </div>
            </div>
        </div>

        <br/>
        <br/>

        <div style={{ borderTop: "2px solid #cacaca"}}></div>

        <br/>
        <br/>

        <div id = "page3Descriptor">
            <div id="questionCol" className = "col-sm-12 mx-1"> 
            <Table>
                <tbody>
                    <tr>
                    <td>Price Per Session</td>
                    <td>$75.00</td>
                    </tr>
                    <tr>
                    <td>Service Fee</td>
                    <td>$11.25</td>
                    </tr>
                    <tr>
                    <td>Total</td>
                    <td>$86.25</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </div>        
        <br/>
        <br/>

        <div style={{ borderTop: "2px solid #cacaca"}}></div>
        <br/>

        <div id = "questionsRow" className = "d-flex row">

            <div id="questionCol" className = "col-sm-5 mx-1">

                <br/>
                <br/>

                <div id = "information">
                    Client's Preferred Full Name
                </div>

                <br/>

                <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeClientPrefName(e) }}>
                    <Form.Control  placeholder= ""/>
                </Form.Group>

            </div>

            <div id="questionCol" className = "col-sm-1 mx-3"></div> 

            <div id="questionCol" className = "col-sm-5 mx-1">

                <br/>
                <br/>

                <div id = "information">
                    Client's Preferred Pronouns
                </div>

                <br/>

                <Form.Group id="input" style = {{width: "100%"}} onChange={(e) => { onChangeClientPrefPronouns(e) }}>
                    <Form.Control  placeholder= ""/>
                </Form.Group>

            </div>
        </div>

        <br/>
        <br/>

        <div style={{marginTop: "5%"}}>
            <Button variant = "dark"  onClick={handleNext}

                style = {{float: "right"}}>
                Continue
            </Button>    
        </div>          
    </div>
    )
}


export default SessionOptions;