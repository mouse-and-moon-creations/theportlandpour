/**
 * @file AboutBlock component
 * @description Row of about cards, used on homepage
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Gloss from '../Gloss';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    padding: '60px 12px',
  },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  },
  flexItem: {
    flex: '1 auto',
    padding: '0 24px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  }
});

const AboutBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.flexItem}>
          <Gloss label="About The Portland Pour" />
          <Typography variant="headline">The blog</Typography>
          <Typography paragraph>
            The Portland Pour is a collection of classic and modern cocktail recipes, their stories, and artistic photography celebrating the craft spirits and ingredients of Portland, Oregon.
            All of our recipes include local ingredients, distilled in or near Portland, and can be made at home, regardless of skill level.
            Visit ThePortlandPour.com and learn how to make the recipes you know and love with the craft spirits made in Oregon.
          </Typography>
        </div>
      </div>
    </div>
  );

}

export default withStyles(styles)(AboutBlock);
