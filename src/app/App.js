import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'
import Router from './Router';
import Layout from 'components/Layout';
import '../components/Layout/style.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Router />
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
