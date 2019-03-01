/**
 * @file Gloss component
 * @description Section labels that make everything shiny
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const propTypes = {
  component: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string
};

const defaultProps = {
  component: '',
  label: '',
  variant: 'headline'
};

const styles = theme => ({
  gloss: {
    fontFamily: theme.local.typography.gloss.fontFamily,
    lineHeight: 'inherit'
  }
});

const Gloss = props => {

  const { classes, component, label, variant } = props;

  return (
    <React.Fragment>
      <Typography className={classes.gloss} color="inherit" {...props}>{label}</Typography>
    </React.Fragment>
  );

}

Gloss.propTypes = propTypes;
Gloss.defaultProps = defaultProps;

export default withStyles(styles)(Gloss);
