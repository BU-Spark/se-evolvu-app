// Code made from example from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from "axios";
import { AuthHeader } from './authHeader.js';

const API_URL = "";

const getTestItems = () => {
    return axios({
        url: API_URL + "/test",
        method: 'get',
        headers: {
            "credentials": "same-origin",
            "token": AuthHeader()
        }
    })
};

const searchCoaches = (params) => {
    return axios({
        url: API_URL + "/api/coaches/search",
        method: 'post',
        data: params,
        headers: {
            "credentials": "same-origin",
        }
    });
};

const getUser = (params) => {
    return axios({
        url: API_URL + "/api/users/me",
        method: 'post',
        data: params,
        headers: {
            "credentials": "same-origin",
            "content-type": "application/json"
        }
    });
};

const getCoach = (params) => {
    return axios({
        url: API_URL + "/api/coaches/",
        method: 'get',
        params,         // coach's slug
        headers: {
            "credentials": "same-origin",
        }
    });
};

const userServices = {
    getTestItems,
    searchCoaches,
    getUser,
    getCoach
};

export default userServices;