import React from "react";

import { BsSearch, BsCalendarFill } from "react-icons/bs";
import { GiFlowerEmblem } from "react-icons/gi";

import Searchbar from "./Searchbar/index.js"

import "./index.css";

const Homepage = () => {

    return (
        <div className="homepage-body">
            <div className="container-fluid homepage-search">
                <div className="homepage-search-text">
                    <h2 style={{color: "white", padding: "1rem"}}>Get Started on Your Journey with Evolv U</h2>
                    <h3>Evolv U offers a network of authentic Health and Wellness Coaches with extensive accreditation to help you evolve in the area of your choice</h3>
                </div>
                <Searchbar/>
            </div>
            <div className="container homepage-info">
                <h2>How Evolv U Works</h2>
                <div className="row">
                    <div className="col-sm">
                        <div className="row-icon">
                            <BsSearch size={60}/>
                        </div>
                        <h4>Search</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div className="col-sm">
                        <div className="row-icon">
                            <BsCalendarFill size={60}/>
                        </div>
                        <h4>Book a Coach</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div className="col-sm">
                        <div className="row-icon">
                            <GiFlowerEmblem size={60}/>
                        </div>
                        <h4>Life Coach</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;