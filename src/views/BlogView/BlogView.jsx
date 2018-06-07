/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Divider
} from '@material-ui/core';
import { blogActions } from 'actions';
import {
  Pager,
  Posts
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
      window.scrollTo(0, 0);
      return page ? this.props.dispatch(blogActions.getPosts({page: page})) : null;
    });

    const page = this.props.match.params.page ? this.props.match.params.page : this.props.blog.meta.pagination.page;

    this.props.dispatch(blogActions.getUsers());
    this.props.dispatch(blogActions.getPosts({page: page}));

    return this;

  }

  componentWillUnmount() {

    return this.historyUnlisten();

  }

  render() {

    const { meta, posts, users, waiting } = this.props.blog;
    const { pagination } = meta;

    console.log(this.props);

    return (
      <React.Fragment>
        <Pager pagination={pagination} />
        <Divider light />
        <Collapse in={!waiting} timeout="auto">
          <Posts posts={posts} users={users} />
        </Collapse>
        <Pager pagination={pagination} />
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default withRouter(connect(mapStateToProps)(BlogView));
