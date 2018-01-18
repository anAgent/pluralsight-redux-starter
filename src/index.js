import React from 'react';
import {browserHistory, Router} from 'react-router';
import routes from './routes';
import {render} from 'react-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);
