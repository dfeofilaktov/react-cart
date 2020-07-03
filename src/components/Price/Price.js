import PropTypes from 'prop-types';
import classnames from 'classnames';

const Price = ({ number, size }) => {
    return (
        <span className={classnames('Price', size)}>
            <span className='PriceNumber'>{` ${number.toFixed(2)} `}</span>
            USD
        </span>
    );
};

Price.propTypes = {
    number: PropTypes.number.isRequired,
    size: PropTypes.string,
};

Price.defaultProps = {
    size: 'default',
};

export default Price;
