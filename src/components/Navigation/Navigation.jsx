/**
 * @file Navigation component
 * @description Global navigation
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Tab,
  Tabs
} from '@material-ui/core';

const Navigation = props => {

  const handleClick = route => {
    return props.history.push(route);
  }

  return (
    <Tabs value={false} {...props}>
      <Tab onClick={() => handleClick('/page/1')} label="Home" />
      <Tab onClick={() => handleClick('/build-your-bar')} label="Build your bar" />
      <Tab onClick={() => handleClick('/about')} label="About" />
      <Tab onClick={() => handleClick('/contact')} label="Contact" />
    </Tabs>
  );

}

export default withRouter(Navigation);
