// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import { Types } from "../actions/actionTypes"


const initialState = {}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.LOGIN_SUCCESS: 
            return {
                ...state,
                isLoggedin: true,
                token: action.payload.token,
                slug: action.payload.slug
            }
        case Types.LOGIN_FAILED:
            return {
                ...state,
                isLoggedin: false,
                token: "",
                slugh: ""
            }
        case Types.LOGOUT:
            return {
                ...state,
                isLoggedin: false,
                token: "",
                slug: "",
            }
        default:
            return {
                ...state,
            }
    }
}