/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  LinearProgress
} from '@material-ui/core';
import { blogActions } from 'actions';
import {
  Hero,
  Posts
} from 'components';

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

    const { posts, users, waiting } = this.props.blog;

    const progress = <LinearProgress />;

    return (
      <React.Fragment>
        <Hero {...this.props} />
        <Collapse in={!waiting} timeout="auto">
          {waiting ? progress : null}
          <Posts posts={posts} users={users} />
        </Collapse>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(HomeView);
