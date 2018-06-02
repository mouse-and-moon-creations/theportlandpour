/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { blogHelper } from 'helpers';
import { Posts } from 'components';


/**
 * Blog view component
 * @extends Component
 */
class Blog extends Component {

  constructor() {

    super();

    this.state = {
      meta: {},
      posts: []
    };

  }

  componentDidMount() {

    return blogHelper.getPosts()
      .then(posts => {
        this.setState(posts);
      });

  }

  render() {

    return (
      <Posts posts={this.state.posts} />
    );

  }

}

export default Blog;
