/* eslint-disable import/default */
import React from 'react';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import {render} from 'react-dom';
import configureStore from './store/configureStore.dev';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>
  ,document.getElementById('app')
);
