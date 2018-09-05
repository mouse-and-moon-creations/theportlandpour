/**
 * @file Post component
 * @description One post
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Markdown from 'react-markdown';
import find from 'lodash/find';
import TagList from 'components/TagList';
import blogHelper from 'helpers/blogHelper';

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
    '& a': {
      textDecoration: 'underline'
    }
  },
  avatar: {
    display: 'inline-block',
    marginRight: '12px',
    verticalAlign: 'middle'
  },
  cardActions: {
    display: 'flex'
  },
  cardBody: {
    padding: '0 10%'
  },
  cardButton: {
    marginLeft: 'auto'
  },
  image: {
    border: '1px solid #D3DBDF',
    height: 'auto',
    maxWidth: '600px',
    width: '100%'
  },
  cardSubheading: {
    paddingBottom: '24px'
  },
  cardTitle: {
    padding: '24px 0 12px 0'
  }
});

const PostDetail = props => {

  const { classes, post, user } = props;
  const mobiledoc = JSON.parse(post.mobiledoc);
  const card = mobiledoc.cards[0];
  const markdown = find(card, { cardName: card[0] });
  const postDate = blogHelper.getPostDate(post.published_at);
  const absSrc = blogHelper.getAssetUrl(user.profile_image);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardBody}>
        <Typography variant="display2" color="default" align="center" className={classes.cardTitle}>{post.title}</Typography>
        <Typography className={classes.cardSubheading} align="center" variant="subheading" color="textSecondary" component="div">"{ post.custom_excerpt }"</Typography>
        <Typography className={classes.cardSubheading} variant="subheading" color="textSecondary" align="center" paragraph={true}>
          <Avatar className={classes.avatar} component="span" src={absSrc} />
          {user.name} on {postDate}</Typography>
        <Typography align="center">
          <img src={blogHelper.getAssetUrl(post.feature_image)} alt={post.title} className={classes.image} />
        </Typography>
        <Typography component="div">
          <Markdown escapeHtml={true} source={markdown.markdown} />
        </Typography>
        <TagList tags={post.tags} />
      </CardContent>
    </Card>
  );

}

PostDetail.defaultProps = defaultProps;
PostDetail.propTypes = propTypes;

export default withStyles(styles)(PostDetail);
