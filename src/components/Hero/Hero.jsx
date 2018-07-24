/**
 * @file Hero component
 * @description Hero
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Link from 'react-router-dom/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import blogActions from 'actions/blogActions';
import Form from 'components/Form';
import Gloss from 'components/Gloss';
import Tagline from 'components/Tagline';
import blogHelper from 'helpers/blogHelper';
import find from 'lodash/find';

const gridCols = {
  xl: 4,
  lg: 4,
  md: 2,
  sm: 2,
  xs: 2
};

const styles = theme => ({
  buttonLink: {
    color: theme.palette.common.white,
    marginTop: '12px'
  },
  card: {
    background: theme.palette.grey[300],
    width: '100%'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  cta: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 48px 48px',
    marginLeft: 'auto',
    maxWidth: '36%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      order: 1,
      paddingLeft: 0,
      width: '100%'
    }
  },
  ctaFooter: {
    marginTop: 'auto'
  },
  submitButton: {
    marginLeft: 'auto'
  },
  form: {
    background: 'transparent'
  },
  gridList: {

  },
  hero: {
    color: theme.palette.common.white,
    background: 'url(/assets/images/hero.bg.jpg) top center no-repeat',
    backgroundColor: theme.palette.grey[800],
    backgroundSize: 'cover',
    minHeight: '400px',
    paddingTop: theme.local.headerPadding,
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'none'
    }
  },
  heroContent: {
    display: 'flex',
    filter: 'drop-shadow(5px 10px 10px #121)',
    margin: 'auto',
    padding: '0 24px',
    maxWidth: theme.local.maxWidth,
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  },
  image: {
    border: '1px solid #333',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      minWidth: '340px'
    }
  },
  latestDescription: {
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column'
  },
  latestImage: {
    flexGrow: 1,
    marginRight: '24px',
    width: '480px',
    padding: '0',
    [theme.breakpoints.down('md')]: {
      margin: 0,
      width: 'auto'
    }
  },
  latestPost: {
    display: 'flex',
    flexBasis: 'auto',
    padding: '0 48px 48px 0',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      order: 2,
      paddingRight: 0
    }
  },
  latestTitle: {
    marginTop: 'auto',
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem'
    }
  },
  newsletter: {
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  },
  recent: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    }
  },
  recentImage: {
    height: '100%',
    width: '100%'
  }
});

const Hero = props => {

  const { classes, width } = props;
  const { latestPosts, users, mailchimp } = props.blog;
  const latestPost = latestPosts.length ? latestPosts[0] : null;
  const postDate = latestPost ? blogHelper.getPostDate(latestPost.published_at) : null;
  const user = latestPost && users.length ? find(users, { id: latestPost.author }) : null;
  const postBySlug = latestPost ? blogHelper.getPostUrl(latestPost.slug) : '/';

  const submitForm = fields => { return props.dispatch(blogActions.addToMailChimp(fields)); }

  const form = <Form submitFormCallback={submitForm} form="hero" classes={{ submitButton: classes.submitButton, form: classes.form }} showCancel={false} buttonColor="secondary" submitLabel="Sign up" />;
  const formSuccess = <Typography color="primary">Thank you for subscribing to our newsletter. Please check your email for confirmation.</Typography>;

  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <Hidden mdUp>
          <Tagline color="inherit"/>
        </Hidden>
        <div className={classes.latestPost}>
          <div className={classes.latestImage}>
            <Gloss label="Latest cocktail" />
            <Link to={postBySlug}>
              { latestPost ? <img className={classes.image} src={blogHelper.getAssetUrl(latestPost.feature_image)} alt={latestPost.title} /> : null }
            </Link>
          </div>
          <div className={classes.latestDescription}>
            <Typography className={classes.latestTitle} color="inherit">{ latestPost ? latestPost.title : null }</Typography>
            <Typography color="inherit" paragraph variant="subheading">{ latestPost ? latestPost.custom_excerpt : null }</Typography>
            <Typography variant="caption" color="inherit" paragraph>{postDate} by {user ? user.name : null}</Typography>
            <Link to={postBySlug}>
              <Button variant="raised">Make it with local ingredients</Button>
            </Link>
            <Link to="/page/1">
              <Button classes={{ root: classes.buttonLink }} size="small">See all the cocktails</Button>
            </Link>
          </div>
        </div>
        <div className={classes.cta}>
          <div className={classes.recent}>
            <Gloss label="Recent posts" />
            <GridList cellHeight="auto" className={classes.gridList} cols={gridCols[width]}>
              {latestPosts.map((post, index) => {
                return index === 0 || index === 5 ? null : (
                  <GridListTile key={post.id} cols={1}>
                    <Link to={blogHelper.getPostUrl(post.slug)}>
                      <img className={classes.recentImage} src={blogHelper.getAssetUrl(post.feature_image)} alt={post.title} />
                    </Link>
                  </GridListTile>
                );
              })}
            </GridList>
          </div>
          <div className={classes.newsletter}>
            <Gloss label="Stay in touch" />
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="headline">Get the newsletter</Typography>
                { mailchimp ? formSuccess : form }
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

}

const styledComponent = withStyles(styles)(Hero);

export default withWidth()(styledComponent);
