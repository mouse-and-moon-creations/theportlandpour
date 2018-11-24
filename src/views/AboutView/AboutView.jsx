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
import Footer from '../../components/Footer';
import blogHelper from '../../helpers/blogHelper';
import Helmet from 'react-helmet';

const styles = theme => ({
  about: {
    background: 'transparent',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    paddingTop: theme.local.headerPadding,
    width: '50%',
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

  render() {

    const { classes, match } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>{blogHelper.getTitle('About')}</title>
          <link rel="canonical" href={blogHelper.getBaseUrl() + match.url} />
          <meta property="og:type" content="object" />
          <meta property="og:description" content={blogHelper.getDescription()} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content={blogHelper.getTitle()} />
          <meta property="og:title" content="About" />
          <meta property="og:url" content={blogHelper.getBaseUrl() + match.url} />
        </Helmet>
        <Card className={classes.about} elevation={0}>
          <CardContent>
            <Typography variant="headline" paragraph={true}>About The Portland Pour</Typography>
            <Typography variant="headline">The blog</Typography>
            <Typography paragraph>
              The Portland Pour is a collection of classic and modern cocktail recipes, their stories, and artistic photography celebrating the craft spirits and ingredients of Portland, Oregon.
              All of our recipes include local ingredients, distilled in or near Portland, and can be made at home, regardless of skill level.
              Visit ThePortlandPour.com and learn how to make the recipes you know and love with the craft spirits made in Oregon.
            </Typography>
            <Typography variant="headline" paragraph>The people</Typography>
            <Typography align="center" paragraph>
              <img src="/assets/images/tm.jpg" alt="Tony M"/>
            </Typography>
            <Typography align="center" variant="subheading">Tony M</Typography>
            <Typography align="center" variant="caption" paragraph>Founder, creative director, principal photographer, principal writer, editor</Typography>
            <Typography paragraph>
              Ever the storyteller, Tony M studied art and writing at Boise State University, and began his career as a freelance and creative writer.
              After spending time writing for various publications, and landing at a Portland based magazine, he moved to visual art and began a number of creative projects, including painting, drawing, and photography.
              But he never stopped being a storyteller, and today spends his time telling stories in creative conceptual images, creating product photography for local clients, and writing about booze.
            </Typography>
            <Typography align="center" variant="subheading">Jack Wang</Typography>
            <Typography align="center" variant="caption" paragraph>Staff writer</Typography>
            <Typography align="center" variant="subheading">Chelsea SN</Typography>
            <Typography align="center" variant="caption" paragraph>Bartender, product stylist, contributing writer, assistant photographer</Typography>
            <Typography align="center" variant="subheading">S.P. Burke</Typography>
            <Typography align="center" variant="caption" paragraph>Artist, contributing writer, assistant photographer</Typography>
            <Typography align="center" variant="subheading">Allegra Herdklotz-Yasutake</Typography>
            <Typography align="center" variant="caption" paragraph>Contributing writer, researcher</Typography>
          </CardContent>
        </Card>
        <Footer />
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return { users: state.blog.users };
}

const styledComponent = withStyles(styles)(AboutView);

export default connect(mapStateToProps)(styledComponent);
