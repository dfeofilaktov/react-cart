import * as ActionTypes from '../../constants/actionTypes';

export const RECIEVE_LIST = (list) => {
    return {
        type: ActionTypes.RECIEVE_LIST,
        list,
    };
};
