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
import { RssFeed } from '@material-ui/icons';

const Navigation = props => {

  const handleClick = route => {
    return props.history.push(route);
  }

  return (
    <Tabs value={false} className={props.className ? props.className : ''}>
      <Tab onClick={() => handleClick('/page/1')} label="Cocktails" />
      <Tab onClick={() => handleClick('/about')} label="About" />
      <Tab onClick={() => window.open('https://blog.theportlandpour.com/rss')} icon={<RssFeed />}/>
    </Tabs>
  );

}

export default withRouter(Navigation);
