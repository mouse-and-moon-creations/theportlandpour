/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
  Link
} from 'react-router-dom';
import { blogActions } from 'actions';
import { Posts } from 'components';
import { blogHelper } from 'helpers';


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

    return this.props.dispatch(blogActions.getPosts({page: page}));

  }

  componentWillUnmount() {

    return this.historyUnlisten();
    
  }

  render() {

    const { pagination } = this.props.blog.meta;
    const { posts } = this.props.blog;
    const prevUrl = blogHelper.getUrl(pagination.prev);
    const nextUrl = blogHelper.getUrl(pagination.next);

    return (
      <React.Fragment>
        <Posts posts={posts} />
        <div>
          <Link to={prevUrl}>Previous</Link>
          <Link to={nextUrl}>Next</Link>
        </div>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default withRouter(connect(mapStateToProps)(BlogView));
