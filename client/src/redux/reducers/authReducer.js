import { Types } from "../actions/actionTypes"

const initialState = {
    isLoggedin: false,
    token: ""
}

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