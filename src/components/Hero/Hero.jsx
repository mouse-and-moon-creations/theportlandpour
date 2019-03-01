/**
 * @file Hero component
 * @description Hero
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Gloss from '../Gloss';

const styles = theme => ({
  hero: {
    backgroundImage: 'url(/assets/images/bg-wheat.jpg)',
    backgroundColor: theme.local.palette.background.dark,
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: 'none',
    }
  },
  heroContent: {
    margin: '0 auto',
    maxWidth: theme.local.maxWidth,
    overflow: 'hidden',
    paddingLeft: '24px',
    paddingRight: '24px',
    textAlign: 'center',
  },
  heroStripe: {
    backgroundColor: 'rgba(65, 54, 40, 0.6)',
    bottom: 0,
    height: '100%',
    paddingBottom: '100px',
    paddingTop: '230px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '40px',
      paddingTop: '180px'
    }
  },
  gutterBottom: {
    paddingBottom: theme.spacing.unit * 2
  },
  thin: {
    fontWeight: '400'
  }
});

const Hero = props => {

  const { classes } = props;

  return (
    <div className={classes.hero}>
      <div className={classes.heroStripe}>
        <div className={classes.heroContent}>
          <Hidden only="xs">
            <Gloss classes={{gutterBottom: classes.gutterBottom}} color="inherit" gutterBottom variant="h3" label="From grain to bottle, and garden to glass" />
          </Hidden>
          <Typography classes={{gutterBottom: classes.gutterBottom}} gutterBottom>
            <img src="/assets/images/drink-local.png" alt="drink local logo"/>
          </Typography>
          <Typography color="inherit">News, articles, tips, and craft cocktail recipes you can make at home</Typography>
          <Typography className={classes.thin} classes={{gutterBottom: classes.gutterBottom}} color="inherit" gutterBottom variant="h6">Proudly made in Portland, Oregon</Typography>
        </div>
      </div>
    </div>
  );

}

export default withStyles(styles)(Hero);
