import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IconButton, Icon } from '@material-ui/core';
import { CNAHGE_ITEM_QUANTITY, REMOVE_FROM_CART } from '../../redux/actions/actions';
// import classnames from 'classnames';

const CartItem = ({ dispatch, data }) => {
    const handleCnangeQuantity = (num) => {
        const newQuantity = data.quantity + num;
        if (newQuantity === 0) dispatch(REMOVE_FROM_CART(data.id));
        else dispatch(CNAHGE_ITEM_QUANTITY(data.id, newQuantity));
    };
    return (
        <div className='CartItem'>
            <div className='name'>{data.name}</div>
            <div className='controls'>
                <IconButton
                    onClick={() => handleCnangeQuantity(-1)}
                >
                    <Icon>remove</Icon>
                </IconButton>
                <div>{data.quantity}</div>
                <IconButton
                    onClick={() => handleCnangeQuantity(1)}
                >
                    <Icon>add</Icon>
                </IconButton>
                <IconButton
                    className='deleteBtn'
                    onClick={() => dispatch(REMOVE_FROM_CART(data.id))}
                >
                    <Icon>delete</Icon>
                </IconButton>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

CartItem.defaultProps = {};

function select(/* store */) {
    return { };
}

export default connect(select)(CartItem);
