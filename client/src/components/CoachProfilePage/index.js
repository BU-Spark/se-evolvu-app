import React, { useEffect, useState } from 'react';
import 'social-icon/dile-social-icon.js';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import StarRatings from 'react-star-ratings'

import { useHistory, Redirect } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io'

import CoachProfileTabs from './CoachProfileTabs'
import userServices from '../../services/userServices.js'

import './index.css';

const CoachProfilePage = (props) => {

    const history = useHistory()
    const [profile, setProfile] = useState({})

    useEffect( () => {
        getCoachProfile()
    // eslint-disable-next-line 
    }, [props.coach])

    const getCoachProfile = () => {
        userServices.getCoach(props.location.state.slug)
            .then( (res) =>{
                setProfile(res.data)
            })
            .catch( () => <Redirect to="/error"/>)
    }

    const handleReviewButton = (e) => {
        e.preventDefault();
        
        history.push({
            pathname: '/review',
            search: `?coach=${profile.slug}`,
            state: {
                coach: profile
            }
        })
    }

    const handleBookNow = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/book-appointment',
            search: `?coach_slug=${profile.slug}&first_name=${profile.first_name}&last_name=${profile.last_name}&minPrice=${profile.minPrice}&maxPrice=${profile.maxPrice}`
        })
    }

    const getSocialMedia = () => {
        // console.log("profile" , profile); 
        var socialMediaLinks = [
            {"gmail": "mailto:" + profile['email'], "name": "gmail"}
        ]
        if (profile !== {}) {    
            if (profile['facebook'] !== ""){
                socialMediaLinks.push(
                    {"facebook": profile['facebook'],
                    "name": "facebook"}
                )
            }
            if (profile['instagram'] !== ""){
                socialMediaLinks.push(
                    {"instagram": profile['instagram'],
                    "name": "instagram"}
                )
            }
            if (profile['twitter'] !== "") {
                socialMediaLinks.push(
                    {"twitter": profile['twitter'],
                    "name": "twitter"}
                )
            }
            return socialMediaLinks;
        }
    }

    if (props.location.state === undefined) {
        return <Redirect to="/error"/>
    }

    return (
        <div>
            <div style={{ textAlign: "left", padding: '1rem', background: "#F2F2F2"}}>
                <Button
                    bsPrefix="coach-profile-return-btn"
                    onClick={ () => history.goBack()}
                >
                    <IoIosArrowBack/> {'    '} Return to Results
                </Button>
            </div>
            <div  className="coach-profile-body">
                <Row>
                    <Col sm={8}>
                        <Media>
                            <img
                                width={128}
                                height={128}
                                className="mr-3 rounded-circle"
                                src={profile.image ? profile.image : "https://via.placeholder.com/600/771796"}
                                alt="Generic placeholder"
                            />
                            <Media.Body id="coach-profile-card-desc">
                            <h5>{profile.first_name} {profile.last_name}</h5>
                            <StarRatings
                                rating={profile.avg_rating}
                                starDimension="20px"
                                starSpacing="1px"
                                starRatedColor="orange"
                            />
                            <p>
                                {profile.no_of_reviews} ratings
                            </p>
                            <p>
                                {"Bio: "} 
                                {profile.description ? profile.description :
                                "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo."} 
                            </p>
                            Response Rate: {profile.id ? profile.id : "N/A"}
                            <br/><br/>
                            <p className="social-media-icons"> {
                                getSocialMedia().map(item => (
                                    <div>
                                    <a href={item[item.name]}>
                                        <dile-social-icon icon={item.name}></dile-social-icon>
                                    </a>
                                     &nbsp; </div>
                                ))}
                            </p> 
                            </Media.Body>
                        </Media>
                        <div style={{ background: '#F2F2F2', marginTop: '1rem'}}>
                            <CoachProfileTabs />
                        </div>
                    </Col>
                    <Col sm={4} style={{ display: 'inline-block'}}>
                        <div style={{background: '#F2F2F2'}}>
                            <div style={{ flexDirection: 'column', padding: '1rem', alignContent: 'center'}}>
                                <p>Book your first 15 minute consultation:</p>
                                <Button
                                    bsPrefix="coach-profile-book-btn"
                                    disable
                                    onClick={handleBookNow}
                                >
                                    Book Now
                                </Button>
                                <Button
                                    bsPrefix="coach-profile-contact-btn"
                                    disable
                                >
                                    Contact Coach
                                </Button>
                            </div>
                            <div style={{ flexDirection: 'column', padding: '1rem', alignContent: 'center'}}>
                                <hr></hr>
                                <p>Leave a review</p>
                                <Button
                                    bsPrefix="coach-profile-book-btn"
                                    onClick={e => handleReviewButton(e)}
                                >

                                    View Form
                                </Button>
                            </div>
                            <div style={{ textAlign: 'left', padding: '1rem'}}>
                                <hr></hr>
                                <p className="font-weight-bold">General Availability</p>
                                <p>Days and Times: </p>
                                <p>Focus: </p>
                                <hr></hr>
                                <p className="font-weight-bold">Session Location</p>
                                <p>In Person Session: </p>
                                <ul>
                                    <li>Medford</li>
                                </ul>
                                <hr></hr>
                                <p className="font-weight-bold">Languages</p>
                                <ul>
                                    <li>Spanish</li>
                                    <li>English</li>
                                </ul>
                            </div>
                        </div>  
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CoachProfilePage;