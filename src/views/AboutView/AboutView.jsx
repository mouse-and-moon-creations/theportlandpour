/**
 * @file About view
 * @description About page
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  Hidden,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blogActions } from 'actions';
import {
  Footer,
  Sidebar,
  Users
} from 'components';

const styles = theme => ({
  about: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    margin: 'auto 24% auto auto',
    marginBottom: '24px',
    marginLeft: '24px',
    marginRight: '26%',
    marginTop: theme.local.headerPadding,
    [theme.breakpoints.only('md')]: {
      marginRight: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
});


class AboutView extends Component {

  componentDidMount = () => {

    if(this.props.users.length === 0) {
      this.props.dispatch(blogActions.getUsers());
    }

  }

  render() {

    const { classes, users } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.about} elevation={0}>
          <CardContent>
            <Typography variant="headline" paragraph={true}>About The Portland Pour</Typography>
            <Typography variant="title" paragraph={true}>The project</Typography>
            <Typography paragraph={true}>
              We're as passionate about the spirits and distilleries of Portland as we are about a skillfully crafted cocktail.
              The Portland Pour is a celebration of Portland, the Northwest, and the wonderful products made here.
              We use local ingredients wherever possible, craft them into delicious drinks, and photograph them at our studio in Downtown Portland.
              We then share them with you, along with our thoughts and recommendations for creating your own version of our favorite drinks, both classic and modern.
            </Typography>
            <Typography paragraph={true}>
              All the photos you see on The Portland Pour were made at Mouse and Moon Creations, our studio in downtown Portland.
            </Typography>
            <Typography variant="title" paragraph={true}>The people</Typography>
            <Users users={users} />
          </CardContent>
        </Card>
        <Footer />
        <Hidden smDown>
          <Sidebar />
        </Hidden>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return { users: state.blog.users };
}

const styledComponent = withStyles(styles)(AboutView);

export default connect(mapStateToProps)(styledComponent);
