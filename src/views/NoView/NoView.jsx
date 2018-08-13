/**
 * @file About view
 * @description About page
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    paddingTop: theme.local.headerPadding
  },
  img: {
    display: 'block',
    margin: '0 auto'
  }
});


class NoView extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root} elevation={0}>
        <Typography align="center" paragraph variant="display1">404</Typography>
        <Typography align="center" paragraph variant="headline">Your glass is empty</Typography>
        <img className={classes.img} src="/assets/images/404.jpg" alt=""/>
        <Typography align="center" paragraph variant="subheading">The content you requested is not on the menu.</Typography>
        <Typography align="center" paragraph><Link to="/">Return home</Link></Typography>
      </div>
    );

  }

}

export default withStyles(styles)(NoView);
