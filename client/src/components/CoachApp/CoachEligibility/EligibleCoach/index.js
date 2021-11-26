import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Approved from "./Approved/index.js";
import Unapproved from "./Unapproved/index.js"

const EligibleCoach = () => {
    const [area, setArea] = useState(true);
    const [isHealthCoach, setIsHealthCoach] = useState(false);
    const [isCertified, setIsCertified] = useState(false);
    const [agreesToMission, setAgreesToMission] = useState(false);
    const [approved, setApproved] = useState(false);

    // Method determines whether the coach is eligible or not and renders the proper results screen
    const handleSubmit = () => {
        setApproved(isHealthCoach && isCertified && agreesToMission);
        setArea(false);
    }

    if (area){
        return(
            
        <div id="EligibilityPage">

            <div id = "buffer"></div>
            {/*default state, before any questions are answered */}
            <div className ="container">
                
                <h1 id = "Title">Am I Eligible?</h1> 
                <div id = "centerBlock" className = "col-xs mx-auto">
                    
                    <div id="eligible-desc">
                        Use this quick Eligibility tool to see if you are eligible to create an account and join the EvolvU network. *Required
                    </div>

                    <br/>
                    <br/>
                    <ol id = "quizQuestions">
                        <li id = "quizQuestion"><div> Are you a coach within the health and wellness sector?* This includes: health, wellness, life, business, behavioral wellness and holistic coaching. 
                            It doesn’t include: nutritionists, licensed therapists, licensed physicians, fitness instructors or fitness trainers.  *
                        </div>

                            <form>

                                <div className="form-check">
                                <label>
                                    <input
                                    type="radio"
                                    name="react-tips"
                                    value={isHealthCoach}
                                    onChange={() => setIsHealthCoach(true)}
                                    className="form-check-input"
                                    
                                    />
                                    Yes
                                </label>
                                <label>
                                    <input
                                    type="radio"
                                    name="react-tips"
                                    value={isHealthCoach}
                                    onChange={() => setIsHealthCoach(false)}
                                    className="form-check-input"
                                    />
                                    No
                                </label>
                                </div>
                            </form>
                        </li>

                        <li id = "quizQuestion">
                            <div> 
                            Are you a certified coach from an accredited Program who can provide a copy of your certification or degree?* 
                            ( Please check eligible accredited programs with whom we accept here). *
                            </div>

                            <form>

                                <div className="form-check">
                                    <label>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value={isCertified}
                                        onChange={() => setIsCertified(true)}
                                        className="form-check-input"
                                        />
                                        Yes
                                    </label> 
                                    <label>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value={isCertified}
                                        onChange={() => setIsCertified(false)}
                                        className="form-check-input"
                                        />
                                        No
                                    </label>
                                </div>
                            </form>
                        </li>

                        <li id = "quizQuestion"><div> Do you resonate with EvolvU’s mission to help improve people’s lives and to help make health and wellness coaching more accessible to individuals? 
                            This includes being LGBTQ+ friendly*
                        </div>

                            <form>
                                <div className="form-check">
                                    <label>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value={agreesToMission}
                                        onChange={() => setAgreesToMission(true)}
                                        className="form-check-input"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        name="react-tips"
                                        value={agreesToMission}
                                        onChange={() => setAgreesToMission(false)}
                                        className="form-check-input"
                                        />
                                        No
                                    </label>
                                </div>
                            </form>

                        </li>
                    </ol>                    
                    <Button variant = "dark"  onClick={handleSubmit}>
                        Get Results
                    </Button>

                </div>
            </div>
    </div>

        )
    }
    return(
        <div>
        {approved ? (
        <Approved />
      ) : (
        <Unapproved />
      )}
        </div>
    )
}
export default EligibleCoach;