import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../constants/actionTypes';

const initialState = Immutable({
    list: [],
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RECIEVE_LIST](state, action) {
        console.log(action.list);
        return state.merge({
            list: action.list,
        });
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
