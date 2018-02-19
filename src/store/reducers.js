// app reducers
import homeReducer from './../routes/homePage/modules/home';
import adminScoresReducer from './../routes/adminResponses/modules/scores';
import authReducer from './../routes/adminAuth/modules/auth';
import error404Reducer from '../routes/Error404/modules/error';
//
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        router: routerReducer,
        loadingBar: loadingBarReducer,
        homeState: homeReducer,
        adminScoresState: adminScoresReducer,
        auth: authReducer,
        page404: error404Reducer,
        ...asyncReducers
    });
};
export default makeRootReducer;
