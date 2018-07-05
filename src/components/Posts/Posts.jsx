/**
 * @file Posts component
 * @description List of posts
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Paper
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Post } from 'components';
import { find } from 'lodash';

const propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array
};

const defaultProps = {
  posts: [],
  users: []
};

const styles = {
  paper: {
    background: 'transparent',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0'
  }
};

const Posts = props => {

  const { classes, posts, users } = props;

  return (
    <Paper className={classes.paper} elevation={0}>
      {posts.map(post => {
        return (
          <span key={post.id} >
            <Post post={post} user={find(users, { id: post.author })} />
            <Divider light />
          </span>
        );
      })}
    </Paper>
  );

}

Posts.propTypes = propTypes;
Posts.defaultProps = defaultProps;

export default withStyles(styles)(Posts);
