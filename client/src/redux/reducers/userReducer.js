import { Types } from "../actions/actionTypes"

const initialState = {
    user: null,
    email: "",
    first_name: "",
    last_name: "",
    active: false,
    admin: false,
    coach: false,
    customer: false,
    staff: false,
    superuser: false,
    last_login:"", 
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SET_USER: 
            return {
                ...state,
                email: action.payload.data.user.email,
                first_name: action.payload.data.user.first_name,
                last_name: action.payload.data.user.last_name,
                active: action.payload.data.user.is_active,
                admin: action.payload.data.user.is_admin,
                coach: action.payload.data.user.is_coach, 
                customer: action.payload.data.user.is_customer, 
                staff: action.payload.data.user.is_staff, 
                superuser: action.payload.data.user.is_superuser,
                last_login: action.payload.data.user.last_login, 
            }
        case Types.UNSET_USER: 
            return {
                ...state,
                email: "",
                first_name: "",
                last_name: "",
                active: false,
                admin: false,
                coach: false,
                customer: false,
                staff: false,
                superuser: false,
                last_login:"", 
            }
        default:
            return {
                ...state,
            }
    }
}