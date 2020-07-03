// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import '../../sass/main.sass';
import Header from './Header/header';
import List from '../List/List';
import Cart from '../Cart/Cart';
import Footer from './Footer/footer';

const Markup = () => {
    return (
        <Router>
            <div className='markup'>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => <List />} />
                    <Route path='/cart' render={() => <Cart />} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

Markup.propTypes = {};

Markup.defaultProps = {};

function select(/* store */) {
    return {};
}

export default connect(select)(Markup);
