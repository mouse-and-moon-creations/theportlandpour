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
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Footer from '../../components/Footer';
import blogHelper from '../../helpers/blogHelper';
import Helmet from 'react-helmet';

const styles = theme => ({
  root: {
    background: 'transparent',
    margin: '0 auto',
    maxWidth: '620px',
    padding: '20px 10px',
    paddingTop: theme.local.headerPadding,
    '& a': {
      textDecoration: 'underline'
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
        <div className={classes.root}>
          <Typography paragraph variant="h4">Your customers await</Typography>
          <Typography variant="subtitle1">The power of</Typography>
          <Typography variant="h5" gutterBottom>Collaboration</Typography>
          <Typography paragraph={true}>
            You're passionate about what you do, and so are we. You put your heart and soul into your product, and now it's time to share it with the world.
            Don't worry, we got your back.
          </Typography>
          <Typography paragraph>
            The Portland Pour is the only website dedicated to local craft distilling and craft cocktails in Oregon and the Pacific Northwest.
            Our passion for what we do is evident in our work, not just in our art, but in our writing, recipes, and reporting.
            We love Portland, and we love the beverages created here.
            Join us in our mission to bring the amazing products, places, and industry news of craft beverages in Portland to consumers, not just in Oregon, but around the world.
            Your support is what makes our project possible, and we're available to help build your brand in several ways.
          </Typography>
          <Typography variant="h5" paragraph>Opportunities</Typography>
          <Typography variant="h6" paragraph>Site sponsorship</Typography>
          <Typography paragraph>
            We're all about raising the profile of  Portland craft distilling, and your brand.
            Sponsoring The Portland Pour means you not only value your local community and growing your brand, but you support the artists and writers working to keep the project entirely local, and free.
            We don't accept advertising, and rely on the support of our fellow Portland companies to keep our content fresh, on point, and active.
            We encourage you to consider a sponsorship package and collaborate with us.
          </Typography>
          <Typography paragraph>
            What do you get from sponsoring The Portland Pour?
            A media outlet and website with an ever growing audience, access to our content for use on your site, or in your next campaign, a brand profile on The Portland Pour, guaranteed recipes and product placement, guest posts, and access to our workshops and creative services.
            That sounds like a winner to us, and we have several packages available that we can tailor fit to your specific needs and situation.
            <Link to="/contact">Contact us today</Link>, and get started now!
          </Typography>
          <Typography variant="h6" paragraph>Workshops and events</Typography>
          <Typography paragraph>
            Your tasting room or bar is your platform, and we're specialists at organizing workshops for your customers, or events for your brand or new product launch.
            Our workshops cover a variety of topics, from how to get started with local spirits, how to make cocktails at home, cocktail history, industry profiles, and any ideas you might have.
            We're also able to support your event with our creative services, or help you organize the next get together, and we're always willing to create custom images and recipes for the art show you know you want to have, but haven't yet!
          </Typography>
          <Typography variant="h6" paragraph>Creative services</Typography>
          <Typography paragraph>
            Your product is judged by its presentation, and you can't afford anything less than superior quality.
            Even for the web, even for social networks where many are first greeted with your brand, you sill want to make that great impression.
            There's no doubt about it, your photography matters as much as everything you put into your product, and we insist on no less than properly reflecting your core values and culture.
            You have a story to tell, and we have the ability to tell it.
          </Typography>
          <Typography paragraph>
            Our services include, among other things
            <ul>
              <li>Product photography</li>
              <li>Recipe creation and styling</li>
              <li>Copy writing</li>
              <li>Web design, development, and maintenance</li>
              <li>Technical and brand consulting</li>
              <li>Collateral design and printing</li>
            </ul>
          </Typography>
          <Typography variant="h5" paragraph>Talk to us</Typography>
          <Typography paragraph>
            Are you ready to grow your audience?
            Are you ready for the next level?
            Whether you&#39;re ready to start now, or planning for later, it's never too early to start a conversation.
            <Link to="/contact">Contact us today</Link> and get started now!
          </Typography>
        </div>
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
