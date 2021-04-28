import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ReviewFormPage = (props) => {

    const location = useLocation();

    const reviewer = useSelector(state => state.userReducer.slug);

    // Fetch coach and user object
    useEffect(() => {
        console.log(location.state)
    }, [location])

    return(
        <div className="container" id="login-container">
            
            <div className="login-form">
                <h3 style={{ paddingBottom: '10px'}}>
                    Leave a review! 
                </h3>
                <Form>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button id="login-form-submit" type="submit" >
                        Submit
                    </Button>
                </Form>
                <hr></hr>
                <p> You can also login with: </p>
                <Button id="login-social-media">Google</Button>
                <Button id="login-social-media">Facebook</Button>
            </div>
        </div>
    )
}

export default ReviewFormPage;