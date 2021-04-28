import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Approved from "./Approved/index.js";

const EligibleCoach = () => {
    const [area, setArea] = useState(true)

    if (area){
        return(
            
        <div id="EligibilityPage">

            <div id = "buffer"></div>
            {/*default state, before any questions are answered */}
            <div className ="container">
                
                <h1 id = "Title">Am I Eligible?</h1> 
                <div id = "centerBlock" className = "col-xs mx-auto">
                    
                    <div style= {{color: "#779ECC"}}>Use this quick eligibility tool to apply and join the Evolve U network.</div>

                    <br/>
                    <br/>
                    <ol id = "quizQuestions">
                        <li id = "quizQuestion"><div> Are you a coach with the health and wellness section? 
                            (This includes health, wellness, life, business)</div>

                            <form>

                                <div className="form-check">
                                <label style = {{color: "#373737"}}>
                                    <input
                                    type="radio"
                                    name="react-tips"
                                    value="option1"
                                    checked={true}
                                    className="form-check-input"
                                    
                                    />
                                    Yes
                                </label>
                                </div>

                                <div className="form-check">
                                <label style = {{color: "#373737"}}>
                                    <input
                                    type="radio"
                                    name="react-tips"
                                    value="option2"
                                    className="form-check-input"
                                    />
                                    No
                                </label>
                                </div>

                            </form>
                        </li>

                        <li id = "quizQuestion">
                            <div> 
                                Are you a certified coach from an accredited program?
                                (Please check accredited programs with home we accept here)
                            </div>

                            <form>

                                <div className="form-check">
                                    <label style = {{color: "#373737"}}>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value="option1"
                                        checked={true}
                                        className="form-check-input"
                                        />
                                        Yes
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label style = {{color: "#373737"}}>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value="option2"
                                        className="form-check-input"
                                        />
                                        No
                                    </label>
                                </div>

                            </form>
                        </li>

                        <li id = "quizQuestion"><div> Do you resonate with Evolve U's mission to help improve people's lives
                            and understand that each person has a unique journey?
                        </div>

                            <form>
                                <div className="form-check">
                                    <label style = {{color: "#373737"}}>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value="option1"
                                        checked={true}
                                        className="form-check-input"
                                        />
                                        Yes
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label style = {{color: "#373737"}}>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value="option2"
                                        className="form-check-input"
                                        />
                                        No
                                    </label>
                                </div>
                            </form>

                        </li>
                    </ol>
                    
                    {/*form check and radio*/}
                    <Button variant = "dark"  onClick={() => setArea(false)}>
                        Get Results
                    </Button>

                </div>
            </div>
    </div>

        )
    }

    return(
        <div>
            <Approved/>
        </div>
    )
}
export default EligibleCoach;