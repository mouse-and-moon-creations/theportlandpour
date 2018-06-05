/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { blogActions } from 'actions';
import { Posts } from 'components';


/**
 * Blog view component
 * @extends Component
 */
class BlogView extends Component {

  componentDidMount() {

    return this.getNextPosts();

  }

  getNextPosts = () => {

    const { pagination } = this.props.blog.meta;

    const query = {
      page: pagination.next
    };

    return this.getPosts(query);

  }

  getPosts = query => {

    window.scrollTo(0, 0);
    return this.props.dispatch(blogActions.getPosts(query));

  }

  getPreviousPosts = () => {

    const { pagination } = this.props.meta;

    const query = {
      page: pagination.prev
    };

    return this.getPosts(query);

  }

  render() {

    return (
      <React.Fragment>
        <Posts posts={this.props.blog.posts} />
        <div>
          <button type="button" onClick={this.getPreviousPosts}>Previous</button>
          <button type="button" onClick={this.getNextPosts}>Next</button>
        </div>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

export default connect(mapStateToProps)(BlogView);
