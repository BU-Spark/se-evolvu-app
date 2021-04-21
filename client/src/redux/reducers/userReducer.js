import { Types } from "../actions/actionTypes"

const initialState = {
    user: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SET_USER: 
            return {
                ...state,
                user: action.payload.user.data.user
            }
        default:
            return {
                ...state,
                user: null
            }
    }
}