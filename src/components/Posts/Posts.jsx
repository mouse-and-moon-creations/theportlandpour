/**
 * @file Posts component
 * @description List of posts
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
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

const styles = theme => ({
  paper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    margin: 'auto 24% auto auto',
//    width: '74%',
    [theme.breakpoints.only('sm')]: {
      width: '64%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
});

const Posts = props => {

  const { classes, posts, users } = props;

  return (
    <div className={classes.paper}>
      {posts.map(post => {
        return (
          <Post post={post} user={find(users, { id: post.author })} key={post.id} />
        );
      })}
    </div>
  );

}

Posts.propTypes = propTypes;
Posts.defaultProps = defaultProps;

export default withStyles(styles)(Posts);
