/**
 * @file Tagline component
 * @description Tagline
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import {
  Hidden,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
      padding: '0 48px 48px 48px'
    }
  },
  tagline: {
    fontFamily: theme.local.typography.gloss.fontFamily,
    fontSize: '2.2rem',
    whiteSpace: 'nowrap',
    [theme.breakpoints.only('md')]: {
      fontSize: '1.8rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem'
    }
  }
});

const Tagline = props => {

  const { classes } = props;

  return (
    <div className={ classes.root }>
      <Typography variant="display1" align="right" className={classes.tagline} {...props} classes={{}}>
        Fine art &sdot; Cocktail recipes &sdot; Local spirits
      </Typography>
      <Hidden smDown>
        <Typography variant="subheading" align="right"  {...props} classes={{}}>
          Proudly made in Portland, Oregon
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="subheading"  {...props} classes={{}}>
          Proudly made in Portland, Oregon
        </Typography>
      </Hidden>
    </div>
  );

}

export default withStyles(styles)(Tagline);
