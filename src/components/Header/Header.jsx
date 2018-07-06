/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import {
  Navigation,
  Tagline
} from 'components';

const styles = theme => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    background: theme.palette.common.white,
    flexGrow: 1
  },
  brand: {
    padding: '12px 0'
  },
  header: {
    marginBottom: '12px',
    textAlign: 'center'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {
    paddingTop: '38px'
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

    return (
      <React.Fragment>
        <AppBar className={classes.appbar} position="fixed" color="default">
          <Toolbar className={classes.toolbar}>
            <Hidden lgUp>
              <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                <Menu />
              </IconButton>
            </Hidden>
            <div className={classes.brand}>
              <Link to="/">
                <Hidden mdDown>
                  <img src="/assets/images/brand/tpp.brand.lg.png" alt=""/>
                </Hidden>
                <Hidden lgUp>
                  <img src="/assets/images/brand/tpp.brand.md.png" alt=""/>
                </Hidden>
              </Link>
            </div>
            <Hidden mdDown>
              <Navigation className={classes.navigation} />
            </Hidden>
            <Hidden smDown>
              <div className={classes.tagline}>
                <Tagline />
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawer} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <List component="nav">
              <ListItem button component="a" href="/page/1">
                <ListItemText primary="Cocktails" />
              </ListItem>
              <ListItem button component="a" href="/build-your-bar">
                <ListItemText primary="Build your bar" />
              </ListItem>
              <ListItem button component="a" href="/about">
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component="a" href="/contact">
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    );

  }

}

export default withStyles(styles)(Header);
