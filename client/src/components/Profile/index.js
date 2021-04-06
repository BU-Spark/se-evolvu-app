import React from 'react';


const Profile = () => {


    return (
        <div style={{ padding: '5rem', height: '100vh'}}>
            This is your token: {JSON.stringify(localStorage.getItem("user"))}
        </div>
    )
}

export default Profile;