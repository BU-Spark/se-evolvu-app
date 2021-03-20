// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import { Types } from './actionTypes.js';
import AuthService from '../../services/authServices.js';

export const register = (registrationInfo) => (dispatch) => {
    return AuthService.register(registrationInfo).then( (data) => {

        dispatch({
            type: Types.REGISTER_SUCCESS
        });
        return Promise.resolve();
    },
    (error) => {
        dispatch({
            type: Types.REGISTER_FAILED
        })
        return Promise.reject();
    }
    )
}

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then( (data) => {
        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: { user: data }
        });

        return Promise.resolve();
    },
    (error) => {
        dispatch({
            type: Types.LOGIN_FAILED
        })
        return Promise.reject();
    }
    )
}

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: Types.LOGOUT
    });
};