/**
 * @file Navigation component
 * @description Global navigation
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    backgroundColor: '#607D8B',
    color: theme.palette.common.white,
    minWidth: '1px',
    position: 'relative',
    width: '100%',
    '& a': {
      color: theme.palette.common.white
    }
  },
  label: {
    whiteSpace: 'nowrap'
  },
  tabIndicator: {
    opacity: 0
  },
  tabs: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
  },
  textColorInherit: {
    opacity: '1 ! important',
  },
});

class Navigation extends Component {

  state = {
    tab: 0
  }

  setTab = (event, value) => {

    this.setState({ tab: value });

  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Tabs
          classes={{indicator: classes.tabIndicator}}
          className={classes.tabs}
          onChange={this.setTab}
          scrollable={true}
          scrollButtons="off"
          indicatorColor="primary"
          value={this.state.tab}
        >
          <Link to="/"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Home" /></Link>
          <Link to="/page/1"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Cocktails" /></Link>
          <Link to="/feature-page/1"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Features" /></Link>
          <Link to="/about"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Shop" /></Link>
        </Tabs>
      </div>
    );

  }

}

const styledComponent = withStyles(styles)(Navigation);

export default withRouter(styledComponent);
