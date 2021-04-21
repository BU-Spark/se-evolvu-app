import React,{ useEffect } from 'react';

import userServices from '../../services/userServices.js';


const Profile = () => {

    useEffect( () => {

        const token = JSON.parse(localStorage.getItem("user")).token;
        let body = {
            "token": token
        };
        userServices.getUser(body).then((res) => {
            console.log(res.data.user)
        }).catch((err) => { console.log(err)});
    })

    return (
        <div style={{ padding: '5rem', height: '100vh'}}>
            This is your token: {JSON.stringify(localStorage.getItem("user"))}
        </div>
    )
}

export default Profile;