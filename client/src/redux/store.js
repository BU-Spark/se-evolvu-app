
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/index.js'

export function configureStore() {

    const middleware = [thunk];

    const store = createStore(rootReducer, applyMiddleware(...middleware))

    // Only put token in the application storage, put the rest of the user in the store

    return store;
}