/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import blogActions from 'actions/blogActions';
import AboutBlock from 'components/AboutBlock';
import FeaturedPosts from 'components/FeaturedPosts';
import Hero from 'components/Hero';
import LocalBlock from 'components/LocalBlock';
import PeopleBlock from 'components/PeopleBlock';
import PitchBlock from 'components/PitchBlock';
import PostsBlock from 'components/PostsBlock';
import blogHelper from 'helpers/blogHelper';
import { Helmet } from 'react-helmet'

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

    this.props.dispatch(blogActions.getPosts());

    return this;

  }

  render() {

    const { featuredPosts, posts, users } = this.props.blog;
    const featuredPostsCaption = blogHelper.getFeaturedPostsCaption();
    const featuredPostsTitle = blogHelper.getFeaturedPostsTitle();

    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href={blogHelper.getBaseUrl()} />
        </Helmet>
        <Hero  latestPosts={posts.slice(0,4)} users={users} />
        <FeaturedPosts caption={featuredPostsCaption} featuredPosts={featuredPosts} title={featuredPostsTitle} users={users} />
        <PitchBlock />
        <LocalBlock />
        <Divider />
        <PostsBlock posts={posts.slice(4, posts.length)} users={users} />
        <Divider />
        <AboutBlock />
        <Divider />
        <PeopleBlock users={users} />
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(HomeView);
