/**
 * @file User component
 * @description User profile card
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blogHelper } from 'helpers';

const propTypes = {
  bio: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string
};

const defaultProps = {
  bio: '',
  name: '',
  src: ''
};

const styles = {
  avatar: {
    marginRight: '12px'
  },
  card: {
    maxWidth: '600px',
    marginBottom: '24px'
  },
  cardContent: {
    display: 'flex'
  }
};

const User = props => {

  const { bio, classes, name, src } = props;

  const absSrc = blogHelper.getAssetUrl(src);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Avatar className={classes.avatar} src={absSrc} />
        <div>
          <Typography variant="title" paragraph>{name}</Typography>
          <Typography variant="caption">{bio}</Typography>
        </div>
      </CardContent>
    </Card>
  );

}

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default withStyles(styles)(User);
