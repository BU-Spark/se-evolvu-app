import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import './index.css'

const SearchBar = () => {

    const [area, setArea] = useState("Select your area");
    const [areaLabel, setAreaLabel] = useState("Select your area");
    const [local, setLocal] = useState("")

    const updateAreaState = (label, area) => {
        setAreaLabel(label)
        setArea(area)
    }

    return (
        <div className="searchbar-wrapper">
            <div className="searchbar-input">
                <Dropdown id="searchbar-dropdown">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {areaLabel}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
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
                        placeholder="Zip/City"
                        aria-label="Zip/City"
                        aria-describedby="basic-addon1"
                        onChange={e => setLocal(e.target.value)}
                    />
                </InputGroup>
            </div>
                <Link
                    to={{
                        pathname: "/search",
                        state: {
                            focus: area,
                            focusLabel: areaLabel,
                            local: local,
                        }
                    }}
                >
                    <Button variant="secondary">
                        Find Your Coach
                    </Button>
                </Link>
        </div>
    )
}

export default SearchBar;