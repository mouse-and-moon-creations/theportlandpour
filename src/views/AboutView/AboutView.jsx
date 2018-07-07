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
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blogActions } from 'actions';

const styles = theme => ({
  about: {
    paddingTop: theme.local.headerPadding
  }
});

class AboutView extends Component {

  componentDidMount = () => {

    if(this.props.users.length === 0) {
      this.props.dispatch(blogActions.getUsers());
    }

  }

  render() {

    const { classes } = this.props;

    let { users } = this.props

    users.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if(nameA > nameB) {
        return 1;
      }
      else if (nameA < nameB) {
        return -1;
      }
      else {
        return 0;
      }
    });

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
            {users.map(user => {
              return (<Typography paragraph={true} key={user.id}>{user.name}</Typography>);
            })}
          </CardContent>
        </Card>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return { users: state.blog.users };
}

const styledComponent = withStyles(styles)(AboutView);

export default connect(mapStateToProps)(styledComponent);
