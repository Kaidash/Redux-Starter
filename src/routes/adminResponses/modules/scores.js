import fetch from 'isomorphic-fetch';

export const SET_SCORES_LIST = 'SET_SCORES_LIST';

export function setScoresList (data) {
    return {
        type: SET_SCORES_LIST,
        payload: data
    };
}
export function getScoresRequests () {
    return async (dispatch) => {
        try {
            let result = await fetch(`${__API__}/scores/questionScores`, {
                method: 'GET',
                credentials: 'include'
            });
            let json = await result.json();
            await dispatch(setScoresList(json));
        } catch (e) {
            console.log(e);
        }
    };
}

export const actions = {
    setScoresList,
    getScoresRequests
};

const ACTION_HANDLERS = {
    [SET_SCORES_LIST]: (state, action) => {
        return {
            ...state,
            scoresList: action.payload
        };
    }
};

const initialState = {
    scoresList: []
};
export default function adminScoreReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}
