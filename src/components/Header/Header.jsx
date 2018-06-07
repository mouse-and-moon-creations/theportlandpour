/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import {
  Card,
  CardContent,
  Divider
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Logo,
  Navigation,
  Tagline
} from 'components';

const styles = {
  header: {
    marginBottom: '12px',
    textAlign: 'center'
  }
};

const Header = props => {

  const { classes } = props;

  return (
    <React.Fragment>
      <Card className={classes.header} elevation={0}>
        <CardContent>
          <Logo />
          <Tagline />
          <Navigation />
        </CardContent>
      </Card>
      <Divider light />
    </React.Fragment>
  );

}

export default withStyles(styles)(Header);
