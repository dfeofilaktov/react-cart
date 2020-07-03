import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import Immutable from 'seamless-immutable';
import * as ActionTypes from '../../constants/actionTypes';

const initialState = Immutable({
    list: [],
    cart: [],
    snackbarVisible: false,
    snackbarMsg: {},
});

const viewReducer = createReducer(initialState, {
    [ActionTypes.RECIEVE_LIST](state, action) {
        return state.merge({
            list: action.list,
        });
    },
    [ActionTypes.RECOVER_CART](state, action) {
        return state.merge({
            cart: action.cart,
        });
    },
    [ActionTypes.CLEAR_CART](state) {
        return state.merge({
            cart: [],
        });
    },
    [ActionTypes.ADD_TO_CART](state, action) {
        return state.merge({
            cart: [...state.cart, {
                ...action.item,
                quantity: 1,
            }],
        });
    },
    [ActionTypes.REMOVE_FROM_CART](state, action) {
        const { id } = action;
        const newCart = [];
        const itemIndex = _.findIndex(state.cart, (o) => o.id === id);
        _.forEach(state.cart, (item, i) => {
            if (i !== itemIndex) newCart.push(item);
        });

        return state.merge({
            cart: newCart,
        });
    },
    [ActionTypes.CNAHGE_ITEM_QUANTITY](state, action) {
        const { id, quantity } = action;
        const newCart = _.cloneDeep(state.cart);
        const itemIndex = _.findIndex(state.cart, (o) => o.id === id);
        newCart[itemIndex].quantity = quantity;

        return state.merge({
            cart: newCart,
        });
    },
    [ActionTypes.SHOW_SNACKBAR](state, action) {
        const { msg } = action;

        return state.merge({
            snackbarVisible: true,
            snackbarMsg: msg,
        });
    },
    [ActionTypes.HIDE_SNACKBAR](state) {
        return state.merge({
            snackbarVisible: false,
        });
    },
});

const mainReducer = combineReducers({ viewReducer });

export default mainReducer;
