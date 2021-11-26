import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import LiftingImage from '../../../../../images/EligibleResultsImg.png'

const Approved = () => {
    return(
        <div id="EligibilityPage">
            <div id = "buffer"></div>
            <div className ="container">
                <img src={LiftingImage} alt="Lifting" />
                <h1 id = "Title">Results</h1>
                <div className = "col-xs mx-auto">
                    <h4 id="results-text">It looks like you are eligible to join as a coach! 
                    We look forward to you creating an account! Thank You!</h4>

                    <Link to="/application"> 
                        <Button variant = "dark"  style= {{marginTop: "1rem"}}>Apply Here</Button>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default Approved;