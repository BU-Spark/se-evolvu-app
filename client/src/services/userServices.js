// Code made from example from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from "axios";
import { authHeader } from './authHeader.js';

const API_URL = "http://localhost:8000";

const getTestItems = () => {
    return axios.get(API_URL + '/test', { headers: authHeader() });
};

const searchCoaches = (params) => {

    let focusType = ""

    switch(params.focus) {
        case "life-coaching":
            focusType = "life"
            break
        case "nutrition-fitness":
            focusType = "nutritionfitness"
            break
        case "health-and-wellness-coaching":
            focusType = "hw"
            break
        case "holistic-Health-wellness-coaching":
            focusType = "holistic"
            break
        case "spiritual-wellness-coaching":
            focusType = "spiritual"
            break
        default:
            focusType="hw"
    }

    return axios.get(API_URL + 'api/coaches/search/' + focusType, { 
        params
    });
};

const getCoach = (params) => {
    return axios.post(API_URL + '/search/coach', { 
        params
    });
};

const userServices = {
    getTestItems,
    searchCoaches,
    getCoach
};

export default userServices