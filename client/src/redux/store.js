
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/index.js'

export function configureStore(preloadedState) {

    const middleware = [thunk];

    const store = createStore(applyMiddleware(rootReducer, middleware))

    // Only put token in the application storage, put the rest of the user in the store

    return store;
}