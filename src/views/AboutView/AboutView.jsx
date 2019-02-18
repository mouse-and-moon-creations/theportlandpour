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
  },
  code: {
    background: theme.palette.grey[200],
    borderRadius: theme.spacing.unit / 2,
    fontFamily: 'monospace',
    fontWeight: '700',
    padding: theme.spacing.unit * 3
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
            <Typography variant="h4" paragraph={true}>About The Portland Pour</Typography>
            <Typography variant="h5" paragraph>The blog</Typography>
            <Typography paragraph>
              The Portland Pour is a collection of classic and modern cocktail recipes, their stories, and artistic photography celebrating the craft spirits and ingredients of Portland, Oregon.
              All of our recipes include local ingredients, distilled in or near Portland, and can be made at home, regardless of skill level.
            </Typography>
            <Typography variant="h5" paragraph>The people</Typography>
            <Typography align="center" paragraph>
              <img src="/assets/images/tm.jpg" alt="Tony M"/>
            </Typography>
            <Typography align="center" variant="subtitle1">Tony M</Typography>
            <Typography align="center" variant="caption" paragraph>Founder, creative director, principal photographer</Typography>
            <Typography paragraph>
              Ever the storyteller, Tony M studied art and writing at Boise State University, and began his career as a freelance and creative writer.
              After spending time writing for various publications, and landing at a Portland based magazine, he moved to visual art and began a number of creative projects, including painting, drawing, and photography.
              But he never stopped being a storyteller, and today spends his time telling stories in creative conceptual images, creating product photography for local clients, and writing about booze.
            </Typography>
            <Typography align="center" variant="subtitle1">Jack Wang</Typography>
            <Typography align="center" variant="caption" paragraph>Staff writer</Typography>
            <Typography align="center" variant="subtitle1">Joy Church</Typography>
            <Typography align="center" variant="caption" paragraph>Staff writer</Typography>
            <Typography align="center" variant="subtitle1">Chelsea SN</Typography>
            <Typography align="center" variant="caption" paragraph>Bartender, product stylist, contributing writer, assistant photographer</Typography>
            <Typography align="center" variant="subtitle1">S.P. Burke</Typography>
            <Typography align="center" variant="caption" paragraph>Artist, contributing writer, assistant photographer</Typography>
            <Typography align="center" variant="subtitle1">Allegra Herdklotz-Yasutake</Typography>
            <Typography align="center" variant="caption" paragraph>Contributing writer, researcher</Typography>
            <Typography variant="h5" paragraph>The content</Typography>
            <Typography paragraph>
              All content on The Portland Pour is created by the artists and writers of Mouse and Moon Creations, except where otherwise noted.
            </Typography>
            <Typography variant="h6" paragraph>Licenses</Typography>
            <Typography paragraph>
              If you'd like to use any of our pictures, they are free for personal use, but you must link to our website.
              We distribute our work licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
              If you would like to use any of our pictures to promote your brand, just ask!
              We're happy to discuss commercial licensing, and we're super easy to work with!
            </Typography>
            <Typography variant="subtitle1" paragraph>
              What link should I use?
            </Typography>
            <Typography paragraph>
              The URL to our homepage:
              <div className={classes.code}>https://www.theportlandpour.com/</div>
            </Typography>
            <Typography paragraph>
              The HTML you can copy and paste on your website:
              <div className={classes.code}>{'<a href="https://www.theportlandpour.com/">The Portland Pour</a>'}</div>
            </Typography>
            <Typography variant="subtitle1" paragraph>
              What should I put the link?
            </Typography>
            <Typography paragraph>
              If you are sharing our work on your website, you must link from somewhere in the same domain.
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Can I share your pictures on a social network?
            </Typography>
            <Typography paragraph>
              Yes! You may share our pictures on social networks, such as Instagram, Facebook, Twitter, etc., but you still have to link to The Portland Pour from your website.
              A link to The Portland Pour in your social network post does not count.
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Can I use your pictures in print?
            </Typography>
            <Typography paragraph>
              In theory, yes. Please contact us to discuss how, where, and when you'd like to use our work in print to make sure your publication doesn't violate our license.
            </Typography>
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
