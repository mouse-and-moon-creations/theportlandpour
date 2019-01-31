/**
 * @file Post component
 * @description One post
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blogHelper from '../../helpers/blogHelper';

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
    maxWidth: '620px',
    padding: '20px 10px',
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
  cardButton: {
    marginLeft: 'auto'
  },
  flexContainer: {
    display: 'flex',
    paddingBottom: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 2
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
  postContent: {
    '& img': {
      border: '1px solid #D3DBDF',
      display: 'block',
      height: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '600px',
      width: '100%'
    }
  },
  shareLink: {
    color: theme.palette.text.hint,
    marginRight: theme.spacing.unit * 2
  }
});

const PostDetail = props => {

  const { classes, post } = props;
  const postDate = blogHelper.getPostDate(post.published_at);
  const absSrc = blogHelper.getAssetUrl(post.primary_author.profile_image);
  const assetUrl = post.feature_image ? blogHelper.getAssetUrl(post.feature_image) : null;
  const permalink = blogHelper.getBaseUrl() + blogHelper.getPostUrl(post.slug);
  const facebookShare = blogHelper.getFacebookShare(permalink);
  const twitterShare = blogHelper.getTwitterShare(permalink, blogHelper.getTitle(post.title) + ' - ' + post.custom_excerpt, blogHelper.getHashtags('twitter'));
  const pinterestShare = blogHelper.getPinterestShare(permalink, assetUrl, post.title + ' - ' + post.custom_excerpt);
  const emailShare = blogHelper.getEmailShare(permalink, blogHelper.getTitle(post.title), post.custom_excerpt);

  return (
    <div className={classes.root}>
      <Typography gutterBottom  variant="h4" color="default" className={classes.cardTitle}>
        {post.title}
      </Typography>
      <Typography gutterBottom variant="subtitle1" component="div">
        {post.custom_excerpt}
      </Typography>
      <div className={classes.flexContainer}>
        <div>
          <Avatar className={classes.avatar} component="span" src={absSrc} />
        </div>
        <div>
          <Typography variant="subtitle2" component="div">
            {post.primary_author.name}
          </Typography>
          <Typography variant="caption" component="div">
            {postDate} - {blogHelper.getPostReadingTime(post.html)} min. read
          </Typography>
        </div>
      </div>
      <Typography align="center" paragraph>
        {assetUrl ? <img src={assetUrl} alt={post.title} className={classes.image} /> : null}
      </Typography>
      <Typography variant="h5" paragraph>
        <a className={classes.shareLink} href={facebookShare} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className={classes.socialIcon} icon={faFacebook} />
        </a>
        <a className={classes.shareLink} href={twitterShare} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className={classes.socialIcon} icon={faTwitter} />
        </a>
        <a className={classes.shareLink} href={pinterestShare} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className={classes.socialIcon} icon={faPinterest} />
        </a>
        <a className={classes.shareLink} href={emailShare} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className={classes.socialIcon} icon={faEnvelope} />
        </a>
      </Typography>
      <Typography variant="caption" paragraph>permalink: {permalink}</Typography>
      <Typography component="div" className={classes.postContent}>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </Typography>
    </div>
  );

}

PostDetail.defaultProps = defaultProps;
PostDetail.propTypes = propTypes;

export default withStyles(styles)(PostDetail);
