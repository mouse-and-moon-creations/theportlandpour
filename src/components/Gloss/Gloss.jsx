/**
 * @file Gloss component
 * @description Section labels that make everything shiny
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const propTypes = {
  label: PropTypes.string
};

const defaultProps = {
  label: ''
};

const styles = theme => ({
  gloss: {
    fontFamily: theme.local.typography.gloss.fontFamily
  }
});

const Gloss = props => {

  const { classes, label } = props;

  return (
    <React.Fragment>
      <Typography className={classes.gloss} color="inherit" variant="display1">{label}</Typography>
    </React.Fragment>
  );

}

Gloss.propTypes = propTypes;
Gloss.defaultProps = defaultProps;

export default withStyles(styles)(Gloss);
