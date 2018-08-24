import {connect} from 'react-redux';

import * as Home from './constants';
import {changeAppPage} from "./modules";

const mapDispatchToProps = {
    changeAppPage: (appPage) => changeAppPage(appPage),
};

const mapStateToProps = (state) => {
    return {
        appPage: state.get(Home.HOME).get(Home.APP_PAGE),
    };
};

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
