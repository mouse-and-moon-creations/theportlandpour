/**
 * @file Posts component
 * @description List of posts
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Hidden,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Gloss,
  Post,
  PostFiller,
  Sidebar
} from 'components';
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
  gloss: {
    padding: '0 36px'
  },
  paper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '100%'
    }
  },
  posts: {
    padding: '0 24px',
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    }
  },
  postsRoot: {
    display: 'flex',
  },
  root: {
    margin: '24px',
    position: 'relative'
  },
  sidebar: {
    paddingBottom: '24px',
    paddingRight: '24px',
    width: '30%'
  }
});

const PostsBlock = props => {

  const { classes, posts, users } = props;

  return (
    <div className={classes.root}>
      <Gloss classes={{ gloss: classes.gloss }} label="Newest posts" />
      <Typography className={classes.gloss} paragraph variant="headline">Our latest cocktails</Typography>
      <div className={classes.postsRoot}>
        <div className={classes.posts}>
          <div className={classes.paper}>
            {posts.map(post => {
              return (
                <Post post={post} user={find(users, { id: post.author })} key={post.id} />
              );
            })}
            <PostFiller />
          </div>
        </div>
        <Hidden mdDown>
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
        </Hidden>
      </div>
    </div>
  );

}

PostsBlock.propTypes = propTypes;
PostsBlock.defaultProps = defaultProps;

export default withStyles(styles)(PostsBlock);
