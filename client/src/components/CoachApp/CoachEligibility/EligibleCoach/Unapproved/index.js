import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import LiftingImage from '../../../../../images/EligibleResultsImg.png'


const Unapproved = () => {
    return(
        <div id="EligibilityPage">
            <div id = "buffer"></div>
            <div className ="container">
                <img src={LiftingImage} alt="Lifting" />
                <h1 id = "Title">Results</h1>
                <div className = "col-xs mx-auto">
                    <h4 id="results-text">
        It looks like you may be eligible to join as a coach. We always encourage you to create an account, however you may be denied due to ineligibility. 
        We look forward to connecting with you in the future. Thank you! </h4>
                    <Link to="/application"> 
                        <Button variant = "dark"  style= {{marginTop: "1rem"}}>Apply Here</Button>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default Unapproved;