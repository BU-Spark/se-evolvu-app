// Code made from example from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from "axios";
import { AuthHeader } from './authHeader.js';

// const API_URL = "http://localhost:8000";

// Development Testing Services
// const getTestItems = () => {
//     return axios.get(API_URL + '/test', { headers: authHeader() });
// };

// const searchCoaches = (params) => {
//     return axios.post('http://localhost:8000/coaches/search', { 
//         params
//     });
// };

// const getCoach = (params) => {
//     return axios.post(API_URL + '/search/coach', { 
//         params
//     });
// };

// const getUser = (params) => {
//     return axios.post(API_URL + "/api/users/me",
//         params,
//     );
// };


const getTestItems = () => {
    return axios({
        url: "/test",
        method: 'get',
        headers: {
            "credentials": "same-origin",
            "token": AuthHeader()
        }
    })
};

const searchCoaches = (params) => {
    return axios({
        url: "/api/coaches/search",
        method: 'post',
        data: params,
        headers: {
            "credentials": "same-origin",
        }
    });
};

const getUser = (params) => {
    return axios({
        url: "/api/users/me",
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
        url: "/api/coaches/get",
        method: 'post',
        data: params,
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