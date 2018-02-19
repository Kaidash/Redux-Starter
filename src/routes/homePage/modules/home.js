// import { push } from 'react-router-redux';

export const TEST_HOME = 'TEST_HOME';

export function testHome (value) {
    return {
        type: TEST_HOME,
        payload: value
    };
}
export function testAPI () {
    return async (dispatch) => {
        try {
            console.log('123');
        } catch (e) {
            console.log(e);
        }
    };
}

export const actions = {
    testHome,
    testAPI
};

const ACTION_HANDLERS = {
    [TEST_HOME]: (state, action) => {
        return {
            ...state,
            home: ''
        };
    }
};
const initialState = { home: '' };

export default function homeReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
