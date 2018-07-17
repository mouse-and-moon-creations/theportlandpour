/**
 * @file Tag component
 * @description Styles and returns a single tag
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import withStyles from '@material-ui/core/styles/withStyles';

const propTypes = {
  tag: PropTypes.object
};

const defaultProps = {
  tag: {}
};

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit
  }
});

const Tag = props => {

  const { tag, classes } = props;

  return (
    <React.Fragment>
      <Chip className={classes.chip} label={tag.name} />
    </React.Fragment>
  );

}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default withStyles(styles)(Tag);
