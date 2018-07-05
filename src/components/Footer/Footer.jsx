/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    marginTop: '12px',
    textAlign: 'center'
  }
};

const Footer = props => {

  const { classes } = props;

  return (
    <div className={classes.footer}>
    </div>
  );

}

export default withStyles(styles)(Footer);
