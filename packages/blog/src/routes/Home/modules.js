import {fromJS} from 'immutable';

import * as Home from './constants';

export const changeAppPage = (appPage) => {
    return {
        type: Home.APP_PAGE,
        appPage,
    };
};


const initialState = fromJS({
    APP_PAGE: false,
});

export default function globalReducer(state = initialState, action) {
    switch (action.type) {
        case Home.APP_PAGE:
            return state.set(Home.APP_PAGE, action.appPage);
        default:
            return state;
    }
};
