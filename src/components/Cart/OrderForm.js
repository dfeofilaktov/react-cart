import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useReducer } from 'react';
import { DoOrder } from '../../redux/thunks/baseThunk';
// import classnames from 'classnames';

const OrderForm = ({ cart, dispatch }) => {
    const [formData, updateFormData] = useReducer((oldData, { name, value }) => {
        return {
            ...oldData,
            [name]: value,
        };
    }, {
        name: '',
        surname: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ name, value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.phone) {
            dispatch(DoOrder(cart, formData));
            return true;
        }
        return false;
    };

    return (
        <form
            className='OrderForm'
            onSubmit={handleSubmit}
        >
            <p>Name *</p>
            <input required name='name' onChange={handleChange} />
            <p>Surname</p>
            <input name='surname' onChange={handleChange} />
            <p>Address</p>
            <input name='address' onChange={handleChange} />
            <p>Phone *</p>
            <input required name='phone' onChange={handleChange} />
            <p className='info'>* - required fields</p>
            <button type='submit'>Order</button>
        </form>
    );
};

OrderForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
};

OrderForm.defaultProps = {};

function select(store) {
    return {
        cart: store.viewReducer.cart,
    };
}

export default connect(select)(OrderForm);
