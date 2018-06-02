/**
 * @file Posts component
 * @description List of posts
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid
} from '@material-ui/core';
import { Post } from 'components';

const propTypes = {
  posts: PropTypes.array
};

const defaultProps = {
  posts: []
};

class Posts extends Component {

  render() {

    return (
      <Grid container spacing={16}>
        {this.props.posts.map(post => {
          return (
            <Grid item xs={12} sm={6} md={3} lg={2} xl={1}>
              <Post post={post} />
            </Grid>
          );
        })}
      </Grid>
    );

  }

}

Posts.propTypes = propTypes;
Posts.defaultProps = defaultProps;

export default Posts;
