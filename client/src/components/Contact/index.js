import "./index.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const Contact = () => {
    const [source, setSource] = useState("");
    const [source2, setSource2] = useState("");
    return(
        <div id= "ContactPage">
            <div id = "buffer"></div>

            <div id= "ContactHeader">Contact Us</div>

            <div style = {{marginTop: "3rem", marginBottom: "5rem"}} id = "Body" className = "container">

                <div id= "subHeader">Evolv U is Here to Help</div>
                <hr  style={{marginTop: "3px", color: "#CACACA", backgroundColor: '#CACACA', height: "2px", borderColor : '#CACACA'}}/>

                <ul id = "Questions" style = {{marginTop : "25px"}}>
                    <li id = "Question">Questions about Evolv U</li>
                    <li id = "Question">Need help searching for or booking for a coach?</li>
                </ul>


            </div>

            <div style = {{marginTop: "rem"}} id = "Body" className = "container"  style = {{marginTop : "60px"}}>

                <div id= "subHeader">Send Evolv U a message</div>
                <hr  style={{marginTop: "2px", color: "#CACACA", backgroundColor: '#CACACA', height: "2px", borderColor : '#CACACA'}}/>

                <div className = "row" style={{marginTop: "30px"}}>

                    <div className = "col-sm-3">
                        <ul className="list-unstyled">
                                    <li id = "messageField">First Name</li>
                                    <li><InputGroup>
                                            <Form.Control
                                            placeholder="Jane"/>
                                        </InputGroup>
                                    </li>

                                    <li style = {{marginTop: "50px"}} id = "messageField">Email</li>
                                    <li><InputGroup>
                                            <Form.Control
                                            placeholder="JaneDoe@xmail.com"/>
                                        </InputGroup>
                                    </li>
                            </ul>
                    </div>

                    <div className = "col-sm-1 mx-3"></div> 

                    <div className = "col-sm-3">
                                    <div id = "messageField">Last Name</div>
                                    <InputGroup>
                                            <Form.Control
                                            placeholder="Doe"/>
                                        </InputGroup>
                    </div>
                </div>


                <div className = "row" style={{height: "130px", marginTop: "30px", marginBottom: "0px"}}>

                    <div className = "col-sm-4">
                        <div id = "messageField">Who are You?</div>
                        <InputGroup className="mb-3">
                            <DropdownButton as={InputGroup.Append} variant="light" style = {{width: "10%"}}>
                                <Dropdown.Item onClick={() => setSource("I’m an Evolv U client looking for coach")}>I’m an Evolv U client looking for coach</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSource("I’m a coach or want to apply")}>I’m a coach or want to apply</Dropdown.Item>
                            </DropdownButton>
                            <FormControl placeholder = {source} aria-describedby="basic-addon1" />
                        </InputGroup>
                    </div>

                    <div className = "col-sm-5">
                        <div id = "messageField">Topic</div>
                        <InputGroup className="mb-3">
                            <DropdownButton as={InputGroup.Append} variant="light" style = {{width: "8%"}}>
                                <Dropdown.Item onClick={() => setSource2("I have a question about my Evolv U account/profile")}>I have a question about my Evolv U account/profile</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSource2("I’ve had some issues with my coaching session")}>I’ve had some issues with my coaching session</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSource2("I have a billing or payment question or comment or cancel")}>I have a billing or payment question or comment or cancel</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSource2("I'm trying to find a health and wellness coach")}>I'm trying to find a health and wellness coach</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSource2("I have to buy a report")}>I have to buy a report</Dropdown.Item>

                            </DropdownButton>
                            <FormControl placeholder = {source2} aria-describedby="basic-addon1" />
                        </InputGroup>
                    </div>

                </div>


                <div id = "messageField">Message</div>

                    <Form style = {{width: "50%"}}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea" rows="3" name="address"  />

                        </Form.Group>
                    </Form>


            </div>

        </div>
    )


}

export default Contact;