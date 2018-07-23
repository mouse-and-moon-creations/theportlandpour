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
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Gloss from 'components/Gloss';
import Post from 'components/Post';
import Sidebar from 'components/Sidebar';
import find from 'lodash/find';

const propTypes = {
  posts: PropTypes.array,
  users: PropTypes.array
};

const defaultProps = {
  posts: [],
  users: []
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
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    paddingBottom: '24px',
    paddingTop: '24px',
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
          </div>
          <div className={classes.cardActions}>
            <Link className={classes.cardButton} to="/page/1">
              <Button color="secondary">See all the cocktails</Button>
            </Link>
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
