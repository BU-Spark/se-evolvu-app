// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import { Types } from './actionTypes.js';
import AuthService from '../../services/authServices.js';

export const register = (registrationInfo) => (dispatch) => {
    return AuthService.register(registrationInfo).then( (data) => {

        dispatch({
            type: Types.REGISTER_SUCCESS,
            payload: data
        });
        return Promise.resolve();
    },
    (error) => {
        dispatch({
            type: Types.REGISTER_FAILED
        })

        const message =
            (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) || error.message || error.toString();

        dispatch({
            type: Types.SET_MESSAGE,
            payload: message,
        });
        
        return Promise.reject();
    }
    )
}


export const register_coach = (registrationInfo) => (dispatch) => {
    return AuthService.register_coach(registrationInfo).then( (data) => {
        dispatch({
            type: Types.REGISTER_SUCCESS,
            payload: data
        });
        return Promise.resolve();
    },
    (error) => {
        dispatch({
            type: Types.REGISTER_FAILED
        })

        const message =
            (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) || error.message || error.toString();

        dispatch({
            type: Types.SET_MESSAGE,
            payload: message,
        });
        
        return Promise.reject();
    }
    )
}


export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then( (data) => {
        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: data
        });

        return Promise.resolve();
    },
    (error) => {
        dispatch({
            type: Types.LOGIN_FAILED
        })

        const message = "Unable to login with provided credentials. Please try again."

        dispatch({
            type: Types.SET_MESSAGE,
            payload: message,
        });
        return Promise.reject();
    }
    )
};

export const requestCSRF = () => (dispatch) => {
    AuthService.csrfToken().then((data) => {
        dispatch({
            type: Types.SET_CSRF,
            payload: data.token
        })
    }).catch((err) => {
        dispatch({
            type: Types.SET_CSRF,
            payload: { csrfToken: "Unable to set CSRF Cookie :("}
        })
    })
}

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: Types.LOGOUT
    });
};