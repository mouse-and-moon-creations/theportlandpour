/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Hidden from '@material-ui/core/Hidden';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blogActions from '../../actions/blogActions';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import Pager from '../../components/Pager';
import Posts from '../../components/Posts';
import pull from 'lodash/pull';
import blogHelper from '../../helpers/blogHelper';
import Helmet from 'react-helmet';
import find from 'lodash/find';

const frontload = async props => {
  const q = props.match.params.q;
  //await props.dispatch(request(blogConstants.WAITING_SEARCH));
  await props.dispatch(blogActions.clearPosts());
  const search = await blogActions.search(q);
  if(search.data.slugs.length) {
    const query = {filter: 'slug:[' + search.data.slugs.toString() + ']'}
    await props.dispatch(search);
    const posts = await blogActions.fetchPosts(query);
    await props.dispatch(posts);
  }
};

const styles = theme => ({
  posts: {
    padding: '0 24px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      width: 'auto'
    }
  },
  root: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    paddingTop: theme.local.headerPadding,
    position: 'relative'
  },
  sidebar: {
    paddingBottom: '24px',
    paddingRight: '24px',
    width: '30%'
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
class BlogView extends Component {

  sortPosts = () => {

    const { posts } = this.props.blog.posts;
    const { slugs } = this.props.blog.search;

    const ret = posts.length ? slugs.map(slug => {
      return find(posts, { slug: slug });
    }) : [];

    return ret;

  }

  render() {

    const { classes, match } = this.props;
    const { waiting } = this.props.blog;
    const { meta } = this.props.blog.posts;
    const { q } = this.props.blog.search;
    const { pagination } = meta;
    const posts = this.sortPosts();

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Helmet>
            <title>{blogHelper.getTitle('Cocktails - Page ' + match.params.page)}</title>
            <link rel="canonical" href={blogHelper.getBaseUrl() + match.url} />
            <meta property="og:type" content="object" />
            <meta property="og:description" content={blogHelper.getDescription()} />
            <meta property="og:image" content={posts.length ? posts[0].feature_image : null} />
            <meta property="og:image:alt" content={blogHelper.getTitle()} />
            <meta property="og:image:height" content="750" />
            <meta property="og:image:secure_url" content={posts.length ? posts[0].feature_image : null} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="600" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={blogHelper.getTitle()} />
            <meta property="og:title" content={'Cocktails - page ' + match.params.page} />
            <meta property="og:url" content={blogHelper.getBaseUrl() + match.url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={'Cocktails - page ' + match.params.page} />
            <meta name="twitter:description" content={blogHelper.getDescription()} />
            <meta name="twitter:image" content={posts.length ? posts[0].feature_image : null} />
            <meta name="twitter:image:alt" content={blogHelper.getTitle()} />
          </Helmet>
          <div className={classes.rootContent}>
            <div className={classes.posts}>
              <Typography variant="h4">Search results for: {q}</Typography>
              <Pager pagination={pagination} />
              {waiting ? <LinearProgress color="secondary" /> : null}
              <Posts posts={posts} />
              <Pager pagination={pagination} />
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

const styledComponent = withStyles(styles)(BlogView)

export default connect(mapStateToProps)(frontloadConnect(frontload, {onMount: true, onUpdate: false})(styledComponent));
