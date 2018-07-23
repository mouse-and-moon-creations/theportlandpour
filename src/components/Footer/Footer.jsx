/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import moment from 'moment';

const styles = theme => ({
  footer: {
    borderTopColor: theme.palette.grey[500],
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    bottom: 0,
    marginTop: '72px',
    padding: '48px',
    position: 'relative',
    textAlign: 'center',
    zIndex: theme.zIndex.drawer + 1
  }
});

const Footer = props => {

  const { classes } = props;

  return (
    <div className={classes.footer}>
      <Typography color="inherit" variant="body2">Please drink responsibly</Typography>
      <Typography color="inherit">The Portland Pour is made by the artists and designers of Mouse and Moon Creations, an art and photography studio in Portland, Oregon</Typography>
      <Typography color="inherit" variant="caption">&copy; 2017 - {moment().format('YYYY')}, Mouse and Moon Creations. All rights reserved.</Typography>
    </div>
  );

}

export default withStyles(styles)(Footer);
