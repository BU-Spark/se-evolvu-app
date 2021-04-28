import { Types } from './actionTypes.js';
import UserService from '../../services/userServices.js';

export const setUser = (token) => (dispatch) => {
    return UserService.getUser({"token": token}).then( (data) => {
        dispatch({
            type: Types.SET_USER,
            payload: data
        });

        return Promise.resolve();
    },
    (error) => {
        dispatch({
            type: Types.SET_USER_FAIL
        })

        const message =
            (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) || error.message || error.toString();

        dispatch({
            type: Types.SET_USER_FAIL,
            payload: message,
        });
        return Promise.reject();
    }
    )
}

export const removeUser = () => (dispatch) => {
    dispatch({
        type: Types.UNSET_USER
    });
};