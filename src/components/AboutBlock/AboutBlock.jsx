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
    padding: '12px',
  },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  },
  flexItem: {
    flex: '1 auto',
    padding: '24px 24px 0 24px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  }
});

const AboutBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Gloss label="About The Portland Pour" />
      <div className={classes.flex}>
        <div className={classes.flexItem}>
          <Typography component="h2" variant="headline">The cocktails</Typography>
          <Typography paragraph>
            The Portland Pour cocktails are a collection of classic and modern cocktail recipes, their stories, and artistic photography celebrating the craft spirits and ingredients of Portland, Oregon.
            All of our recipes include local ingredients, distilled in or near Portland, and can be made at home, regardless of skill level.
            Learn how to make the cocktail recipes you know and love with the local ingredients and craft spirits made in Oregon.
          </Typography>
        </div>
        <div className={classes.flexItem}>
          <Typography component="h2" variant="headline">The features</Typography>
          <Typography paragraph>
            The Portland Pour features offer a look at both craft cocktails and craft distilling, and various articles on how to make cocktails at home.
            All of our features examine news of interest, offer instruction and advice, and reporting on the people and spirits of the craft cocktail community in Portland and the Pacific Northwest.
            Learn how to make the cocktail recipes you know and love with with helpful tips and techiniques, and learn about the local ingredients you can use to make them.
          </Typography>
        </div>
      </div>
    </div>
  );

}

export default withStyles(styles)(AboutBlock);
