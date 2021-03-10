import React from 'react';

import './index.css';

const CoachProfilePage = (props) => {

    return (
        <div className="coach-profile-body ">
            <h2>Welcome to {props.location.state.coach.name} Profile page</h2>
        </div>
    )
}

export default CoachProfilePage;