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
import { Posts } from 'components';

/**
 * Blog view component
 * @extends Component
 */
class PostView extends Component {

  componentDidMount() {

    const slug = this.props.location.pathname.split('/');

    if(this.props.blog.users.length === 0) {
      this.props.dispatch(blogActions.getUsers());
    }

    this.props.dispatch(blogActions.getPostBySlug(slug.pop()));

  }

  render() {

    const { posts, users, waiting } = this.props.blog;
    const progress = <LinearProgress />;

    return (
      <React.Fragment>
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

export default connect(mapStateToProps)(PostView);
