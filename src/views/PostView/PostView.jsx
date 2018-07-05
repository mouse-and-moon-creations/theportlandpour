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
import { PostDetail } from 'components';
import { find, isEmpty } from 'lodash';

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

    const { post, users, waiting } = this.props.blog;
    const progress = <LinearProgress />;

    return (
      <React.Fragment>
        <Collapse in={!waiting} timeout="auto">
          {waiting ? progress : null}
          {isEmpty(post) ? null : <PostDetail post={post} user={find(users, { id: post.author })} />}
        </Collapse>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(PostView);
