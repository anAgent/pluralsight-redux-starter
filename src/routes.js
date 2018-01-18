import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.js';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import CoursePage from './components/courses/cources';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
