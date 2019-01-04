/**
 * @file PitchBlock component
 * @description The elevator pitch
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  patreonButton: {
    paddingTop: theme.spacing.unit * 4,
  },
  pitch: {
    color: theme.palette.common.white,
    background: theme.local.palette.background.dark,
    padding: '36px 0',
    width: '100%'
  }
});

const PatreonBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.pitch}>
      <Typography color="inherit" variant="headline" align="center">
        Support The Portland Pour on Patreon
      </Typography>
      <Typography color="inherit" align="center">
        Your donations are what keep us making fabulous pictures and cocktail recipes you can make at home!
      </Typography>
      <Typography align="center" className={classes.patreonButton}>
        <a href="https://www.patreon.com/bePatron?u=780597" rel="noopener noreferrer" target="_blank">
          <img src="/assets/images/become_a_patron_button.png" alt="become a patron"/>
        </a>
      </Typography>
    </div>
  );

}

export default withStyles(styles)(PatreonBlock);
