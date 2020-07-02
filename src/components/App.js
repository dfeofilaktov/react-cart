import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../sass/main.sass';
import { useEffect } from 'react';
import Markup from './Markup/markup';
import { getList } from '../redux/thunks/baseThunk';
import { RECOVER_CART } from '../redux/actions/actions';

const App = ({ dispatch, cart }) => {
    useEffect(() => {
        getList()(dispatch);
        const storedCart = JSON.parse(window.localStorage.getItem('cart'));
        dispatch(RECOVER_CART(storedCart || []));
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
