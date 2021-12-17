import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { useHistory } from 'react-router-dom';

import './index.css'

const SearchBar = () => {

    const [area, setArea] = useState("Select Your Focus");
    const [areaLabel, setAreaLabel] = useState("Select Your Focus");
    const [local, setLocal] = useState("");
    const [invalidLocationError, setInvalidLocation] = useState(false);
    const [areaError, setAreaError] = useState(false);

    let history = useHistory();

    const updateAreaState = (label, area) => {
        setAreaLabel(label);
        setArea(area);
        setAreaError(false);
    }

    const handleLocationChange = (e) => {
        setInvalidLocation(e.target.value === "")
        setLocal(e.target.value)
    }

    const onClickHandle = () => {
        setAreaError(area === "Select your focus area");
        setInvalidLocation(local==="");
        return !(invalidLocationError || areaError);
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        let validated = onClickHandle()
        if (validated && area !== "Select your focus area" && local !== "") {
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
                <Dropdown id="searchbar-dropdown"
                >
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {areaLabel}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        id="dropdown-basic"
                        
                    >
                        {
                            [ 
                                { label: "Life Coaching", key: "life-coaching"},
                                { label: "Behavioral Wellness Coaching", key: "behavioral-wellness-coaching"},
                                { label: "Health and Wellness Coaching", key: "health-wellness-coaching"},
                                { label: "Holistic Health & Wellness Coaching", key: "holistic-health-wellness-coaching"},
                                { label: "Business Coaching", key: "business-coaching"},
                            ].map((type) => (
                            <Dropdown.Item id="dropdown-items" key={type.key} onClick={() => updateAreaState(type.label, type.key)}>{type.label}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <InputGroup className="mb-3">
                    <Form.Control
                        id="location-input"
                        placeholder="Enter location"
                        aria-label="Location"
                        aria-describedby="basic-addon1"
                        onChange={e => handleLocationChange(e)}
                    />
                <Button 
                    variant="secondary"
                    id="search-submit"
                    onClick={e => {
                        onClickHandle()
                        onSubmit(e)
                    }}
            >
                Find Your Coach
            </Button>
                </InputGroup>
            </div>
            <div id="location-error-alert">
                { invalidLocationError ? <Alert  variant="danger">Please enter a valid location.</Alert> : null }
                { areaError ? <Alert variant="danger">Please choose a focus area before proceeding.</Alert> : null }
            </div>
        </div>
    )
}

export default SearchBar;