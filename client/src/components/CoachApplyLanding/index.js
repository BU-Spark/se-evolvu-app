import "./index.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CoachApplyLanding = () => {
    return(
        <div id ="coachPage">

            <div id = "buffer"></div>
            <div className = "container">
                
                <div id = "coachApp">
                
                    <div id = "centerBlock" className = "col-xs mx-auto" style = {{textAlign: "left"}}>

                        <h3 id = "heading">
                            Coaching Jobs
                        </h3>
                        <small id = "bodyText">
                            Evolve U is always seeking experienced individuals to join our team. 
                            Here at Evolve U, we are working together to help people evolve on their
                            journey. Join us today and follow your calling!

                            {/* double br tag here is used to break line and create an empty line as a buffer */}
                            <br />
                            <br />

                            Whether coaching is your full-time career or part-time passion, apply to EvolveU,
                            we'll be here every step of the way. From managing your business, to helping you
                            grow - we got your back. Our service is for you!
                        </small>
                        
                        <br />
                        <br />

                        <h3 id = "heading">
                            Evolve U provides:
                        </h3>
                        <small id = "bodyText">
                            <ul id ="coachServices">
                                <li className ="coachService">A platform where you can access all you need to book and manage scheduling</li>
                                <li className ="coachService">An influx of new clients to expand and grow your business</li>
                                <li className ="coachService">Ability to create your own packages and set your hourly rate</li>
                                <li className ="coachService">Endless search for your remote or in-person sessions</li>
                                <li className ="coachService">A personalized profile</li>
                            </ul>
                        </small>

                        <div style={{ borderTop: "2px solid #779ECC"}}></div>

                        <h3 id = "heading">
                            Am I Eligible?
                        </h3>

                        <Link to="/eligibility">
                            <Button variant = "dark" disableElevation>
                            Find out here
                            </Button>
                        </Link>
                        <br />
                        <br />

                        <h3 id = "heading">
                            How Do I Apply?
                        </h3>
                        <small id = "bodyText">
                            <ol id = "coachRequirements">
                                <li>Submit an application</li>
                                <li>Get the hang of Evolve U: pass a short quiz about using Evolve U (optional)</li>
                                <li>Pass a background check: Evolv U has a yearly background check.
                                    This is to continue building trust and safety
                                </li>
                            </ol>
                        </small>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CoachApplyLanding;