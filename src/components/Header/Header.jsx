/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  appbar: {
    background: theme.palette.common.white,
    zIndex: theme.zIndex.drawer + 1
  },
  brand: {
    flexGrow: 1,
    padding: '12px 0'
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
  header: {
    marginBottom: '12px',
    textAlign: 'center'
  },
  honeypot: {
    position: 'absolute',
    zIndex: -100
  },
  label: {
    whiteSpace: 'nowrap'
  },
  navbar: {
    backgroundColor: '#607D8B',
    color: theme.palette.common.white,
    minWidth: '1px',
    position: 'relative',
    width: '100%',
    '& a': {
      color: theme.palette.common.white
    }
  },
  tabIndicator: {
    opacity: 0
  },
  tabs: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
  },
  tagline: {
    background: 'transparent',
    flexGrow: 1
  },
  textColorInherit: {
    opacity: '1 ! important',
  },
  toolbar: {
    background: theme.palette.common.white,
    flex: '1 1 auto',
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    minWidth: '1px',
    position: 'relative',
    width: '100%'
  }
});

class Header extends Component {

  state = {
    tab: 0
  };

  setTab = (event, value) => {

    this.setState({ tab: value });

  }

  render() {

    const { classes } = this.props;

    //const submitForm = fields => { return props.dispatch(blogActions.addToMailChimp(fields)); }
    //const form = <Form submitFormCallback={submitForm} form="hero" classes={{ submitButton: classes.submitButton, form: classes.form }} showCancel={false} buttonColor="secondary" submitLabel="Sign up" />;
    //const formSuccess = <Typography color="primary">Thank you for subscribing to our newsletter. Please check your email for confirmation.</Typography>;

    return (
      <React.Fragment>
        <AppBar className={classes.appbar} position="fixed" color="default">
          <Toolbar className={classes.toolbar}>
            <div className={classes.brand}>
              <Link to="/">
                <img src="/assets/images/brand/tpp.brand.md.png" alt=""/>
              </Link>
            </div>
            <Hidden smDown>
              <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
              <div id="mc_embed_signup" className={classes.newsletter}>
                <form action="https://inspecdigital.us10.list-manage.com/subscribe/post?u=2b5f5ea27c2aeb60c18ebca53&amp;id=d633c0fa8c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                  	<input type="email" defaultValue="" name="EMAIL" className={classes.email} id="mce-EMAIL" placeholder="Get the newsletter" required />
                    <div className={classes.honeypot} aria-hidden="true">
                      <input type="text" name="b_2b5f5ea27c2aeb60c18ebca53_d633c0fa8c" tabIndex="-1" value="" />
                    </div>
                    <div className="clear" onClick={this.submit}>
                      <Button color="secondary" type="submit" variant="raised" size="small">Sign up</Button>
                    </div>
                  </div>
                </form>
              </div>
            </Hidden>
          </Toolbar>
          <div className={classes.navbar}>
            <Tabs
              classes={{indicator: classes.tabIndicator}}
              className={classes.tabs}
              onChange={this.setTab}
              scrollable={true}
              scrollButtons="off"
              indicatorColor="primary"
              value={this.state.tab}
            >
              <Link to="/"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Home" /></Link>
              <Link to="/page/1"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Cocktails" /></Link>
              <Link to="/feature-page/1"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Features" /></Link>
              <Link to="/about"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="About" /></Link>
              <Link to="/contact"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Contact" /></Link>
              <Link to="/work-with-us"><Tab classes={{ textColorInherit: classes.textColorInherit, label: classes.label }} label="Work with us" /></Link>
            </Tabs>
          </div>
        </AppBar>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Header);
