import React from 'react';
import {   Link,
    BrowserRouter,
    Switch,
    Route } from 'react-router-dom';
import styles from "./index.css";

const Footer = () => {

    return (
            <div className="footer">
                <div className="container">
                    <div className = "row d-flex justify-content-center"> {/*Row such that columns are aligned to the center of page*/}

                        {/*This is the column for the "About" category in the footer*/}
                        <BrowserRouter>
                            <div className= "col-xs-6 px-3">
                                <h8>About</h8>
                                <ul className="list-unstyled">
                                    <li><Link to="/about"><small>About </small></Link></li>
                                    <li><Link to="/contact"><small>Contact</small></Link></li>
                                    <li><Link to="/feedback"><small>Feedback</small></Link></li>
                                </ul>
                            </div>
                       

                        {/*This is the column for the "Support" category in the footer*/}
                        <div className= "col-xs-6 px-3">
                            <h8>Support</h8>
                            <ul className="list-unstyled">
                                    <li><Link to="/faq"><small>FAQ</small></Link></li>
                                    <li><Link to="/safety"><small>Safety</small></Link></li>
                                    <li><Link to="/info"><small>How EvolveU works</small></Link></li>
                                    <li><Link to="/refunds"><small>Refund Policy</small></Link></li>
                                    <li><Link to="/testimonials"><small>Testimonials</small></Link></li>
                            </ul>
                        </div>

                        {/*This is the column for the "Explore" category in the footer*/}
                        <div className= "col-xs-6 px-3">
                            <h8>Explore</h8>
                            <ul className="list-unstyled">
                                <li><Link to="/blog"><small>Blog</small></Link></li>
                                <li><Link to="/refer"><small>Refer to a friend</small></Link></li>
                            </ul>
                        </div>

                        {/*This is the column for outside social media image links*/}
                        <div className= "col-xs-6 px-3">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.instagram.com/"><small>Instagram </small></a>
                                    <a href="https://www.facebook.com/"><small>Facebook </small></a>
                                    <a href="https://www.google.com/"><small>GooglePlus </small></a>
                                    <a href="https://www.linkedin.com/"><small>LinkedIn</small></a>
                                </li>
                            </ul>
                        </div>

                         {/*Routing for footer links, currently commented out till there is something to route to*/}

                       {/* <Switch>
                            <Route path="/about" component={Homepage} />
                            <Route path="/contact" component={Homepage} />
                            <Route path="/feedback" component={Homepage} />
                            <Route path="/faq" component={Homepage} />
                            <Route path="/safety" component={Homepage} />
                            <Route path="/info" component={Homepage} />
                            <Route path="/refunds" component={Homepage} />
                            <Route path="/testimonials" component={Homepage} />
                            <Route path="/blog" component={Homepage} />
                            <Route path="/refer" component={Homepage} />
                       </Switch> */}
                       </BrowserRouter>


                    </div>
                </div>
            </div>
    )
}

export default Footer;