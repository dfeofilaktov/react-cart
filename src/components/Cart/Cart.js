import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { GetTotalPrice } from '../../helpers/functions';
import Price from '../Price/Price';
import OrderForm from './OrderForm';
// import classnames from 'classnames';

const Cart = ({ cart }) => {
    const renderCart = () => (
        <>
            <div className='CartList'>
                {_.map(cart, (item, i) => (
                    <CartItem
                        key={i}
                        data={item}
                    />
                ))}
            </div>
            <div className='CartOrder'>
                <OrderForm />
                <div className='CartTotals'>
                    Your total is:
                    <Price number={GetTotalPrice(cart)} size='large' />
                </div>
            </div>
        </>
    );
    return (
        <div className='Cart'>
            {cart.length > 0 ? renderCart() : <div>Cart is empty</div>}
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
