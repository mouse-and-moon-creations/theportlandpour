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
import { pull } from 'lodash';

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

    if(this.props.blog.tags.length === 0) {
      this.props.dispatch(blogActions.getTags());
    }

    if(+page !== +paginationPage) {
      this.props.dispatch(blogActions.getPosts({page: page}));
    }

    return this;

  }

  componentWillUnmount() {

    return this.historyUnlisten();

  }

  getPostsByTag = (tag, clear=false) => {

    const { selectedTags } = this.props.blog;

    if(clear) {
      pull(selectedTags, tag);
    }
    else {
      selectedTags.push(tag);
    }

    this.props.dispatch(blogActions.setSelectedTags(selectedTags));

    this.props.dispatch(blogActions.getPosts({page: 1, filter: 'tags:[' + selectedTags.toString() + ']' }));

  }

  render() {

    const { meta, posts, selectedTags, tags, users, waiting } = this.props.blog;
    const { pagination } = meta;

    const progress = <LinearProgress />;

    return (
      <React.Fragment>
        {waiting ? progress : null}
        <Posts posts={posts} users={users} />
        <Pager pagination={pagination} />
        <Footer />
        <Hidden smDown>
          <Sidebar showSearch getPostsByTagCallback={this.getPostsByTag} selectedTags={selectedTags} tags={tags} />
        </Hidden>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(BlogView);
