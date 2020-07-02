import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_TO_CART } from '../../redux/actions/actions';
// import classnames from 'classnames';

const ListItem = ({ dispatch, data, cart }) => {
    const handleAdd = () => {
        dispatch(ADD_TO_CART(data));
    };

    const isInCart = _.find(cart, (o) => o.id === data.id);

    return (
        <div className='listItemCard'>
            <h5>{data.name}</h5>
            <div className='listItemPicture'>
                {/* <img src={item.img} alt='' /> */}
            </div>
            <button
                disabled={isInCart}
                type='button'
                onClick={handleAdd}
            >
                { isInCart ? 'Already in cart' : 'Add to cart' }
            </button>
        </div>
    );
};

ListItem.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
};

ListItem.defaultProps = {};

function select(store) {
    return {
        cart: store.viewReducer.cart,
    };
}

export default connect(select)(ListItem);
