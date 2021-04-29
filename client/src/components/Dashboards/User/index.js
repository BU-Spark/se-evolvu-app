import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.css';

const UserDashboard = () => {

    const name = useSelector(state => state.userReducer.first_name);
    const coach = useSelector(state => state.userReducer.coach);
    const admin = useSelector(state => state.userReducer.admin);
    
    if (coach) {
        return <Redirect to="/coach/dashboard"/>
    } 

    if (admin) {
        return (
            <Redirect to="/admin/dashboard"/>
        )
    }

    return (
        <div style={{ margin: '1rem'}}>
            Welcome {name} to the User Dashboard. (Currently not implemented.)
        </div>
    )
}

export default UserDashboard;