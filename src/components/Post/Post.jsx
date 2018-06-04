/**
 * @file Post component
 * @description One post
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blogHelper } from 'helpers';

const propTypes = {
  post: PropTypes.object
};

const defaultProps = {
  post: {}
};

const styles = {
  card: {
    height: '100%'
  },
  cardMedia: {
    paddingTop: '50%'
  }
};

class Post extends Component {

  render() {

    const { classes, post } = this.props;

    console.log(blogHelper.getAssetUrl(post.feature_image));

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={blogHelper.getAssetUrl(post.feature_image)} />
        <CardContent>
          <Typography variant="title">{post.title}</Typography>
        </CardContent>
      </Card>
    );

  }

}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default withStyles(styles)(Post);
