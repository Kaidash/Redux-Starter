// import fetch from 'isomorphic-fetch';
// import { showLoading, hideLoading } from 'react-redux-loading-bar';
// import { push } from 'react-router-redux';

export const actions = {

};

const ACTION_HANDLERS = {

};

const initialState = { };

export default function authReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
