/**
 * @file Posts component
 * @description List of posts
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Post from '../Post';

const propTypes = {
  posts: PropTypes.array
};

const defaultProps = {
  posts: []
};

const styles = theme => ({
  cardActions: {
    display: 'flex',
    paddingTop: '24px'
  },
  cardButton: {
    margin: 'auto'
  },
  gloss: {
    padding: '0 36px'
  },
  posts: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '100%'
    }
  },
  root: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    paddingBottom: '60px',
    paddingTop: '60px',
    position: 'relative'
  },
});

const PostsBlock = props => {

  const { classes, posts } = props;

  return (
    <div className={classes.root}>
      <div className={classes.posts}>
        {posts.map(post => {
          return (
            <Post post={post} key={post.id} />
          );
        })}
      </div>
    </div>
  );

}

PostsBlock.propTypes = propTypes;
PostsBlock.defaultProps = defaultProps;

export default withStyles(styles)(PostsBlock);
