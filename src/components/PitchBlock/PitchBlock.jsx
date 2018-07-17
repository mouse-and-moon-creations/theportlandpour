/**
 * @file PitchBlock component
 * @description The elevator pitch
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  pitch: {
    padding: '24px 60px',
    width: '100%'
  }
};

const PitchBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.pitch}>
      <Typography variant="headline" align="center">Celebrating the distillers, makers, and craft cocktails of Portland and the Pacific Northwest.</Typography>
      <Typography variant="subheading" align="center">"We take the art in the glass and hang it on the wall"</Typography>
    </div>
  );

}

export default withStyles(styles)(PitchBlock);
