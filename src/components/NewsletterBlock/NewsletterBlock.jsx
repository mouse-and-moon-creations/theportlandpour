/**
 * @file NewsletterBlock component
 * @description The elevator pitch
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    background: theme.local.palette.background.dark,
    padding: '36px 0',
    width: '100%'
  },
  email: {
    border: '1px solid #999',
    borderRadius: '3px',
    display: 'inline-block',
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px',
    height: '36px',
    margin: '0 6px 0 0',
    padding: '0 0.4rem',
    verticalAlign: 'top',
    width: '240px'
  },
  honeypot: {
    position: 'absolute',
    zIndex: -100
  },
});

const NewsletterBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography color="inherit" component="p" variant="headline" align="center">Build a better bar</Typography>
      <Typography color="inherit" variant="subheading" align="center">Join our newsletter and get tips, recomendations, and cocktail recipes for stocking your home bar with local ingredients and spirits.</Typography>
      <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
      <div id="mc_embed_signup" className={classes.newsletter}>
        <form action="https://inspecdigital.us10.list-manage.com/subscribe/post?u=2b5f5ea27c2aeb60c18ebca53&amp;id=d633c0fa8c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <input type="email" defaultValue="" name="EMAIL" className={classes.email} id="mce-EMAIL" placeholder="Get the newsletter" required />
            <div className={classes.honeypot} aria-hidden="true">
              <input type="text" name="b_2b5f5ea27c2aeb60c18ebca53_d633c0fa8c" tabIndex="-1" value="" />
            </div>
            <div className="clear">
              <Button color="secondary" type="submit" variant="raised" size="small">Sign up</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

}

export default withStyles(styles)(NewsletterBlock);
