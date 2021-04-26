// Code made from example from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from "axios";

const getTestItems = () => {
    return axios({
        url: "/test",
        method: 'get'
    })
};

const searchCoaches = (params) => {
    return axios({
        url: "/api/coaches/search",
        method: 'post',
        data: params,
    });
};

const getUser = (params) => {
    return axios({
        url: "/api/users/me",
        method: 'post',
        data: params,
    });
};

const getCoach = (params) => {
    return axios({
        url: "/api/coaches/",
        method: 'get',
        params,         // coach's slug
    });
};

const userServices = {
    getTestItems,
    searchCoaches,
    getUser,
    getCoach
};

export default userServices;