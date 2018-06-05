/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
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

const Header = props => {

  const { classes } = props;

  return (
    <Card className={classes.header}>
      <CardContent>
        <Logo />
        <Tagline />
      </CardContent>
    </Card>
  );

}

export default withStyles(styles)(Header);
