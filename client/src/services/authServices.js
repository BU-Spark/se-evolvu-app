// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from 'axios';

const API_URL = "";

const register = (registrationInfo) => {
    return axios({
        url: API_URL + "/api/accounts/register", 
        method: "post",
        data: registrationInfo,
        headers: {
            "credentials": "same-origin"
        }
    }).then((res) => {
        // Check for validation (i.e. account has already been created)
        if (res.data.email[0] === "account with this email already exists.") {
            throw new Error("An account with this email already exists.")
        }
        return res.data;
    })
};

const login = (email, password) => {
    return axios({
        url: "/api/accounts/login",
        method: 'post',
        data: {
            "email": email,
            "username": email,
            "password": password
        },
        headers: {
            "credentials": "same-origin"
        }
    }).then((res) => {
        // TODO: Catch exception
        return res.data;
    })
};

const csrfToken = () => {
    return axios({
        url: API_URL + "/api/accounts/csrf",
        method: 'post',
        headers: {
            "credentials": "same-origin"
        }
    }).then((res) => {
        return res.data;
    })
}

const logout = () => {
    sessionStorage.removeItem("token");
};

const authServices = {
    register,
    login,
    logout,
    csrfToken
};

export default authServices;