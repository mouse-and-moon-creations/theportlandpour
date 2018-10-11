/**
 * @file Post component
 * @description One post
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TagList from '../TagList';
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
  image: {
    border: '1px solid #D3DBDF',
    height: 'auto',
    maxWidth: '600px',
    width: '100%'
  },
  cardSubheading: {
    paddingBottom: '24px'
  }
});

const PostDetail = props => {

  const { classes, post, user } = props;
  const postDate = blogHelper.getPostDate(post.published_at);
  const absSrc = blogHelper.getAssetUrl(user.profile_image);

  return (
    <div className={classes.root}>
      <Typography variant="display2" color="default" align="center" className={classes.cardTitle}>{post.title}</Typography>
      <Typography className={classes.cardSubheading} align="center" variant="subheading" color="textSecondary" component="div">"{ post.custom_excerpt }"</Typography>
      <Typography className={classes.cardSubheading} variant="subheading" color="textSecondary" align="center" paragraph={true}>
        <Avatar className={classes.avatar} component="span" src={absSrc} />
        {user.name} on {postDate}</Typography>
      <Typography align="center">
        <img src={blogHelper.getAssetUrl(post.feature_image)} alt={post.title} className={classes.image} />
      </Typography>
      <Typography component="div">
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </Typography>
      <TagList tags={post.tags} />
    </div>
  );

}

PostDetail.defaultProps = defaultProps;
PostDetail.propTypes = propTypes;

export default withStyles(styles)(PostDetail);
