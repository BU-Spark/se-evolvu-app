import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation, useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { isInt } from 'validator';
import { IoIosArrowBack } from 'react-icons/io';

import userServices from '../../services/userServices.js';


const ReviewFormPage = () => {

    const location = useLocation();
    const [rating, setRating] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [comment, setComment] = useState("");

    const history = useHistory();

    const [repeatError, setRepeatError] = useState(false);
    const [ratingError, setRatingError] = useState(false);
    const [commentError, setCommentError] = useState(false);
    const [success, setSuccess] = useState(false);

    const token = useSelector(state => state.authReducer.token);
    const isCoach = useSelector(state => state.userReducer.coach);
    

    // Fetch coach and user object
    useEffect(() => {
        if (location.state.coach) {
            setFirstName(location.state.coach.first_name)
            setLastName(location.state.coach.last_name)
        }
    }, [location])

    const onSubmit = (e) => {
        e.preventDefault()

        if (validate()) {
            userServices.createReview({
                slug: location.state.coach.slug,
                reviewer: {
                    token: token
                },
                rating: rating,
                body: comment
            }).then((res) => {
                if (res.data.non_field_errors[0] === "The fields reviewer, coach must make a unique set.") {
                    setRepeatError(true);
                };
                setSuccess(true);
            }).catch(() => {
                
            })
        }

    }

    const onRatingChange = (e) => {
        setRating(e.target.value);
    }

    const onCommentChange = (e) => {
        setComment(e.target.value);
    }

    const validate = () => {
        let valid = true;
        if (!isInt(rating)) {
            setRatingError(true);
            valid = false;
        } else if (parseInt(rating) > 5) {
            setRatingError(true);
            valid = false;
        }

        if (comment.length > 200) {
            setCommentError(true);
            valid = false;
        }

        return valid;
    }

    if (location.state === undefined || isCoach) {
        return <Redirect to="/error"/>
    }

    return(
        <div>
            <div style={{ textAlign: "left", padding: '1rem', background: "#F2F2F2"}}>
                <Button
                    bsPrefix="coach-profile-return-btn"
                    onClick={ () => history.goBack()}
                >
                    <IoIosArrowBack/> {'    '} Return to Results
                </Button>
            </div>
        
        <div className="container" id="login-container">
            
            <div className="login-form">
                <h3 style={{ paddingBottom: '10px'}}>
                    Leave a review for {firstName} {lastName}
                </h3>
                { ratingError ? <Alert variant="danger">Please enter a digit from 0 - 5</Alert> : null}
                { commentError ? <Alert variant="danger">Comments are limited to only 200 characters. Please shorten your response.</Alert> : null}
                { repeatError ? <Alert variant="danger">You have already submitted a review for this coach. Only 1 review is allowed per coach per user.</Alert> : null}
                { success ? (
                    <>
                        <Alert variant="success">Review successefully submitted. Please return to the previous page.</Alert>
                        <Button id="login-form-submit" type="submit" onClick={e => history.goBack()}>
                                Return to the Previous Page
                        </Button>
                    </>) : 
                    (
                        <Form>
                            <Form.Group controlId="rating" onChange={e => onRatingChange(e)}>
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="Rating" placeholder="Enter a number from 0-5" />
                            </Form.Group>
                            <Form.Group controlId="comment" onChange={e => onCommentChange(e)}>
                                <Form.Label>Comments</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button id="login-form-submit" type="submit" onClick={e => onSubmit(e)}>
                                Submit
                            </Button>
                        </Form>
                    )
                }
                
                <hr></hr>
            </div>
        </div>
        </div>
    )
}

export default ReviewFormPage;