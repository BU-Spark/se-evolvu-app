import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { useHistory } from 'react-router-dom';

import './index.css'

const SearchBar = () => {

    const [area, setArea] = useState("Select your focus area");
    const [areaLabel, setAreaLabel] = useState("Select your focus area");
    const [local, setLocal] = useState("");
    const [invalidZipCodeError, setInvalidZipCode] = useState(false);
    const [digitOnlyError, setDigitOnly] = useState(false);
    const [areaError, setAreaError] = useState(false);

    let history = useHistory();

    const updateAreaState = (label, area) => {
        setAreaLabel(label)
        setArea(area)
    }

    const handleZipChange = (e) => {

        if (isNaN(e.target.value)) {
            setDigitOnly(true);
        } else if (digitOnlyError) {
            setDigitOnly(false);
        }

        if (e.target.value === "" || e.target.value.length !== 5) {
            setInvalidZipCode(true);
        } 
        if (e.target.value.length === 5 && invalidZipCodeError) {
            setInvalidZipCode(false);
        }  

        setLocal(e.target.value)
        
    }

    const onClickHandle = () => {
        if (area === "Select your focus area") {
            setAreaError(true)
        } else {
            setAreaError(false)
        }
        if (invalidZipCodeError || digitOnlyError || areaError) {
            return false
        } else {
            return true
        }
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        let validated = onClickHandle()
        if (validated && area !== "Select your focus area" && local !== "" && local.length === 5) {
            history.push({
                pathname: "/search",
                state: {
                    focus: area,
                    focusLabel: areaLabel,
                    local: local,
                }
            })
        }
    }

    return (
        <div className="searchbar-wrapper">
            <div className="searchbar-input">
                <Dropdown id="searchbar-dropdown">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {areaLabel}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                    >
                        {
                            [ 
                                { label: "Life Coaching", key: "life-coaching"},
                                { label: "Nutrition & Fitness", key: "nutrition-fitness"},
                                { label: "Health and Wellness Coaching", key: "health-and-wellness-coaching"},
                                { label: "Holistic Health & Wellness Coaching", key: "holistic-Health-wellness-coaching"},
                                { label: "Spiritual Wellness Coaching", key: "spiritual-wellness-coaching"},
                            ].map((type) => (
                            <Dropdown.Item key={type.key} onClick={() => updateAreaState(type.label, type.key)}>{type.label}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter Zip Code"
                        aria-label="Zipcode"
                        aria-describedby="basic-addon1"
                        onChange={e => handleZipChange(e)}
                    />
                </InputGroup>
            </div>
            <div id="zip-code-error-alert">
                { invalidZipCodeError ? <Alert  variant="danger">Please enter a valid 5 digit zipcode.</Alert> : null }
                { digitOnlyError ? <Alert variant="danger">Please only enter digits. No characters or letters are allowed.</Alert> : null }
                { areaError ? <Alert variant="danger">Please choose a focus area before proceeding.</Alert> : null }
            </div>
            <Button 
                variant="secondary" 
                onClick={e => {
                    onClickHandle()
                    onSubmit(e)
                }}
            >
                Find Your Coach
            </Button>
        </div>
    )
}

export default SearchBar;