import "./index.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CoachApplyLanding = () => {
    return(
        <div id ="coachPage">
            <div id="img-header">
                <h2 id="img-header-title">Coach with EvolvU</h2>
                <h4 id="img-header-desc">Changing lives one coach at a time</h4>
            </div>
            <div id="try-coaching-container">
                <h3>Wisdom to share, knowledge to gain</h3>
                <p>Interested in joining the EvolvU network? 
                    Whether coaching is your full-time job, part-time passion, and/or you’ve just started, 
                    we encourage you to follow your calling and join the EvolvU network today! 
                    Check your Eligibility to Join our EvolvU Network by taking our quick Quiz (Optional)</p>
                <Link to="/eligibility">
                    <Button variant="warning">Try Coaching</Button>
                </Link>
            </div>
            <div id="why-coaching-container">
                <h2 id="why-header-title">Why become a Coach with EvolvU</h2>
            </div>
        </div>
    )
}

export default CoachApplyLanding;