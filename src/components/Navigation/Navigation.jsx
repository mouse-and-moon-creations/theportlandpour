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
    <Tabs value={false} textColor="secondary" centered>
      <Tab onClick={() => handleClick('/page/1')} label="Home" />
      <Tab onClick={() => handleClick('/about')} label="About" />
    </Tabs>
  );

}

export default withRouter(Navigation);
