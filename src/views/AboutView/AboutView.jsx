/**
 * @file About view
 * @description About page
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blogActions from 'actions/blogActions';
import Users from 'components/Users';
import blogHelper from 'helpers/blogHelper';
import { Helmet } from 'react-helmet'

const styles = theme => ({
  about: {
    background: 'transparent',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    paddingTop: theme.local.headerPadding,
    [theme.breakpoints.only('md')]: {
      marginRight: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
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

    const { classes, match, users } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>{blogHelper.getTitle('About')}</title>
          <link rel="canonical" href={blogHelper.getBaseUrl() + match.url} />
        </Helmet>
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
            <div className={classes.cards}>
              <Users users={users} />
            </div>
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
