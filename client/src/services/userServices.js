// Code made from example from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from "axios";
import authHeader from './authHeader.js';

const API_URL = "http://localhost:8000";

const getTestItems = () => {
    return axios.get(API_URL + '/test', { headers: authHeader() });
};

const searchCoaches = (params) => {
    return axios.get(API_URL + '/search', { 
        headers: authHeader(),
        params
    });
};

const getCoach = (params) => {
    return axios.get(API_URL + '/search/coach', { 
        headers: authHeader(),
        params
    });
};

const userServices = {
    getTestItems,
    searchCoaches,
    getCoach
};

export default userServices