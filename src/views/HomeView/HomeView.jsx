/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Divider,
  Paper
} from '@material-ui/core';
import { blogActions } from 'actions';
import {
  AboutBlock,
  FeaturedPosts,
  Footer,
  Hero,
  PitchBlock,
  PostsBlock
} from 'components';
import { blogHelper } from 'helpers';

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

    this.props.dispatch(blogActions.getLatestPosts());

    return this;

  }

  render() {

    const { featuredPosts, latestPosts, users } = this.props.blog;
    const featuredPostsCaption = blogHelper.getFeaturedPostsCaption();
    const featuredPostsTitle = blogHelper.getFeaturedPostsTitle();

    return (
      <React.Fragment>
        <Hero {...this.props} />
        <Paper elevation={0} square>
          <FeaturedPosts caption={featuredPostsCaption} featuredPosts={featuredPosts} title={featuredPostsTitle} users={users} />
          <Divider />
          <AboutBlock users={users} />
        </Paper>
        <PostsBlock posts={latestPosts} users={users} />
        <Divider />
        <PitchBlock />
        <Footer />
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(HomeView);
