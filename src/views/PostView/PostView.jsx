/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blogActions from '../../actions/blogActions';
import PostDetail from '../../components/PostDetail';
import FeaturedPosts from '../../components/FeaturedPosts';
import blogConstants from '../../constants/blogConstants';
import blogHelper from '../../helpers/blogHelper';
import structuredDataHelper from '../../helpers/structuredDataHelper';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import Helmet from 'react-helmet';
import Footer from '../../components/Footer';

const frontload = async props => {
  const slug = props.location.pathname.split('/');
  props.dispatch(blogActions.request(blogConstants.WAITING_POST));
  const post = await blogActions.fetchPostBySlug(slug.pop());
  await props.dispatch(post);
  const related = { filter: encodeURIComponent('tags:[' + post.data.tags.map(tag => tag.slug).join(',') + ']+id:-' + post.data.id) };
  const relatedPosts = await blogActions.getFeaturedPosts(related);
  await props.dispatch(relatedPosts);
  if(props.blog.users.length === 0) {
    props.dispatch(blogActions.request(blogConstants.WAITING_USERS));
    const users = await blogActions.fetchUsers();
    await props.dispatch(users);
  }
}

const amazonLinks = [
  {
    author: 'Karen Locke',
    href: 'https://amzn.to/2pCw6oO',
    pixel: '//ir-na.amazon-adsystem.com/e/ir?t=theportlandpo-20&l=am2&o=1&a=0983491763',
    src: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0983491763&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL170_&tag=theportlandpo-20',
    title: 'High Proof PDX'
  },
  {
    author: 'Jeffrey Morgenthaler',
    href: 'https://amzn.to/2IFE7lJ',
    pixel: '//ir-na.amazon-adsystem.com/e/ir?t=theportlandpo-20&l=am2&o=1&a=145211384X',
    src: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=145211384X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL133_&tag=theportlandpo-20',
    title: 'The Bar Book'
  },
  {
    author: 'Gary Regan',
    href: 'https://amzn.to/2DZuwr6',
    pixel: '//ir-na.amazon-adsystem.com/e/ir?t=theportlandpo-20&l=am2&o=1&a=0451499026',
    src: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0451499026&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL170_&tag=theportlandpo-20',
    title: 'The Joy of Mixology'
  },
  {
    author: 'Dave Arnold',
    href: 'https://amzn.to/2Pbioo5',
    pixel: '//ir-na.amazon-adsystem.com/e/ir?t=theportlandpo-20&l=am2&o=1&a=0393089037',
    src: '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0393089037&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL170_&tag=theportlandpo-20',
    title: 'Liquid Intelligence'
  },
];

const styles = theme => ({
  card: {
    borderColor: theme.palette.grey[300],
    borderWidth: '1px',
    borderStyle: 'solid',
    marginBottom: '12px'
  },
  cardActions: {
    display: 'flex'
  },
  featuredPosts: {
    flexDirection: 'column'
  },
  badge: {
    maxHeight: '140px',
    maxWidth: '140px'
  },
  button: {
    margin: 'auto'
  },
  pixel: {
    position: 'absolute',
    zIndex: -100
  },
  post: {
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  },
  postRoot: {
    display: 'flex',
    flexGrow: 1,
    padding: '0 24px',
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  relatedPost: {
    width: '100%'
  },
  root: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    paddingTop: theme.local.headerPadding,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  sidebar: {
    padding: '0 12px',
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      order: 99,
      paddingTop: '36px',
      width: '100%'
    }
  },
  title: {
    paddingBottom: '24px',
    paddingLeft: '36px',
    paddingRight: '36px'
  }
});

/**
 * Blog view component
 * @extends Component
 */
class PostView extends Component {

  componentDidMount() {

    document.body.addEventListener('click', blogHelper.postLinkHandler);

  }

  componentWillUnmount() {

    document.body.removeEventListener('click', blogHelper.postLinkHandler);

    return this.props.dispatch(blogActions.clearPostDetail());

  }

