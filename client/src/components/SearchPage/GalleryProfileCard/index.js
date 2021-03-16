import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProfileModal from '../ProfileModal';

const GalleryProfileCard = (props) => {

    const [show, setShow] = useState(false)

    return (
        <Card style={{ width: '10rem', margin: '1rem' }}>
            <Card.Img className="mr-3 rounded-circle" style={{ padding: '1rem'}} variant="top" src="https://via.placeholder.com/600/92c952" />
            <Card.Body>
                    <div style={{ paddingBottom: '1rem'}}>
                        {props.coach.name.split(" ")[0]} {props.coach.name.split(" ")[1][0]}
                    </div>
                <Button className="coach-profile-view-btn" onClick={() => setShow(true)}>
                    View
                </Button>
                <ProfileModal
                    show={show}
                    onHide={ () => setShow(false)}
                    coach={props.coach}
                />
            </Card.Body>
        </Card>
    )
}

export default GalleryProfileCard