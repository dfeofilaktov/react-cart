import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';

const Content = ({ list }) => {
    console.log(list);
    return (
        <div className='Content'>
            <div className='listContainer'>
                {_.map(list, (item, i) => (
                    <div
                        key={i}
                        className='listItemCard'
                    >
                        <h5>{item.name}</h5>
                        <div className='listItemPicture'>
                            {/* <img src={item.img} alt='' /> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Content.propTypes = {
    list: PropTypes.array.isRequired,
};

Content.defaultProps = {};

function select(store) {
    console.log(store);
    return {
        list: store.viewReducer.list,
    };
}

export default connect(select)(Content);
