/**
 * @file Logo component
 * @description Logo
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  logo: {
    height: 'auto',
    maxWidth: '526px',
    width: '100%'
  }
};

const Logo = props => {

  const { classes } = props;

  return (
    <div>
      <img src="/assets/images/logo.png" alt="The Portland Pour logo" className={classes.logo} />
    </div>
  );

}

export default withStyles(styles)(Logo);
