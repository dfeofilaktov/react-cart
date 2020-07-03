import * as ActionTypes from '../../constants/actionTypes';

export const RECIEVE_LIST = (list) => {
    return {
        type: ActionTypes.RECIEVE_LIST,
        list,
    };
};

export const RECOVER_CART = (cart) => {
    return {
        type: ActionTypes.RECOVER_CART,
        cart,
    };
};

export const CLEAR_CART = () => {
    return {
        type: ActionTypes.CLEAR_CART,
    };
};

export const ADD_TO_CART = (item) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        item,
    };
};

export const REMOVE_FROM_CART = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        id,
    };
};

export const CNAHGE_ITEM_QUANTITY = (id, quantity) => {
    return {
        type: ActionTypes.CNAHGE_ITEM_QUANTITY,
        id,
        quantity,
    };
};

export const SHOW_SNACKBAR = (msg) => {
    return {
        type: ActionTypes.SHOW_SNACKBAR,
        msg,
    };
};

export const HIDE_SNACKBAR = () => {
    return {
        type: ActionTypes.HIDE_SNACKBAR,
    };
};
