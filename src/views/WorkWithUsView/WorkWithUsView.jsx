/**
 * @file Work With Us view
 * @description Work with Us page
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Footer from '../../components/Footer';
import blogHelper from '../../helpers/blogHelper';
import Helmet from 'react-helmet';

const styles = theme => ({
  root: {
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
  }
});


class WorkWithUsView extends Component {

  render() {

    const { classes, match } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>{blogHelper.getTitle('Work with us')}</title>
          <link rel="canonical" href={blogHelper.getBaseUrl() + match.url} />
          <meta property="og:type" content="object" />
          <meta property="og:description" content={blogHelper.getDescription()} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content={blogHelper.getTitle()} />
          <meta property="og:title" content="Work with us" />
          <meta property="og:url" content={blogHelper.getBaseUrl() + match.url} />
        </Helmet>
        <Card className={classes.root} elevation={0}>
          <CardContent>
            <Typography variant="headline" paragraph={true}>Work with us</Typography>
            <Typography paragraph={true}>
              You're passionate about what you do, and so are we. You put your heart and soul into your product, and now it's time to share it with the world.
              Don't worry, we got your back.
              We know, like you do, that your quality product deserves quality presentation, and we're here to help with product photography, content creation, UX consulting, and just getting the word out.
            </Typography>
            <Typography variant="title" paragraph={true}>Who we are</Typography>
            <Typography paragraph>
              The Portland Pour is a passion project by the artists of Mouse and Moon Creations, a product photography and creative studio in beautiful downtown Portland, Oregon.
              We're huge fans of the portland craft cocktail scene, and are properly honored to be part of it.
              We produce all of the content for The Portland Pour, as well as content for both print and web.
              We're specialists in beverage photography, and have had our photography, art, and writing published in various places, in one form or another, over the years.
              Check out the <a href="https://www.mouseandmooncreations.com" rel="noopener noreferrer" target="_blank">Mouse and Moon website</a> for our full portfolio, and information on who we are and what we do.
            </Typography>
            <Typography variant="title" paragraph={true}>Opportunities</Typography>
            <Typography variant="subheading" paragraph>Site sponsorship</Typography>
            <Typography paragraph>
              We're all about raising the profile of  Portland craft distilling, and welcome any support or sponsorship.
              There's a variety of ways you can help by sponsoring our work, either with a monthly donation in exchange for brand placement on The Portland Pour, or with giveaways for our subscribers, or...?
              How do we fit into your next campaign? Let's talk and see how we can help you tailor a sponsorship program that's right for your brand.
              (Please note, while we are able to work with anyone, anywhere, sponsorship opportunities are only available to companies and brands located in or near Portland, Oregon, or the Pacific Northwest.)
            </Typography>
            <Typography variant="subheading" paragraph>Product photography</Typography>
            <Typography paragraph={true}>
              Your product is judged by its pictures, and you can't afford anything less than superior quality.
              Even for the web, even for social networks where many are first greeted with your brand, you sill want to make that great impression.
              There's no doubt about it, your photography matters as much as everything you put into your product, and we insist on no less then the right picture and properly relecting your core values and culture.
              You have a story to tell, and we have the ability to tell it.
              Oh, in case you're wondering, we're quite affordable, and super fun to work with!
            </Typography>
            <Typography variant="subheading" paragraph>Product styling</Typography>
            <Typography paragraph>
              Mouse and Moon began by styling products. We started by building props, designing and building sets, all in service to storytelling.
              We still do all our own styling, and work with our clients to create, set, and style our photographs in line with the brand and image you want.
              Simply bring us your ideas, or tell us the story of your brand and let us go nuts. It&#39;s what we do best!
            </Typography>
            <Typography variant="subheading" paragraph>Artwork</Typography>
            <Typography paragraph>
              Do you have a tasting room, or a bar, and nothing on the walls?
              You've seen some of our creative work, it's what The Portland Pour is partly about, and we can bring our creative approach to your product.
              Our unique style, we admit, isn't for everyone, but if it's for you, you're in luck.
              We can take the art in the glass and hang it on the wall, and it's all done in house, from creating a beautiful work of art, to printing, to framing, we handle everything.
              Don't decorate your digs without us!
            </Typography>
            <Typography variant="subheading" paragraph>Art show</Typography>
            <Typography paragraph>
              All the photos you see on The Portland Pour are printed big and hanging on the walls of Mouse and Moon.
              Occassionally we take them out and show them in places around Portland.
              Next time you want art in your lobby, tasting room, or bar, call on us.
              We'd love to bring The Portland Pour artwork to your event.
              Maybe you plan on something for First Thursday, maybe you want to rotate your current pictures, or maybe you just want a special evening event that requires special artwork on display.
              Use what we got, or, if you're really motivated, we can create custom work for you.
            </Typography>
            <Typography variant="subheading" paragraph>Copy</Typography>
            <Typography paragraph>
              Writing is hard. It just is, however, it's what we do. Face it, you're not writers, if you were, you would be writing, not creating wonderful products with amazing stories that deserve telling well.
              Count on us for all kinds of copy for web or print, whether guest posting on your blog or website, advertising copy, regular contributions, or contact us with your ideas!
            </Typography>
            <Typography variant="title" paragraph>Talk to us</Typography>
            <Typography paragraph>
              Are you ready to take your content to the next level?
              Whether you&#39;re ready to start now, or planning for later, it's never too early to start a conversation.
              <Link to="/contact">Contact us today</Link> or learn more at <a href="https://www.mouseandmooncreations.com" rel="noopener noreferrer" target="_blank">MouseAndMoonCreations.com</a>.
            </Typography>
            <Typography paragraph={true}>
              All the photos you see on The Portland Pour were made at Mouse and Moon Creations, our studio in downtown Portland.
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

const styledComponent = withStyles(styles)(WorkWithUsView);

export default connect(mapStateToProps)(styledComponent);
