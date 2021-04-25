import React from 'react';
import { useSelector } from 'react-redux';

import './index.css';

const UserDashboard = () => {

    const name = useSelector(state => state.userReducer.first_name);

    return (
        <div style={{ margin: '1rem'}}>
            Welcome {name} to the User Dashboard. (Currently not implemented.)
        </div>
    )
}

export default UserDashboard;