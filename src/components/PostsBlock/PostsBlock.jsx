/**
 * @file Posts component
 * @description List of posts
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Gloss from '../Gloss';
import Post from '../Post';

const propTypes = {
  label: PropTypes.string,
  posts: PropTypes.array
};

const defaultProps = {
  label: '',
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
    padding: '0 0 24px 12px'
  },
  posts: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
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

  const { classes, label, posts } = props;

  return (
    <div className={classes.root}>
      {label ? <Gloss classes={{gloss: classes.gloss}} label={label} variant="h4" /> : null}
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
