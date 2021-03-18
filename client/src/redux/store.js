
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export function configureStore(preloadedState) {

    const middleware = [thunk];

    const store = createStore()

    return store;
}