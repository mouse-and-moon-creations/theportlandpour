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
    margin: 'auto 27% auto 24px',
    [theme.breakpoints.only('md')]: {
      marginRight: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      width: '100%'
    }
  },
  root: {
    margin: '24px',
    position: 'relative'
  },
  sidebar: {
    right: '0 ! important',
    top: '96px ! important'
  }
});

const PostsBlock = props => {

  const { classes, posts, users } = props;

  return (
    <div className={classes.root}>
      <Gloss classes={{ gloss: classes.gloss }} label="Newest cocktails" />
      <Typography className={classes.gloss} paragraph variant="headline">Our latest posts</Typography>
      <div className={classes.paper}>
        {posts.map(post => {
          return (
            <Post post={post} user={find(users, { id: post.author })} key={post.id} />
          );
        })}
        <PostFiller />
      </div>
      <Hidden smDown>
        <Sidebar classes={{ sidebar: classes.sidebar }} />
      </Hidden>
    </div>
  );

}

PostsBlock.propTypes = propTypes;
PostsBlock.defaultProps = defaultProps;

export default withStyles(styles)(PostsBlock);
