import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import '../sass/main.sass';
import { useEffect } from 'react';
import Markup from './Markup/markup';
import { getList } from '../redux/thunks/baseThunk';
import { RECOVER_CART } from '../redux/actions/actions';
import { firebaseConfig } from '../config/firebase';

const App = ({ dispatch, cart }) => {
    useEffect(() => {
        dispatch(getList());
        const storedCart = JSON.parse(window.localStorage.getItem('cart'));
        dispatch(RECOVER_CART(storedCart || []));
        firebase.initializeApp(firebaseConfig);
    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return <Markup />;
};

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
};

function select(store) {
    return {
        cart: store.viewReducer.cart,
    };
}

export default connect(select)(App);
