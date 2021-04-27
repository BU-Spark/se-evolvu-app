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

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault" style={{paddingRight: "2rem", color:"#373737"}}>
                                        Yes
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault" style={{paddingBottom: "2rem", color: "#373737"}}>
                                        No
                                    </label>
                                </div>
                        </li>

                        <li id = "quizQuestion"><div> Are you a certified coach from an accredited program?
                            (Please check accredited programs with home we accept here)
                            </div>

                            <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault" style={{paddingRight: "2rem", color:"#373737"}}>
                                        Yes
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault" style={{paddingBottom: "2rem", color: "#373737"}}>
                                        No
                                    </label>
                                </div>
                        </li>

                        <li id = "quizQuestion"><div> Do you resonate with Evolve U's mission to help improve people's lives
                            and understand that each person has a unique journey?
                        </div>

                            <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault" style={{paddingRight: "2rem", color:"#373737"}}>
                                        Yes
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault" style={{paddingBottom: "2rem", color: "#373737"}}>
                                        No
                                    </label>
                                </div>
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