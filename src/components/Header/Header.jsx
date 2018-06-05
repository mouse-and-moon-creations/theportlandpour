/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import {
  Card,
  CardContent
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Logo,
  Tagline
} from 'components';

const styles = {
  header: {
    textAlign: 'center'
  }
};

class Header extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Card className={classes.header}>
        <CardContent>
          <Logo />
          <Tagline />
        </CardContent>
      </Card>
    );

  }

}

export default withStyles(styles)(Header);
