/**
 * @file Logo component
 * @description Logo
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  logo: {
    height: 'auto',
    maxWidth: '526px',
    width: '100%'
  }
};

/**
 * Logo component
 * @extends Component
 */
class Logo extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
        <img src="/assets/images/logo.png" alt="The Portland Pour logo" className={classes.logo} />
      </div>
    );

  }

}

export default withStyles(styles)(Logo);
