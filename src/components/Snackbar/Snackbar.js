import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { useEffect } from 'react';
import { Icon } from '@material-ui/core';
import { HIDE_SNACKBAR } from '../../redux/actions/actions';

const Snackbar = ({ visible, msg, dispatch }) => {
    useEffect(() => {
        if (visible) setTimeout(() => dispatch(HIDE_SNACKBAR()), 4000);
    }, [visible]);
    return (
        <div className={classnames('Snackbar', { visible })}>
            <Icon>{msg.icon}</Icon>
            <div className='SnackbarText'>{String(msg.text)}</div>
        </div>
    );
};

Snackbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    msg: PropTypes.object.isRequired,
};

Snackbar.defaultProps = {};

function select(store) {
    return {
        visible: store.viewReducer.snackbarVisible,
        msg: store.viewReducer.snackbarMsg,
    };
}

export default connect(select)(Snackbar);
