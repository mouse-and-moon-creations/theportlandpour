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
    <Tabs value={false} className={props.className ? props.className : ''}>
      <Tab onClick={() => handleClick('/page/1')} label="Cocktails" />
      <Tab onClick={() => handleClick('/about')} label="About" />
    </Tabs>
  );

}

export default withRouter(Navigation);
