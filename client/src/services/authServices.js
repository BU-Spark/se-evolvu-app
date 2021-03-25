// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from 'axios';

const url = 'http://localhost:8000';

const register = (registrationInfo) => {
    return axios.post(url + "/api/accounts/register", registrationInfo)
};

const login = (email, password) => {
    return axios.post(url + "/api/accounts/login", {
        email, 
        "username": email,
        password
    }).then((res) => {
        console.log(res.data)
        if (res.data.token) {
            localStorage.setItem("user", JSON.stringify(res.data));
          }
        return res.data;
    })
};

const logout = () => {
    localStorage.removeItem("user");
};

const authServices = {
    register,
    login,
    logout
};

export default authServices;