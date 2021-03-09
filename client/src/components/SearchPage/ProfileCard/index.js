import React from 'react';

import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';

import './index.css';

const ProfileCard = (props) => {


    return (
        <div className="coach-profile-card" >
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://via.placeholder.com/600/771796"
                    alt="Generic placeholder"
                />
                <Media.Body id="coach-profile-card-desc">
                <h5>{props.coach.name}</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. 
                </p>
                Response Rate: {props.coach.id}
                </Media.Body>
            </Media>
            <div>
                ${props.coach.id}
                <Button className="coach-profile-view-btn">
                    View Profile
                </Button>
            </div>
        </div>
    )
}

export default ProfileCard