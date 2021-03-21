// Based off of code from https://bezkoder.com/react-hooks-redux-login-registration-example/

import { Types } from "../actions/actionTypes.js"

const initialState = { message: ""};

export const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.SET_MESSAGE:
      return { message: payload };
    case Types.CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
}