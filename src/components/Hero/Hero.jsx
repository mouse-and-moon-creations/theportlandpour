/**
 * @file Hero component
 * @description Hero
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  hero: {
    backgroundColor: theme.local.palette.background.dark,
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    paddingTop: theme.spacing.unit * 14,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: 'none',
    }
  }
});

const Hero = props => {

  const { classes } = props;

  return (
    <div className={classes.hero}>

    </div>
  );

}

export default withStyles(styles)(Hero);
