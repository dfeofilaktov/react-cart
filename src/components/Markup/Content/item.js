import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';

const ListItem = ({ data }) => {
    return (
        <div className='listItemCard'>
            <h5>{data.name}</h5>
            <div className='listItemPicture'>
                {/* <img src={item.img} alt='' /> */}
            </div>
            <button
                type='button'
            >
                Add to cart
            </button>
        </div>
    );
};

ListItem.propTypes = {
    data: PropTypes.object.isRequired,
};

ListItem.defaultProps = {};

function select(/* store */) {
    return { };
}

export default connect(select)(ListItem);
