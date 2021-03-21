// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from 'axios';

const url = 'http://localhost:8000/';

const register = (registrationInfo) => {
    return axios.post(url + "register", registrationInfo)
};

const login = (email, password) => {
    return axios.post(url + "login", {
        email, 
        password
    }).then((res) => {
        if (res.data.accessToken) {
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