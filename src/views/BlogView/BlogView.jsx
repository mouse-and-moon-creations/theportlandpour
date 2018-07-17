/**
 * @file Blog view
 * @description Blog homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blogActions from 'actions/blogActions';
import Footer from 'components/Footer';
import Pager from 'components/Pager';
import Posts from 'components/Posts';
import Sidebar from 'components/Sidebar';
import pull from 'lodash/pull';

const styles = theme => ({
  posts: {
    padding: '0 24px',
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  },
  root: {
    display: 'flex',
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

    let query = { page: 1 }

    if(clear) {
      pull(selectedTags, tag);
    }
    else {
      selectedTags.push(tag);
    }

    this.props.dispatch(blogActions.setSelectedTags(selectedTags));

    if(selectedTags.length) {
      query.filter = 'tags:[' + selectedTags.toString() + ']'
    }

    this.props.dispatch(blogActions.getPosts(query));

  }

  render() {

    const { classes } = this.props;
    const { meta, posts, selectedTags, tags, users, waiting } = this.props.blog;
    const { pagination } = meta;

    const progress = <LinearProgress />;

    return (
      <React.Fragment>
        {waiting ? progress : null}
        <div className={classes.title}>
          <Typography className={classes.headline} variant="display1">Cocktails</Typography>
        </div>
        <div className={classes.root}>
          <div className={classes.posts}>
            <Posts posts={posts} users={users} />
            <Pager pagination={pagination} />
          </div>
          <Hidden smDown>
            <div className={classes.sidebar}>
              <Sidebar showSearch getPostsByTagCallback={this.getPostsByTag} selectedTags={selectedTags} tags={tags} />
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

const styledComponent = withStyles(styles)(BlogView)

export default connect(mapStateToProps)(styledComponent);
