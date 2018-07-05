/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import {
  AppBar,
  Card,
  CardContent,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import {
  Logo,
  Navigation,
  Tagline
} from 'components';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  brand: {
    flexGrow: 1,
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
  },
  tagline: {
    [theme.breakpoints.up('lg')]: {
//      paddingTop: '36px'
    }
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

    console.log(this.state);

    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="fixed" color="default">
          <Toolbar className={classes.root}>
            <Hidden lgUp>
              <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                <Menu />
              </IconButton>
            </Hidden>
            <div className={classes.brand}>
              <Hidden mdDown>
                <img src="/assets/images/brand/tpp.brand.lg.png" alt=""/>
              </Hidden>
              <Hidden lgUp>
                <img src="/assets/images/brand/tpp.brand.md.png" alt=""/>
              </Hidden>
            </div>
            <Hidden mdDown>
              <Navigation className={classes.navigation} />
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
                <ListItemText primary="Home" />
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
