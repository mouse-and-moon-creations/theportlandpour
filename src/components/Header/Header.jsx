/**
 * @file Header component
 * @description Global header and appbar
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import {
  AppBar,
  Card,
  CardContent,
  Divider,
  Toolbar,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Logo,
  Navigation,
  Tagline
} from 'components';

const styles = {
  root: {
    flexGrow: 1,
    flexWrap: 'wrap'
  },
  brand: {
    flexGrow: 1
  },
  header: {
    marginBottom: '12px',
    textAlign: 'center'
  },
  navigation: {
    flexGrow: 1
  },
  tagline: {

  }
};

const Header = props => {

  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed" color="default">
        <Toolbar className={classes.root}>
          <div className={classes.brand}>
            <img src="/assets/images/brand/tpp.brand.png" alt=""/>
          </div>
          <Typography className={classes.tagline} variant="display4" align="center">Cocktail recipes with local ingredients</Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.header} elevation={0}>
        <CardContent>
          <Logo />
          <Tagline />
          <Navigation />
              <Navigation className={classes.navigation} scrollable fullWidth />
        </CardContent>
      </Card>
      <Divider light />
    </React.Fragment>
  );

}

export default withStyles(styles)(Header);
