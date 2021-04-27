import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Approved = () => {
    return(
        <div id="EligibilityPage">
            <div id = "buffer"></div>
            <div className ="container">
                <h1 id = "Title">Am I Eligible?</h1>
                <div id = "centerBlockNext" className = "col-xs mx-auto">
                    <h4 style= {{color: "#779ECC"}}>It looks like your eligible to apply! We look forward
                    to reviewing your application! Thank You!</h4>

                    <Link to="/application"> 
                        <Button variant = "dark"  style= {{marginTop: "1rem"}}>Apply Here </Button>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default Approved;