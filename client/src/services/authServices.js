// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import axios from 'axios';

const url = 'http://localhost:8000';

// Development Testing Services
// const register = (registrationInfo) => {
//     return axios.post(url + "/api/accounts/register", registrationInfo)
// };

// const login = (email, password) => {
//     return axios.post(url + "/api/accounts/login", {
//         email,
//         "username": email,
//         password
//     }).then((res) => {
//         console.log(res.data)
//         if (res.data.token) {
//             localStorage.setItem("user", JSON.stringify(res.data));
//           }
//         return res.data;
//     })
// };


const register = (registrationInfo) => {
    return axios({
        url: "/api/accounts/register", 
        method: "post",
        data: registrationInfo,
        headers: {
            "credentials": "same-origin"
        }
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