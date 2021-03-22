// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import { Types } from "./actionTypes.js";

export const setMessage = (message) => ({
  type: Types.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: Types.CLEAR_MESSAGE,
});

