import { combineReducers } from 'redux';

import { authReducer } from './authReducer.js'
import { messageReducer } from './messageReducer.js'

export const rootReducer = combineReducers({
    authReducer,
    messageReducer
})