  render() {

    const { classes, match } = this.props;
    const { featuredPosts, post, users, waiting } = this.props.blog;
    const progress = <LinearProgress />;
    const user = find(users, { id: post.author });
    const articleData = structuredDataHelper.getArticleData({post: post, match: match, user: user});

    return (
      <React.Fragment>
      <div className={classes.root}>
        <Helmet>
          <title>{blogHelper.getTitle(post.title)}</title>
          <link rel="canonical" href={blogHelper.getBaseUrl() + match.url} />
          <meta name="description" content={blogHelper.getPostDescription(post)} />
          <meta property="og:type" content="article" />
          <meta property="article:author" content={user ? user.name : null} />
          <meta property="article:modified_time" content={post.updated_at} />
          <meta property="article:published_time" content={post.published_at} />
          <meta property="article:section" content="Cocktails" />
          {post.tags ? post.tags.map(tag => {
            return (
              <meta key={tag.id} property="article:tag" content={tag.name} />
            )
          }) : null}
          <meta property="og:description" content={post.custom_excerpt} />
          <meta property="og:image" content={blogHelper.getBaseUrl() + post.feature_image} />
          <meta property="og:image:alt" content={post.title + ' cocktail'} />
          <meta property="og:image:height" content="750" />
          <meta property="og:image:secure_url" content={blogHelper.getBaseUrl() + post.feature_image} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content={blogHelper.getTitle()} />
          <meta property="og:title" content={post.title} />
          <meta property="og:url" content={blogHelper.getBaseUrl() + match.url} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content={blogHelper.getHandle('twitter')} />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.custom_excerpt} />
          <meta name="twitter:image" content={blogHelper.getBaseUrl() + post.feature_image} />
          <meta name="twitter:image:alt" content={post.title + ' cocktail'} />
          <script type="application/ld+json">{articleData}</script>
        </Helmet>
        {waiting ? progress : null}
        {post.page ? null :
          <div className={classes.sidebar}>
            <Typography align="center" variant="headline" paragraph>Related</Typography>
            <Typography align="center" variant="subheading" paragraph>Try these cocktails</Typography>
            <FeaturedPosts classes={{ featuredPosts: classes.featuredPosts, post: classes.relatedPost }} featuredPosts={featuredPosts} users={users} />
          </div>}
        <div className={classes.postRoot}>
          <div className={classes.post}>
            {isEmpty(post) ? null : <PostDetail post={post} user={user} />}
          </div>
        </div>
        <div className={classes.sidebar}>
          <Typography align="center" variant="headline" paragraph>More</Typography>
          <Typography align="center" variant="subheading" paragraph>Suggested reading</Typography>
          {amazonLinks.map(link => (
            <Card className={classes.card} key={link.href} elevation={0}>
              <a href={link.href} target="_blank">
                <CardContent>
                  <Typography align="center">
                    <img src={link.src} alt={link.title}/>
                  </Typography>
                  <Typography align="center" variant="subheading">{link.title}</Typography>
                  <Typography align="center" variant="caption">{link.author}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button className={classes.button} color="secondary">Buy now</Button>
                </CardActions>
              </a>
              <img src={link.pixel} className={classes.pixel} width="0" height="0" border="0" alt="" />
            </Card>
          ))}
          <Typography align="center" paragraph>
            <a href="http://drinkwire.liquor.com" rel="noopener noreferrer" target="_blank"><img className={classes.badge} src="http://badges.tid.al/badge/get/tony-m/drinkwire-contributor" alt="liquor.com badge" /></a>
          </Typography>
        </div>
      </div>
      <Footer />
    </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

const routedComponent = withRouter(PostView);

const styledComponent = withStyles(styles)(routedComponent);

export default connect(mapStateToProps)(frontloadConnect(frontload, {onMount: true, onUpdate: false})(styledComponent));;
