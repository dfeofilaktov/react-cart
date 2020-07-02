import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartItem from './CartItem';
// import classnames from 'classnames';

const Cart = ({ cart }) => {
    return (
        <div className='Cart'>
            {_.map(cart, (item, i) => (
                <CartItem
                    key={i}
                    data={item}
                />
            ))}
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
};

Cart.defaultProps = {};

function select(store) {
    return {
        cart: store.viewReducer.cart,
    };
}

export default connect(select)(Cart);
