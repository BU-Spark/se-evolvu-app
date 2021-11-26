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
                    <h2 className="homepage-title">FIND YOUR IDEAL HEALTH AND WELLNESS COACH</h2>
                    <h3 className="homepage-desc">Offering a network of authentic Health and Wellness coaches with profound accreditation that are here to support you.  </h3>
                </div>
                <Searchbar/>
            </div>
            <div className="container homepage-info">
                <h2 id="homepage-info-title">How EvolvU Works</h2>
                <div className="row">
                    <div className="col-sm">
                        <div className="row-icon">
                            <BsSearch size={60}/>
                        </div>
                        <h4 className="homepage-sub-title">Search</h4>
                        <p>
                            Save time by effortlessly searching for certified Health and Wellness coaches near you. Start by entering your location and session focus. 
                        </p>
                    </div>
                    <div className="col-sm">
                        <div className="row-icon">
                            <BsCalendarFill size={60}/>
                        </div>
                        <h4 className="homepage-sub-title">Book a Coach</h4>
                        <p>
                            Visit the coaches profiles to learn more about them, read past client reviews, and get a glimpse of their availability. Click the “Book Now” button to schedule your session! 
                        </p>
                    </div>
                    <div className="col-sm">
                        <div className="row-icon">
                            <GiFlowerEmblem size={60}/>
                        </div>
                        <h4 className="homepage-sub-title">Evolve</h4>
                        <p>
                        Get started on your journey with coaches you can trust! EvolvU takes the stress out of finding a health and wellness coach so that you can spend more time focusing in sessions  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;