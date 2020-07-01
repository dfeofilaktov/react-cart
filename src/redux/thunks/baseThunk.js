import axios from 'axios';
import { RECIEVE_LIST } from '../actions/actions';

export const getList = () => {
    return (dispatch) => {
        axios
            .get('https://adooone.com/core/list_get?')
            .then((res) => {
                // console.log(res.data.dr[0].goods);
                dispatch(RECIEVE_LIST(res.data.dr[0].goods));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
