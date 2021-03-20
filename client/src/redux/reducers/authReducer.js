// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import { Types } from "../actions/actionTypes"

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.LOGIN_SUCCESS: 
            return {
                ...state,
                isLoggedin: true,
                token: action.payload,
            }
        case Types.LOGIN_FAILED:
            return {
                ...state,
                isLoggedin: false,
                token: ""
            }
        case Types.LOGOUT:
            return {
                ...state,
                isLoggedin: false,
                token: ""
            }
        default:
            return {
                ...state,
                isLoggedin: false,
                token: ""
            }
    }
}