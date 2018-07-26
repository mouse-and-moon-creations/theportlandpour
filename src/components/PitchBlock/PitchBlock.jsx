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
  pitch: {
    color: theme.palette.common.white,
    background: theme.local.palette.background.dark,
    padding: '60px',
    width: '100%'
  }
});

const PitchBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.pitch}>
      <Typography color="inherit" variant="headline" align="center">Celebrating the distillers, makers, and craft cocktails of Portland and the Pacific Northwest.</Typography>
      <Typography color="inherit" variant="subheading" align="center">"We take the art in the glass and hang it on the wall"</Typography>
    </div>
  );

}

export default withStyles(styles)(PitchBlock);
