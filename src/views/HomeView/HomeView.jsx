/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import blogActions from 'actions/blogActions';
import AboutBlock from 'components/AboutBlock';
import FeaturedPosts from 'components/FeaturedPosts';
import Hero from 'components/Hero';
import PitchBlock from 'components/PitchBlock';
import PostsBlock from 'components/PostsBlock';
import RecipeBlock from 'components/RecipeBlock';
import blogHelper from 'helpers/blogHelper';

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
        <FeaturedPosts caption={featuredPostsCaption} featuredPosts={featuredPosts} title={featuredPostsTitle} users={users} />
        <PitchBlock />
        <PostsBlock posts={latestPosts} users={users} />
        <RecipeBlock />
        <AboutBlock users={users} />
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(HomeView);
