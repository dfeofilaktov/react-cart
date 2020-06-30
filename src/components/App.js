import { Provider } from 'react-redux';
// import PropTypes from 'prop-types';

import '../sass/main.sass';
import Markup from './Markup/markup';
import reduxStore from '../redux/store/store';

const App = () => (
    <Provider store={reduxStore}>
        <Markup />
    </Provider>
);

App.propTypes = {};

export default App;
