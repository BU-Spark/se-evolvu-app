import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { setUser } from '../../redux/actions/userAction.js'


const Dashboard = () => {

    const dispatch = useDispatch();

    const token = JSON.parse(sessionStorage.getItem("user")).token;
    

    useEffect( () => {
        if (token) {
            dispatch(setUser(token))
        }
    }, [dispatch])

    const user = useSelector(state => state.userReducer.user);

    if (user.is_coach) {
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