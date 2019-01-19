/**
 * @file Posts component
 * @description List of posts
 * @author tm
 * @copyright Mouse and Moon Creations
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Post from '../Post';

const propTypes = {
  posts: PropTypes.array,
  tags: PropTypes.array
};

const defaultProps = {
  posts: [],
  tags: []
};

const styles = theme => ({
  headline: {
    flexGrow: 1
  },
  paper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
  },
  tags: {
    verticalAlign: 'bottom'
  },
  title: {
    display: 'flex',
    padding: '24px'
  }
});

const Posts = props => {

  const { classes, posts } = props;

  return (
    <div className={classes.posts}>
      <div className={classes.paper}>
        {posts.map(post => {
          return (
            <Post post={post} key={post.id} />
          );
        })}
      </div>
    </div>
  );

}

Posts.propTypes = propTypes;
Posts.defaultProps = defaultProps;

export default withStyles(styles)(Posts);
