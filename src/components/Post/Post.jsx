/**
 * @file Post component
 * @description One post
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { blogHelper } from 'helpers';

const propTypes = {
  post: PropTypes.object,
  user: PropTypes.object
};

const defaultProps = {
  post: {},
  user: {}
};

const styles = theme => ({
  root: {
    marginBottom: '3%',
//    width: '60%',
    width: '32%',
    [theme.breakpoints.down('md')]: {
      width: '48%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  cardActions: {
    display: 'flex'
  },
  cardBody: {
    height: '80px',
    overflow: 'hidden'
  },
  cardButton: {
    marginLeft: 'auto'
  },
  image: {
    border: '1px solid #D3DBDF',
    height: 'auto',
//    maxWidth: '400px',
    width: '100%'
  },
  cardTitle: {
    padding: '24px 0'
  }
});

const Post = props => {

  const { classes, post, user } = props;
  const postDate = moment(post.published_at).format('LL');
  const postBySlug = blogHelper.getPostUrl(post.slug)

  return (
    <Card className={classes.root}>
      <Link to={postBySlug}>
        <CardContent>
          <Typography align="center">
            <img src={blogHelper.getAssetUrl(post.feature_image)} alt={post.title} className={classes.image} />
          </Typography>
          <Typography variant="title" align="center" className={classes.cardTitle}>{post.title}</Typography>
          <Typography variant="caption" align="center" paragraph={true}>{postDate} by {user.name}</Typography>
          <Typography className={classes.cardBody} component="div">{ post.custom_excerpt }</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button className={classes.cardButton} color="secondary" disableRipple disableFocusRipple>Read more</Button>
        </CardActions>
      </Link>
    </Card>
  );

}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default withStyles(styles)(Post);
