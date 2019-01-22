/**
 * @file Post component
 * @description One post
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import moment from 'moment';
import blogHelper from '../../helpers/blogHelper';

const propTypes = {
  compact: PropTypes.bool,
  post: PropTypes.object,
  showactions: PropTypes.bool
};

const defaultProps = {
  compact: false,
  post: {},
  showactions: true
};

const styles = theme => ({
  root: {
    border: 0,
    boxShadow: theme.shadows[1],
    marginBottom: '12px',
    width: '32%',
    [theme.breakpoints.down('md')]: {
      width: '48%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  rootCompact: {
    borderColor: theme.palette.grey[300],
    borderWidth: '1px',
    borderStyle: 'solid',
    width: '16%',
    [theme.breakpoints.down('md')]: {
      width: '24%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '48%'
    }
  },
  cardActions: {
    display: 'block',
    paddingLeft: '8px'
  },
  cardBody: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  cardButton: {
    margin: 'auto'
  },
  image: {
    display: 'block',
    height: 'auto',
    width: '100%'
  },
  cardTitleCompact: {
    padding: '0'
  },
  borderFeatured: {
    borderTop: '6px solid #f44336'
  },
  borderCocktail: {
    borderTop: '6px solid #607d8b'
  }
});

const Post = props => {

  const { classes, compact, post, showactions } = props;
  const postDate = moment(post.published_at).format('ll');
  const postBySlug = blogHelper.getPostUrl(post.slug);

  return (
    <Card className={compact ? classes.rootCompact : classes.root} {...props} classes={{}} compact="" showactions="" elevation={0}>
      <Link to={postBySlug}>
        <img src={blogHelper.getAssetUrl(post.feature_image)} alt={post.title} className={classes.image} />
        <CardContent className={post.featured ? classes.borderFeatured : classes.borderCocktail}>
          {compact ? null : (
            <Typography variant="caption" gutterBottom>{postDate}</Typography>
          )}
          <Typography gutterBottom={compact ? false : false} variant={compact ? 'subtitle2' : 'h6'} component="h2" className={compact ? classes.cardTitleCompact : classes.cardTitle}>{post.title}</Typography>
          <Typography className={classes.cardBody} variant="caption" paragraph>
            {post.featured ? <span>{'\u00A0'}</span> :
              post.tags.map((tag, index, tags) => {
                return <span key={post.id + tag.id} className={classes.tag}>{tag.name + (index === tags.length - 1 ? '' : ', ') }</span>
              })
            }
          </Typography>
          {compact ? null : (
            <React.Fragment>
              <Typography className={classes.cardBody} component="p">{ post.custom_excerpt }</Typography>
            </React.Fragment>
          )}
        </CardContent>
        {showactions && !compact ? (
          <CardActions className={classes.cardActions}>
            <Button className={classes.cardButton} color="secondary" disableRipple disableFocusRipple>Read more</Button>
          </CardActions>
        ) : null}
      </Link>
    </Card>
  );

}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default withStyles(styles)(Post);
