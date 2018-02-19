import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import makeRootReducer from './reducers';
// import * as utils from './../utils';

export default async (initialState = {}, history) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const router = routerMiddleware(history);
    const middleware = [thunk, router];

    // ======================================================
    // Store Enhancers
    // ======================================================
    let composeEnhancers = compose;

    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
        composeEnhancers = composeWithDevToolsExtension;
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        makeRootReducer([]),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
    store.asyncReducers = {};


    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default;
            store.replaceReducer(reducers(store.asyncReducers));
        });
    }
    return { store };
};
