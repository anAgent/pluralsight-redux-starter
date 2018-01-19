import React from 'react';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import {render} from 'react-dom';
import configureStore from './store/configureStore';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>
  ,document.getElementById('app')
);
