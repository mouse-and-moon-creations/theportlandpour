/**
 * @file Tagline component
 * @description Tagline
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    background: 'transparent',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '48px'
    }
  },
  tagline: {
    fontFamily: theme.local.typography.gloss.fontFamily,
    fontSize: '1.8rem',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
  }
});

const Tagline = props => {

  const { classes } = props;

  return (
    <div className={ classes.root }>
      <Typography color="inherit" variant="display1" align="right" className={classes.tagline} {...props} classes={{}}>
        Cocktail recipes with local ingredients
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
