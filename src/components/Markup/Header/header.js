import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

const { Link } = require('react-router-dom');

const Header = ({ cart }) => {
    return (
        <header>
            <Link className='hello' to='/'>React Cart</Link>
            <div className='cartBtnHolder'>
                <Link className='cartBtn' to='/cart'>
                    <img src='https://i.imgur.com/eACKt1q.png' alt='Cart' />
                    <div className='counter'>{cart.length}</div>
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
