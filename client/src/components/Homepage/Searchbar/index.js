import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import './index.css'

const SearchBar = () => {

    const [area, setArea] = useState("Select your area");
    const [local, setLocal] = useState("")

    return (
        <div className="searchbar-wrapper">
            <div className="searchbar-input">
                <Dropdown id="searchbar-dropdown">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {area}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setArea("Life Coaching")}>Life Coaching</Dropdown.Item>
                        <Dropdown.Item onClick={() => setArea("Nutrition & Fitness")}>Nutrition & Fitness</Dropdown.Item>
                        <Dropdown.Item onClick={() => setArea("Health and Wellness Coaching")}>Health and Wellness Coaching</Dropdown.Item>
                        <Dropdown.Item onClick={() => setArea("Holistic Health & Wellness Coaching")}>Holistic Health & Wellness Coaching</Dropdown.Item>
                        <Dropdown.Item onClick={() => setArea("Health and Wellness Coaching")}>Health and Wellness Coaching</Dropdown.Item>
                        <Dropdown.Item onClick={() => setArea("Spiritual Wellness Coaching")}>Spiritual Wellness Coaching</Dropdown.Item>
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
                            local: local
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