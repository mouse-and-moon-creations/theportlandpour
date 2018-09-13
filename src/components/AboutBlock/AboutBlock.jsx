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
    maxWidth: '50%',
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
          <Typography variant="headline">The pictures</Typography>
          <Typography paragraph>
            All of the cocktail photos on The Portland Pour are by Creative Director, Tony M, published writer, artist, and photographer with over 20 years experience in advertising, publishing, technology, design and development.
          </Typography>
          <Typography paragraph>
            These photos began as an artistic series, designed for print, but have become more interesting when associated with their stories and recipes.
            We genuinely hope they may, in some small way, inspire you to try some of what Portland has to offer, and make more cocktails at home.
          </Typography>
        </div>
        <div className={classes.flexItem}>
          <Gloss label="About The Portland Pour" />
          <Typography variant="headline">The recipes</Typography>
          <Typography color="inherit" paragraph>
            Have you ever wanted to try one of the local brands, then thought, what do I do with it?
            You're not alone.
            We spent alot of time collecting recipes, and finding ways to make them with as many local products as possible.
            Our recipes come from practice, we try different local spirits and adjust proportions until we find what we like, then we photograph the results in our downtown Portland studio and post the recipes for you to try.
            If you're curious about what to do with local spirits, try some of our suggestions.
          </Typography>
        </div>
      </div>
    </div>
  );

}

export default withStyles(styles)(AboutBlock);
