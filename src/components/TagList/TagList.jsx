/**
 * @file TagList component
 * @description A list of tags
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Tag from 'components/Tag';

const propTypes = {
  tags: PropTypes.array
};

const defaultProps = {
  tags: []
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 4
  }
});

const TagList = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      {props.tags.map(tag => {
        return (
          <Tag key={tag.id} tag={tag} />
        );
      })}
    </div>
  );

}

TagList.propTypes = propTypes;
TagList.defaultProps = defaultProps;

export default withStyles(styles)(TagList);
