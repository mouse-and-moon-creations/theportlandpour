/**
 * @file Post component
 * @description One post
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
import Markdown from 'react-markdown';
import { find } from 'lodash';
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

const styles = {
  card: {
    height: '100%',
    padding: '5%'
  },
  image: {
    border: '1px solid #D3DBDF',
    height: 'auto',
    maxWidth: '600px',
    width: '100%'
  },
  title: {
    padding: '24px 0'
  }
};

const Post = props => {

  const { classes, post, user } = props;
  const mobiledoc = JSON.parse(post.mobiledoc);
  const card = mobiledoc.cards[0];
  const markdown = find(card, { cardName: card[0] });
  const postDate = moment(post.published_at).format('LL');

  return (
    <Card className={classes.card} elevation={0}>
      <CardContent>
        <Typography align="center">
          <img src={blogHelper.getAssetUrl(post.feature_image)} alt={post.title} className={classes.image} />
        </Typography>
        <Typography variant="title" align="center" className={classes.title}>{post.title}</Typography>
        <Typography variant="caption" align="center" paragraph={true}>{postDate} by {user.name}</Typography>
        <Typography component="div">
          <Markdown escapeHtml={true} source={markdown.markdown} />
        </Typography>
      </CardContent>
    </Card>
  );

}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default withStyles(styles)(Post);
