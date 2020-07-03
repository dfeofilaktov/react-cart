// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';

const OrderForm = () => {
    return (
        <div className='OrderForm'>
            <p>Name</p>
            <input />
            <p>Surname</p>
            <input />
            <p>Address</p>
            <input />
            <p>Phone</p>
            <input />
            <button type='button'>Order</button>
        </div>
    );
};

OrderForm.propTypes = {};

OrderForm.defaultProps = {};

function select(/* store */) {
    return { };
}

export default connect(select)(OrderForm);
