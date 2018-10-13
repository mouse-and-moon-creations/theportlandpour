/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Divider from '@material-ui/core/Divider';
import blogActions from '../../actions/blogActions';
import AboutBlock from '../../components/AboutBlock';
import FeaturedPosts from '../../components/FeaturedPosts';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import LocalBlock from '../../components/LocalBlock';
import NewsletterBlock from '../../components/NewsletterBlock';
import PeopleBlock from '../../components/PeopleBlock';
import PitchBlock from '../../components/PitchBlock';
import PostsBlock from '../../components/PostsBlock';
import WorkWithUsBlock from '../../components/WorkWithUsBlock';
import blogConstants from '../../constants/blogConstants';
import blogHelper from '../../helpers/blogHelper';
import Helmet from 'react-helmet';

const frontload = async props => {
  props.dispatch(blogActions.request(blogConstants.WAITING_POSTS));
  const posts = await blogActions.fetchPosts();
  await props.dispatch(posts);
}

/**
 * Blog view component
 * @extends Component
 */
class HomeView extends Component {

  componentDidMount() {

    if(this.props.blog.users.length === 0) {
      this.props.dispatch(blogActions.getUsers());
    }

    this.props.dispatch(blogActions.getFeaturedPosts());

  }

  render() {

    const { featuredPosts, posts, users } = this.props.blog;
    const featuredPostsCaption = blogHelper.getFeaturedPostsCaption();
    const featuredPostsTitle = blogHelper.getFeaturedPostsTitle();

    return (
      <React.Fragment>
        <Helmet>
          <title>{blogHelper.getTitle()}</title>
          <link rel="canonical" href={blogHelper.getBaseUrl()} />
          <meta name="description" content={blogHelper.getDescription()} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={blogHelper.getDescription()} />
          <meta property="og:image" content={posts.length ? blogHelper.getBaseUrl() + posts[0].feature_image : null} />
          <meta property="og:image:alt" content={blogHelper.getTitle()} />
          <meta property="og:image:height" content="750" />
          <meta property="og:image:secure_url" content={posts.length ? blogHelper.getBaseUrl() + posts[0].feature_image : null} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content={blogHelper.getTitle()} />
          <meta property="og:title" content={blogHelper.getTitle()} />
          <meta property="og:url" content={blogHelper.getBaseUrl()} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={blogHelper.getTitle()} />
          <meta name="twitter:description" content={blogHelper.getDescription()} />
          <meta name="twitter:image" content={posts.length ? blogHelper.getBaseUrl() + posts[0].feature_image : null} />
          <meta name="twitter:image:alt" content={blogHelper.getTitle()} />
          <script type="application/ld+json">
            {`{
              "@context":"https://schema.org",
              "@type":"WebSite",
              "@id":"#website",
              "url":"https://www.theportlandpour.com/",
              "name":"The Portland Pour",
              "potentialAction": {
                "@type":"SearchAction",
                "target":"https://www.theportlandpour.com/?s={search_term_string}",
                "query-input":"required name=search_term_string"
              }
            }`}
          </script>
        </Helmet>
        <Hero  latestPosts={posts.slice(0,4)} users={users} />
        <FeaturedPosts caption={featuredPostsCaption} featuredPosts={featuredPosts} title={featuredPostsTitle} users={users} />
        <PitchBlock />
        <LocalBlock />
        <Divider />
        <PostsBlock posts={posts.slice(4, 10)} users={users} />
        <NewsletterBlock />
        <PostsBlock posts={posts.slice(10, posts.length - 2)} users={users} />
        <Divider />
        <AboutBlock />
        <WorkWithUsBlock />
        <Divider />
        <PeopleBlock users={users} />
        <Footer />
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(frontloadConnect(frontload, {onMount: true, onUpdate: false})(HomeView));
