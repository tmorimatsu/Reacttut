import React, { Component } from 'react';
import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';




// actions.js
export const changeSearchText = text => ({
    type: 'CHANGE_SEARCH_TEXT',
    text,
});

export const changeUsername = username => ({
    type: 'CHANGE_USERNAME',
    username,
});

export const changePassword = password => ({
    type: 'CHANGE_PASSWORD',
    password,
});

export const changeSelectedTab = selectedTab => ({
    type: 'CHANGE_SELECTED_TAB',
    selectedTab,
})



//reducers.js
export const changeState = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return action.text;
        case 'CHANGE_USERNAME':
            return action.username;
        case 'CHANGE_PASSWORD':
            return action.password;
        case 'CHANGE_SELECTED_TAB':
            return action.selectedTab;
        default:
            return state;
    }
};

export const reducers = combineReducers({
    changeState,
});


//store.js
export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();