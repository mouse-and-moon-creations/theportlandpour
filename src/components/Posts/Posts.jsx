/**
 * @file Posts component
 * @description List of posts
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Post } from 'components';

const propTypes = {
  posts: PropTypes.array
};

const defaultProps = {
  posts: []
};

const styles = {
  paper: {
    background: 'transparent',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '12px 0'
  }
};

class Posts extends Component {

  render() {

    const { classes, posts } = this.props;

    return (
      <Paper className={classes.paper} elevation={0}>
        {posts.map(post => {
          return (
            <Post post={post} key={post.id} />
          );
        })}
      </Paper>
    );

  }

}

Posts.propTypes = propTypes;
Posts.defaultProps = defaultProps;

export default withStyles(styles)(Posts);
