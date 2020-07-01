import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../sass/main.sass';
import { useEffect } from 'react';
import Markup from './Markup/markup';
import { getList } from '../redux/thunks/baseThunk';

const App = ({ dispatch }) => {
    useEffect(() => {
        getList()(dispatch);
    }, []);
    return <Markup />;
};

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

function select() {}

export default connect(select)(App);
