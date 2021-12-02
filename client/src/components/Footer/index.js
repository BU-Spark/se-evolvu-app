import React from 'react';
import {   Link } from 'react-router-dom';
import Instagram from "../../images/instagram.png"
import Facebook from "../../images/facebook-logo.png"
import Google from "../../images/google-plus.png"
import LinkedIn from "../../images/linkedin.png"
import "./index.css";

const Footer = () => {

    return (
            <div className="footer">
                <div className="container">
                    <div className = "row d-flex justify-content-center"> {/*Row such that columns are aligned to the center of page*/}

                        {/*This is the column for the "About" category in the footer*/}
                            <div className= "col-xs-6 px-3" style={{textAlign: "left"}}>
                                <h6>About</h6>
                                <ul className="list-unstyled" >
                                    <li><Link to="/about"><small>About Us</small></Link></li>
                                    <li><Link to="/contact"><small>Contact</small></Link></li>
                                    <li><Link to="/feedback"><small>Feedback</small></Link></li>
                                    <li><Link to="/testimonial"><small>Testimonials</small></Link></li>
                                </ul>
                            </div>
                       

                        {/*This is the column for the "Support" category in the footer*/}
                        <div className= "col-xs-6 px-3" style={{textAlign: "left"}}>
                            <h6>Support</h6>
                            <ul className="list-unstyled">
                                    <li><Link to="/faq"><small>FAQ</small></Link></li>
                                    <li><Link to="/safety"><small>Safety</small></Link></li>
                                    <li><Link to="/info"><small>How EvolveU works</small></Link></li>
                                    <li><Link to="/privacy"><small>Privacy Policy</small></Link></li>
                            </ul>
                        </div>

                        {/*This is the column for the "Explore" category in the footer*/}
                        <div className= "col-xs-6 px-3" style={{textAlign: "left"}}>
                            <h6>Explore</h6>
                            <ul className="list-unstyled">
                                <li><Link to="/blog"><small>Blog</small></Link></li>
                                <li><Link to="/refer"><small>Refer to a friend</small></Link></li>
                            </ul>
                        </div>

                        {/*This is the column for outside social media image links*/}
                        <div className= "col-xs-6 px-3">
                            <ul className="list-unstyled">
                                <li>
                                    <img src={Instagram} alt="Instagram icon" className="social-media-btn" />
                                    <img src={Facebook} alt="Facebook icon" className="social-media-btn"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer;