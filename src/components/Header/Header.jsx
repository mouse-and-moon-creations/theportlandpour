/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Logo } from 'components';

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
          <Typography variant="subheading">
            Cocktails created with the spirits and ingredients of the Pacific Northwest. An art and recipe project by Mouse and Moon Creations, Portland, OR
          </Typography>
        </CardContent>
      </Card>
    );

  }

}

export default withStyles(styles)(Header);
