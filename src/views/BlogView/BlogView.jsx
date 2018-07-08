/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Hidden,
  LinearProgress
} from '@material-ui/core';
import { blogActions } from 'actions';
import {
  Footer,
  Pager,
  Posts,
  Sidebar
} from 'components';

/**
 * Blog view component
 * @extends Component
 */
class BlogView extends Component {

  componentDidMount() {

    this.historyUnlisten = this.props.history.listen((location, action) => {
      const path = location.pathname.split('/');
      const page = path[path.indexOf('page') + 1];
      //window.scrollTo(0, 0);
      return page ? this.props.dispatch(blogActions.getPosts({page: page})) : null;
    });

    const page = this.props.match.params.page;
    const paginationPage = this.props.blog.meta.pagination.page;

    if(this.props.blog.users.length === 0) {
      this.props.dispatch(blogActions.getUsers());
    }

    if(this.props.blog.featuredPosts.length === 0) {
      this.props.dispatch(blogActions.getFeaturedPosts());
    }

    if(+page !== +paginationPage) {
      this.props.dispatch(blogActions.getPosts({page: page}));
    }

    return this;

  }

  componentWillUnmount() {

    return this.historyUnlisten();

  }

  render() {

    const { meta, posts, users, waiting } = this.props.blog;
    const { pagination } = meta;

    const progress = <LinearProgress />;

    return (
      <React.Fragment>
          {waiting ? progress : null}
          <Posts posts={posts} users={users} />
          <Pager pagination={pagination} />
          <Footer />
        <Hidden smDown>
          <Sidebar {...this.props} />
        </Hidden>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(BlogView);
