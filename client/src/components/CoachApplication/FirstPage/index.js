import React, { useState } from 'react';
import "./index.css";
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const FirstPage = () => {
    const [source, setSource] = useState("");
    const [local, setLocal] = useState("")
    const [area, setArea] = useState(1)

    if(area === 1){
        return(

            //first page
            <div id="ApplicationPage">
                <div className = "container">
                    <div id = "centerBlock" className = "col-sm mx-auto">

                        <div id = "questionsRow" className = "d-flex row">
                            {/*BEGIN FIRST COLUMN BELOW*/} 
                            <div id="questionCol" className = "col-sm-5 mx-1">

                                <ul className="list-unstyled">
                                    <li style= {{color: "#373737"}}>First Name</li>

                                    <li>
                                        <InputGroup>
                                            <Form.Control placeholder= "John"/>
                                        </InputGroup>
                                    </li>
                                </ul>

                                <br/>

                                <ul className="list-unstyled">
                                    <li style= {{color: "#373737"}}>Email</li>

                                    <li>
                                        <InputGroup>
                                            <Form.Control placeholder= "JohnDoe@xmail.com"/>
                                        </InputGroup>
                                    </li>
                                </ul>

                                <br/>

                                <ul className="list-unstyled">
                                    <li style= {{color: "#373737"}}>Password</li>

                                    <li>
                                        <InputGroup>
                                            <Form.Control placeholder= ""/>
                                        </InputGroup>
                                    </li>
                                </ul>

                                <br/>

                                <div class="form-check" style ={{paddingRight: "0px", marginRight: "0px"}}>
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault" style={{paddingRight: "2rem", color:"#373737"}}>
                                                Outside US or Canada?
                                            </label>
                                </div>

                                <div id = "benefits" className = "container">
                                    Coach with EvolveU

                                    <ul id ="listBenefits">
                                        <li id ="listBenefit"><small>Reach new clients</small></li>
                                        <li id ="listBenefit"><small>Have endless acess to manage your business</small></li>
                                        <li id ="listBenefit"><small>Be part of a growing wellness community</small></li>
                                    </ul>

                                </div>

                            {/*END FIRST COLUMN BELOW*/} 
                            </div> 

                            {/*SEPARATOR COLUMN BELOW*/} 
                            <div id="questionCol" className = "col-sm-1 mx-3"></div> 

                            {/*BEGIN SECOND COLUMN BELOW*/}
                            <div id="questionCol" className = "col-sm-5 mx-1">

                                <ul className="list-unstyled">
                                    <li style= {{color: "#373737"}}>Last Name</li>

                                    <li>
                                        <InputGroup>
                                            <Form.Control placeholder= "Doe"/>
                                        </InputGroup>
                                    </li>
                                </ul>

                                <br/>

                                <ul className="list-unstyled">
                                    <li style= {{color: "#373737"}}>How did you hear about us?</li>

                                    <li>
                                        <InputGroup className="mb-3">
                                            <DropdownButton as={InputGroup.Append} variant="light" style = {{width: "15%"}}
                                            >
                                                <Dropdown.Item onClick={() => setSource("Google")}>Google</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSource("Instagram")}>Instagram</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSource("Facebook")}>Facebook</Dropdown.Item>
                                                <Dropdown.Item onClick={() => setSource("Other")}>Other</Dropdown.Item>
                                            </DropdownButton>
                                            <FormControl placeholder = {source} aria-describedby="basic-addon1" />
                                        </InputGroup>
                                    </li>
                                </ul>

                                <Button variant = "dark" disableElevation onClick={() => setArea(2)} style = {{marginTop: "11.5rem", marginLeft: "7.5rem"}}>
                                    Continue
                                </Button>
                            {/*END SECOND COLUMN BELOW*/}
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
        )
    }

}
<div id="ApplicationPage">
<div id = "background" className = "container">
    <div id = "centerBlock" className = "col-sm mx-auto">
        EvolvU needs some more background about you first
        <div id = "questionsRow" className = "d-flex row">
            
        </div>


    </div>
</div>
</div>
export default FirstPage;