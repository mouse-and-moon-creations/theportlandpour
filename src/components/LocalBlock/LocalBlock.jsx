/**
 * @file Logo component
 * @description Logo
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import LocalBar from '@material-ui/icons/LocalBar';
import Mood from '@material-ui/icons/Mood';

const styles = theme => ({
  root: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    padding: '60px 36px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap'
    }
  },
  flexItem: {
    flexGrow: 1,
    padding: '0 12px'
  },
  icon: {
    color: theme.palette.grey[400],
    fontSize: '72px'
  }
});

const LocalBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.flexItem}>
        <LocalGroceryStore className={classes.icon} />
        <Typography variant="headline">Local</Typography>
        <Typography>All our cocktails are made with local spirits, and as many locally made or grown ingredients as we can find</Typography>
      </div>
      <div className={classes.flexItem}>
        <LocalBar className={classes.icon} />
        <Typography variant="headline">Tasty</Typography>
        <Typography>Use cocktail recipes we've tried, tested, and perfected, selecting just the right local ingredients for the best mixed drink at home</Typography>
      </div>
      <div className={classes.flexItem}>
        <Mood className={classes.icon} />
        <Typography variant="headline">Fun</Typography>
        <Typography>Mixing cocktails at home is fun! Our recipes are fun, can be made by anyone, regardless of skill level and support local products</Typography>
      </div>
    </div>
  );

}

export default withStyles(styles)(LocalBlock);
