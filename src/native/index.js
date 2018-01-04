import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Routes from './routes/index';

import Loading from './components/Loading';

class Root extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ['Setting a timer'];
  }

  render() {
    const { store, persistor } = this.props;

    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <StyleProvider style={getTheme(theme)}>
            <Router>
              {Routes}
            </Router>
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default Root;
