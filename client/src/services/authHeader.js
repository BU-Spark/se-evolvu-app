// Code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import { useSelector } from 'react-redux';

export const AuthHeader = () => {
    const token = useSelector(state => state.authReducer.token);

    if (token) {
        return  token;
    } else return null;
}