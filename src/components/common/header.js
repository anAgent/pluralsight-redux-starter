import React from 'react';
import {IndexLink} from 'react-router';
import LoadingDots from './loadingDots';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
      {" | "}
      <IndexLink to="/about" activeClassName="active">About</IndexLink>
      <LoadingDots interval={100} dots={20}/>
    </nav>
  );
};

export default Header;
