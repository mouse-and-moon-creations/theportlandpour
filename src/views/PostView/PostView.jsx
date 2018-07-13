/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Hidden,
  LinearProgress
} from '@material-ui/core';
import { blogActions } from 'actions';
import {
  Footer,
  PostDetail,
  Sidebar
} from 'components';
import { blogHelper } from 'helpers';
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

    document.body.addEventListener('click', blogHelper.postLinkHandler);

  }

  componentWillUnmount() {

    document.body.removeEventListener('click', blogHelper.postLinkHandler);

    return this.props.dispatch(blogActions.clearPostDetail());

  }

  render() {

    const { post, users, waiting } = this.props.blog;
    const progress = <LinearProgress />;

    return (
      <React.Fragment>
        {waiting ? progress : null}
        {isEmpty(post) ? null : <PostDetail post={post} user={find(users, { id: post.author })} />}
        <Footer />
        <Hidden smDown>
          <Sidebar />
        </Hidden>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

const routedComponent = withRouter(PostView);

export default connect(mapStateToProps)(routedComponent);
