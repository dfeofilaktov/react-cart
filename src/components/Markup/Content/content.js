import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';

import ListItem from './item';

const Content = ({ list }) => {
    console.log(list);
    return (
        <div className='Content'>
            <div className='listContainer'>
                {_.map(list, (item, key) => (
                    <ListItem
                        key={key}
                        data={item}
                    />
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
