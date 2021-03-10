import React, { useState } from 'react';

import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import StarRatings from 'react-star-ratings';


import './index.css';
import ProfileModal from '../ProfileModal/index.js';

const ListProfileCard = (props) => {

    const [show, setShow] = useState(false)

    return (
        <div className="coach-profile-card" >
            <Media className="coach-profile-media">
                <img
                    width={64}
                    height={64}
                    className="mr-3 rounded-circle"
                    src="https://via.placeholder.com/600/771796"
                    alt="Generic placeholder"
                />
                <Media.Body id="coach-profile-card-desc">
                <h5>{props.coach.name}</h5>
                <StarRatings
                    rating={2.403}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="orange"
                />
                <p>
                    {props.coach.id} ratings
                </p>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                </p>
                Response Rate: {props.coach.id}
                </Media.Body>
            </Media>
            <div>
                <p>
                    Starting at: <br/>
                    ${props.coach.id} <br/>/ Session + one time fees
                </p>
                <Button className="coach-profile-view-btn" onClick={() => setShow(true)}>
                    View Profile
                </Button>
                <ProfileModal
                    show={show}
                    onHide={ () => setShow(false)}
                    coach={props.coach}
                />
            </div>
        </div>
    )
}

export default ListProfileCard