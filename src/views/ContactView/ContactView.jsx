/**
 * @file Contact view
 * @description Contact page
 * @author tm
 * @copyright Mouse and Moon Creations
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blogActions from '../../actions/blogActions';
import Footer from '../../components/Footer';
import blogHelper from '../../helpers/blogHelper';
import Helmet from 'react-helmet';

const styles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: theme.local.maxWidth,
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: theme.local.headerPadding,
    '& form': {
      textAlign: 'left ! important'
    },
  },
  button: {
    marginTop: '12px'
  },
  buttonBlock: {
    textAlign: 'right'
  },
  field: {
    border: '1px solid #999',
    borderRadius: '3px',
    display: 'block',
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px',
    height: '36px',
    margin: '0 0 12px 0',
    padding: '0 0.4rem',
    verticalAlign: 'top',
    width: '100%'
  },
  honeypot: {
    position: 'absolute',
    zIndex: -100
  },
  label: {
    marginBottom: '12px'
  },
  newsletter: {
    paddingBottom: '24px'
  },
  textArea: {
    border: '1px solid #999',
    borderRadius: '3px',
    display: 'block',
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px',
    margin: '0 0 12px 0',
    padding: '0.4rem',
    verticalAlign: 'top',
    width: '100%'
  }
});


class ContactView extends Component {

  componentDidMount = () => {

    if(this.props.users.length === 0) {
      this.props.dispatch(blogActions.getUsers());
    }

  }

  render() {

    const { classes, match } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>{blogHelper.getTitle('Contact')}</title>
          <link rel="canonical" href={blogHelper.getBaseUrl() + match.url} />
          <meta property="og:type" content="object" />
          <meta property="og:description" content={blogHelper.getDescription()} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content={blogHelper.getTitle()} />
          <meta property="og:title" content="Contact" />
          <meta property="og:url" content={blogHelper.getBaseUrl() + match.url} />
        </Helmet>
        <Card className={classes.root} elevation={0}>
          <CardContent>
            <Typography variant="headline" paragraph={true}>Contact The Portland Pour</Typography>
            <Typography variant="title" paragraph={true}>Get the newsletter</Typography>
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
            <div className={classes.newsletter}>
              <form action="https://inspecdigital.us10.list-manage.com/subscribe/post?u=2b5f5ea27c2aeb60c18ebca53&amp;id=d633c0fa8c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <InputLabel shrink htmlFor="EMAIL" className={classes.label}>Email</InputLabel>
                  <input type="email" defaultValue="" name="EMAIL" className={classes.field} id="mce-EMAIL" required />
                  <div className={classes.honeypot} aria-hidden="true">
                    <input type="text" name="b_2b5f5ea27c2aeb60c18ebca53_d633c0fa8c" tabIndex="-1" value="" />
                  </div>
                  <div className={classes.buttonBlock}>
                    <Button className={classes.button} color="secondary" type="submit" variant="raised">Sign up</Button>
                  </div>
                </div>
              </form>
            </div>
            <Typography variant="title" paragraph={true}>Send us a message</Typography>
              <form action="https://formspree.io/info@theportlandpour.com" method="POST">
                <div id="mc_embed_signup_scroll">
                  <InputLabel shrink htmlFor="name" className={classes.label}>Name</InputLabel>
                  <input className={classes.field} defaultValue="" type="text" name="name" />
                  <InputLabel shrink htmlFor="_replyto" className={classes.label}>Email</InputLabel>
                  <input className={classes.field} defaultValue="" type="email" name="_replyto" />
                  <InputLabel shrink htmlFor="message" className={classes.label}>Message</InputLabel>
                  <textarea className={classes.textArea} name="message" rows="3"></textarea>
                </div>
                <div className={classes.buttonBlock}>
                  <Button className={classes.button} color="secondary" type="submit" variant="raised">Send</Button>
                </div>
            </form>
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

const styledComponent = withStyles(styles)(ContactView);

export default connect(mapStateToProps)(styledComponent);
