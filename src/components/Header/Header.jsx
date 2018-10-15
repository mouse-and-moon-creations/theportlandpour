/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Email from '@material-ui/icons/Email';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import LocalBar from '@material-ui/icons/LocalBar';
import Menu from '@material-ui/icons/Menu';
import OpenInNew from '@material-ui/icons/OpenInNew';
import RssFeed from '@material-ui/icons/RssFeed';
import Work from '@material-ui/icons/Work';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  appbar: {
    background: theme.palette.common.white,
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: '300px'
  },
  toolbar: {
    background: theme.palette.common.white,
    flex: '1 1 auto',
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    minWidth: '1px',
    position: 'relative',
    width: '100%'
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
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {
    paddingTop: '24px'
  },
  socialIcon: {
    marginLeft: '12px',
    verticalAlign: '0.75em ! important'
  },
  socialIconLink: {
    color: theme.palette.grey[500],
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.common.black
    }
  },
  socialIcons: {
    display: 'inline-block',
    paddingLeft: '12px'
  },
  tagline: {
    background: 'transparent',
    flexGrow: 1
  }
});

class Header extends Component {

  state = {
    drawer: false
  };

  toggleDrawer = () => {

    const drawer = !this.state.drawer;

    return this.setState({ drawer: drawer });

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
            <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
              <Menu />
            </IconButton>
            <div className={classes.brand}>
              <Link to="/">
                <img src="/assets/images/brand/tpp.brand.md.png" alt=""/>
              </Link>
              <Hidden smDown>
                <div className={classes.socialIcons}>
                  <a href="https://www.instagram.com/theportlandpour/" rel="noopener noreferrer" target="_blank" className={classes.socialIconLink}>
                    <FontAwesomeIcon className={classes.socialIcon} icon={faInstagram} size="lg" />
                  </a>
                  <a href="https://www.pinterest.com/theportlandpour/" rel="noopener noreferrer" target="_blank" className={classes.socialIconLink}>
                    <FontAwesomeIcon className={classes.socialIcon} icon={faPinterest} size="lg" />
                  </a>
                </div>
              </Hidden>
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
        </AppBar>
        <Drawer  open={this.state.drawer} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <List className={classes.drawer} component="nav" subheader={<ListSubheader>Menu</ListSubheader>}>
              <ListItem button component="a" href="/">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="a" href="/page/1">
                <ListItemIcon>
                  <LocalBar />
                </ListItemIcon>
                <ListItemText primary="Cocktails" />
              </ListItem>
              <ListItem button component="a" href="/about">
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component="a" href="/contact">
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem button component="a" href="/work-with-us">
                <ListItemIcon>
                  <Work />
                </ListItemIcon>
                <ListItemText primary="Work with us" />
              </ListItem>
              <Hidden mdUp>
                <Divider />
                <a href="https://www.instagram.com/theportlandpour/" rel="noopener noreferrer" target="_blank" className={classes.socialIconLink}>
                  <ListItem button>
                    <ListItemIcon>
                      <OpenInNew />
                    </ListItemIcon>
                    <ListItemText primary="Instagram" />
                  </ListItem>
                </a>
                <a href="https://www.pinterest.com/theportlandpour/" rel="noopener noreferrer" target="_blank" className={classes.socialIconLink}>
                  <ListItem button>
                    <ListItemIcon>
                      <OpenInNew />
                    </ListItemIcon>
                    <ListItemText primary="Pinterest" />
                  </ListItem>
                </a>
              </Hidden>
              <Divider />
              <ListItem button component="a" href="https://blog.theportlandpour.com/rss/">
                <ListItemIcon>
                  <RssFeed />
                </ListItemIcon>
                <ListItemText primary="RSS Feed" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Header);
