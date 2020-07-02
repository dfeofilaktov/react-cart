import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';

import Item from './Item';

const List = ({ list }) => {
    return (
        <div className='List'>
            <div className='listContainer'>
                {_.map(list, (item, key) => (
                    <Item
                        key={key}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};

List.propTypes = {
    list: PropTypes.array.isRequired,
};

List.defaultProps = {};

function select(store) {
    return {
        list: store.viewReducer.list,
    };
}

export default connect(select)(List);
