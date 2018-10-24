/**
 * @file PitchBlock component
 * @description The elevator pitch
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  pitch: {
    color: theme.palette.common.white,
    background: theme.local.palette.background.dark,
    padding: '36px 0',
    width: '100%'
  },
  badge: {
    marginRight: theme.spacing.unit
  }
});

const GettingStartedBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.pitch}>
      <Typography color="inherit" component="p" variant="headline" align="center">
        <img className={classes.badge} src="https://www.theportlandpour.com/assets/images/new.png" alt="new badge" />
        Learn how to build a home bar with local spirits
      </Typography>
      <Typography color="inherit" variant="subheading" align="center">
        <Link to="/post/getting-started-with-local-craft-spirits-and-cocktail-recipes-at-home">
          Read our "Getting Started" guide and make craft cocktails at home
        </Link>
      </Typography>
    </div>
  );

}

export default withStyles(styles)(GettingStartedBlock);
