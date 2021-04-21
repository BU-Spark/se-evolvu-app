import React,{ useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setUser } from '../../redux/actions/userAction.js'


const Profile = () => {

    const dispatch = useDispatch();

    const token = JSON.parse(sessionStorage.getItem("user")).token;
    

    useEffect( () => {
        if (token) {
            dispatch(setUser(token)).then( () => {
                
            })
        }
    }, [dispatch])

    const userObj = useSelector(state => state.userReducer.user);

    console.log(JSON.parse(userObj))

    // if (!userObj.is_coach) {
    //     <Redirect to="/coach/dashboard"/>
    // }

    console.log()


    return (
        <div style={{ padding: '5rem', height: '100vh'}}>
            This is your token: {JSON.stringify(sessionStorage.getItem("user"))}
            <br/>
            This is your info: {JSON.stringify(userObj)}
        </div>
    )
}

export default Profile;