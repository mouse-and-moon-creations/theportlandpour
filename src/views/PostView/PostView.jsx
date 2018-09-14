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
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import blogActions from '../../actions/blogActions';
import PostDetail from '../../components/PostDetail';
import blogConstants from '../../constants/blogConstants';
import blogHelper from '../../helpers/blogHelper';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import Helmet from 'react-helmet';
import Footer from '../../components/Footer';

const frontload = async props => {
  const slug = props.location.pathname.split('/');
  props.dispatch(blogActions.request(blogConstants.WAITING_POST));
  const post = await blogActions.fetchPostBySlug(slug.pop());
  await props.dispatch(post);
  if(props.blog.users.length === 0) {
    props.dispatch(blogActions.request(blogConstants.WAITING_USERS));
    const users = await blogActions.fetchUsers();
    await props.dispatch(users);
  }
}

const styles = theme => ({
  post: {
    margin: '0 auto',
    padding: '0 24px',
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  },
  postRoot: {
    display: 'flex'
  },
  root: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    paddingTop: theme.local.headerPadding
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
    const { post, users, waiting } = this.props.blog;
    const progress = <LinearProgress />;
    const user = find(users, { id: post.author });

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
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={post.custom_excerpt} />
          <meta name="twitter:image" content={blogHelper.getBaseUrl() + post.feature_image} />
          <meta name="twitter:image:alt" content={post.title + ' cocktail'} />
        </Helmet>
        {waiting ? progress : null}
        <div className={classes.postRoot}>
          <div className={classes.post}>
            {isEmpty(post) ? null : <PostDetail post={post} user={user} />}
          </div>
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
