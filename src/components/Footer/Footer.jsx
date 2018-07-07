/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import {
  Paper,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

const styles = theme => ({
  footer: {
    background: theme.palette.grey[800],
    bottom: 0,
    color: theme.palette.common.white,
    padding: '48px',
    position: 'relative',
    textAlign: 'center',
    zIndex: theme.zIndex.drawer + 1
  }
});

const Footer = props => {

  const { classes } = props;

  return (
    <Paper className={classes.footer} square>
      <Typography color="inherit">The Portland Pour is made by the artists and designers of Mouse and Moon Creations, an art and photography studio in Portland, Oregon</Typography>
      <Typography color="inherit" variant="caption">&copy; 2017 - {moment().format('YYYY')}, Mouse and Moon Creations. All rights reserved.</Typography>
    </Paper>
  );

}

export default withStyles(styles)(Footer);
