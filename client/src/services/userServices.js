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
        method: 'get',
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
        url: "/api/coaches/" + params,
        method: 'get',
    });
};

const createReview = (params) => {
    return axios({
        url: "/api/reviews/create/" + params.slug,
        method: "post",
        data: params
    })
}

const userServices = {
    getTestItems,
    searchCoaches,
    getUser,
    getCoach,
    createReview
};

export default userServices;