import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

class AppContainer extends React.Component {
    static propTypes = {
        routes: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]),
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    static shouldComponentUpdate () {
        return false;
    }

    render () {
        const { routes, store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div style={{ height: '100%' }}>
                        {routes}
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default AppContainer;
