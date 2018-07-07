/**
 * @file FeaturedPosts component
 * @description List of FeaturedPosts
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Gloss,
  Post
} from 'components';
import { find } from 'lodash';

const propTypes = {
  caption: PropTypes.string,
  featuredPosts: PropTypes.array,
  title: PropTypes.string,
  users: PropTypes.array
};

const defaultProps = {
  caption: '',
  featuredPosts: [],
  title: '',
  users: []
};

const styles = theme => ({
  cardContent: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '60px',
      paddingRight: '60px'
    }
  },
  featuredPosts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

const FeaturedPosts = props => {

  const { caption, classes, featuredPosts, title, users } = props;

  return (
    <Card elevation={0} square>
      <CardContent className={classes.cardContent}>
        <Gloss label="Featured cocktails" />
        <Typography variant="headline">{title}</Typography>
        <Typography variant="body1" paragraph>{caption}</Typography>
        <div className={classes.featuredPosts}>
          {featuredPosts.length ? featuredPosts.map(post => {
            return <Post post={post} user={find(users, { id: post.author })} key={post.id} elevation={0} compact />;
          }) : null}
        </div>
      </CardContent>
    </Card>
  );

}

FeaturedPosts.propTypes = propTypes;
FeaturedPosts.defaultProps = defaultProps;

export default withStyles(styles)(FeaturedPosts);
