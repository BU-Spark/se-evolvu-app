import { combineReducers } from 'redux';

import {authReducer} from './authReducer.js'

export const rootReducer = combineReducers({
    authReducer
})