/**
 * @file Tagline component
 * @description Tagline
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  tagline: {
    padding: '48px 0'
  }
};

/**
 * Tagline component
 * @extends Component
 */
class Tagline extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Typography variant="subheading" align="center" className={classes.tagline}>
        Cocktails created with the spirits and ingredients of the Pacific Northwest. An art and recipe project by Mouse and Moon Creations, Portland, OR
      </Typography>
    );

  }

}

export default withStyles(styles)(Tagline);
