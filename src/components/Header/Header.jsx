/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withRouter from 'react-router-dom/withRouter';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import Navigation from '../Navigation';
import SearchBar from '../SearchBar';

const propTypes = {
  searchCallback: PropTypes.func
};

const defaultProps = {
  searchCallback: null
}

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
  tagline: {
    background: 'transparent',
    flexGrow: 1
  },
  toolbar: {
    background: theme.palette.common.white,
    flex: '1 1 auto',
    height: theme.spacing.unit * 11,
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    minWidth: '1px',
    position: 'relative',
    width: '100%'
  }
});

class Header extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar className={classes.appbar} position="fixed" color="default">
          <Toolbar className={classes.toolbar}>
            <div className={classes.brand}>
              <Link to="/">
                <img src="/assets/images/brand/tpp.brand.md.png" alt=""/>
              </Link>
            </div>
            <SearchBar />
            <Hidden mdDown>
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
          <Navigation />
        </AppBar>
      </React.Fragment>
    );

  }

}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

const styledComponent = withStyles(styles)(Header);

export default withRouter(styledComponent);
