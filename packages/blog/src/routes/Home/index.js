import { compose } from 'redux';

import injectReducer from '../../store/reducers';
import Home from './home';
import { withConnect } from './containers';
import reducer from './modules';

const withReducer = injectReducer({key: 'home', reducer});

export default compose(withReducer, withConnect)(Home);

