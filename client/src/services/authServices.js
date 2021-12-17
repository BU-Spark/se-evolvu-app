// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from 'axios';
import {configureStore} from "../redux/store";
import {setRegisterError, setRegisterSuccess, setLoginSuccess, setLoginFailure} from "../redux/actions/authAction"

const register = async (registrationInfo) => {
    try {
        const res = await axios({
            url: "/api/accounts/register",
            method: "post",
            data: registrationInfo,
        });
        // Check for validation (i.e. account has already been created)
        if (res.data.email[0] === "account with this email already exists.") {
            throw new Error("An account with this email already exists.");
        }
        return res.data;
    } catch (error) {
        throw new Error("Unable to register");
    }
};

const register_coach = async (registrationInfo) => {
    try {
        const res = await axios({
            url: "/api/accounts/register_coach",
            method: "post",
            data: registrationInfo
        });
        // Check for validation (i.e. account has already been created)
        if (res.data.email[0] === "account with this email already exists.") {
            throw new Error("An account with this email already exists.");
        }
        return res.data;
    } catch (err) {
        console.log(err);
        throw new Error("Unable to register for a coach account");
    }
}
const login = async (email, password) => {
    try {
        const res = await axios({
            url: "/api/accounts/login",
            method: 'post',
            data: {
                "email": email,
                "username": email,
                "password": password
            },
        });
        return res.data;   
    } catch (error) {
        throw new Error("Unable to login");
    }
};

const csrfToken = () => {
    return axios({
        url: "/api/accounts/csrf",
        method: 'post',
    }).then((res) => {
        return res.data;
    })
}

const logout = () => {
    sessionStorage.removeItem("token");
};

const authServices = {
    register,
    register_coach,
    login,
    logout,
    csrfToken
};

export default authServices;