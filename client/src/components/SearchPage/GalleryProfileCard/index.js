import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfileModal from '../ProfileModal';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const GalleryProfileCard = (props) => {

    const [show, setShow] = useState(false)

    return (
        <Card className="gallery-profile-card" style={{width: '28%', margin: '1rem', background: "#E1ECF7", color: "#979797"}}>
            <Card.Img className="mr-3 rounded-circle" style={{ padding: '1rem'}} variant="top" src="https://via.placeholder.com/600/92c952" />
            <Card.Body>
                <div style={{ paddingBottom: '1rem', color: "#779ECC"}}>
                    {props.coach.first_name} {props.coach.last_name}
                </div>
                <StarRatings
                    rating={props.coach.avg_rating}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="orange"
                />
                <p>
                    {props.coach.no_of_reviews} ratings
                </p>
                <p>
                    Starting at: <br/>
                    ${props.coach.id} <br/>/ Session + one time fees
                </p>
                <Link
                    to={{
                        pathname: "/coach/profile/",
                        state: {
                            slug: props.coach.slug,
                            first_name: props.coach.first_name,
                            last_name: props.coach.last_name,
                        }
                    }}
                >
                    <Button>
                        View Profile
                    </Button>
                </Link>
                {
                    /*
                        Getting rid of popup view and redirecting it directly to the coach's page

                        <ProfileModal
                            show={show}
                            onHide={ () => setShow(false)}
                            coach={props.coach}
                        />   
                    */
                }
            </Card.Body>
        </Card>
    )
}

export default GalleryProfileCard