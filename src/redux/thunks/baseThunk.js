import axios from 'axios';
import firebase from 'firebase';
import { RECIEVE_LIST, CLEAR_CART, SHOW_SNACKBAR } from '../actions/actions';
import { GetTotalPrice } from '../../helpers/functions';

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

export const DoOrder = (cart, formData) => {
    return (dispatch) => {
        const order = [];
        _.forEach(cart, (item) => {
            order.push({
                id: item.id,
                quantity: item.quantity,
                price: item.price,
            });
        });
        const db = firebase.firestore();

        db.collection('orders').add({
            ...formData,
            order,
            total: GetTotalPrice(cart).toFixed(2),
        })
            .then(() => {
                dispatch(CLEAR_CART());
                dispatch(SHOW_SNACKBAR({
                    icon: 'check_circle',
                    text: 'Order completed.',
                }));
            })
            .catch((error) => {
                dispatch(SHOW_SNACKBAR({
                    icon: 'error',
                    text: error,
                }));
            });
    };
};
