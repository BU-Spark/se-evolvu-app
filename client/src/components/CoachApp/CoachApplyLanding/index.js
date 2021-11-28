import "./index.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rock from "../../../images/rock.png";

const CoachApplyLanding = () => {
    return(
        <div id ="coachPage">
            <div id="img-header">
                <h2 id="img-header-title">Coach with EvolvU</h2>
                <h4 id="img-header-desc">Changing lives one coach at a time</h4>
            </div>
            <div id="try-coaching-container">
                <div class="left-text"> 
                    <h3 style={{fontSize: "35px"}}>Wisdom to share, knowledge to gain</h3>
                    <br/>
                    <p style={{fontSize: "20px"}}>Interested in joining the EvolvU network? 
                        Whether coaching is your full-time job, part-time passion, and/or you’ve just started, 
                        we encourage you to follow your calling and join the EvolvU network today! 
                        Check your Eligibility to Join our EvolvU Network by taking our quick Quiz (Optional)
                    </p>
                </div>
                <div class="right-image">
                    <img src={Rock}></img>
                </div>
                    <Link to="/eligibility">
                        <Button variant="warning" className="float-sm-left" style={{fontSize:"20px", color:"#4d4d4d"}}>Try Coaching</Button>
                    </Link>
            </div>
            <div id="why-coaching-container">
                <h2 id="why-header-title">Why become a Coach with EvolvU?</h2>
                    <h6 class="float-child">
                       <p class="describe-coaching"> <b> Work Flexibility </b> <br/><br/>
                        Some coaching opportunities can mean long hours and inflexible schedules. Take back control of your schedule.</p>
                    </h6>
                    <h6 class="float-child">
                        <p class="describe-coaching"><b> Expand and grow your business </b> 
                        <br/><br/> 
                        Connect with individulas in your community and beyond! You decide who you work with.</p>
                    </h6>
                    <h6 class="float-child">
                        <p class="describe-coaching"><b> Focus on Coaching </b>  
                        <br/><br/> 
                        Save time and don't stress about costs from acquiring clients, billing, support, or operations. Let us handle it so you can get back to coaching!</p>
                    </h6>
                <Link to="/eligibility">
                    <Button variant="warning" className="float-left" style={{margin:"6%", fontSize:"20px", color:"#4d4d4d"}}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CoachApplyLanding;