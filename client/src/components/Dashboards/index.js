import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { setUser } from '../../redux/actions/userAction.js'

const Dashboard = () => {

    const dispatch = useDispatch()
    const token = JSON.parse(sessionStorage.getItem("user")).token;
    
    const isCoach = useSelector(state => state.userReducer.coach);

    useEffect( () => {
        if (token) {
            dispatch(setUser(token))
        }
    }, [dispatch, token])

    
    if (isCoach) {
        return (
            <Redirect to="/coach/dashboard"/>
        )
    } else {
        return (
            <Redirect to="/user/dashboard"/>
        )
    }

}

export default Dashboard;