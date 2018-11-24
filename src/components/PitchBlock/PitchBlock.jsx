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
    padding: '36px 0 60px 0',
    width: '100%'
  }
});

const PitchBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.pitch}>
      <Typography color="inherit" component="p" variant="headline" align="center">Craft cocktails using the ingredients of Portland and the Pacific Northwest.</Typography>
      <Typography color="inherit" variant="subheading" align="center">"Articles, news, and recipes you can make at home"</Typography>
    </div>
  );

}

export default withStyles(styles)(PitchBlock);
