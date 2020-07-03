import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetTotalPrice } from '../../../helpers/functions';
import Price from '../../Price/Price';
// import classnames from 'classnames';

const { Link } = require('react-router-dom');

const Header = ({ cart }) => {
    const totalPrice = GetTotalPrice(cart);
    return (
        <header>
            <Link className='hello' to='/'>React Cart</Link>
            <div className='cartBtnHolder'>
                { totalPrice > 0 && <Price number={totalPrice} size='large' /> }
                {/* <div className='cartTotalPrice'>{totalPrice > 0 ? totalPrice : ''}</div> */}
                <Link className='cartBtn' to='/cart'>
                    <img src='https://i.imgur.com/eACKt1q.png' alt='Cart' />
                    { cart.length ? <div className='counter'>{cart.length}</div> : null }
                </Link>
            </div>
        </header>
    );
};

Header.propTypes = {
    cart: PropTypes.array.isRequired,
};

Header.defaultProps = {};

function select(store) {
    return {
        cart: store.viewReducer.cart,
    };
}

export default connect(select)(Header);
