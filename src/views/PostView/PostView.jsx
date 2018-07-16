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
  LinearProgress,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blogActions } from 'actions';
import {
  Footer,
  PostDetail,
  Sidebar
} from 'components';
import { blogHelper } from 'helpers';
import { find, isEmpty } from 'lodash';

const styles = theme => ({
  post: {
    padding: '0 24px',
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  },
  root: {
    display: 'flex',
    marginBottom: '24px'
  },
  sidebar: {
    paddingBottom: '24px',
    paddingRight: '24px',
    width: '30%'
  },
  title: {
    paddingBottom: '24px',
    paddingLeft: '36px',
    paddingRight: '36px',
    paddingTop: theme.local.headerPadding
  }
});

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

    const { classes } = this.props;
    const { post, users, waiting } = this.props.blog;
    const progress = <LinearProgress />;

    return (
      <React.Fragment>
        {waiting ? progress : null}
        <div className={classes.title}>
          <Typography className={classes.headline} variant="display1">Cocktails</Typography>
        </div>
        <div className={classes.root}>
          <div className={classes.post}>
            {isEmpty(post) ? null : <PostDetail post={post} user={find(users, { id: post.author })} />}
          </div>
          <Hidden smDown>
            <div className={classes.sidebar}>
              <Sidebar />
            </div>
          </Hidden>
        </div>
        <Footer />
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return state;

}

const routedComponent = withRouter(PostView);

const styledComponent = withStyles(styles)(routedComponent);

export default connect(mapStateToProps)(styledComponent);
