/**
 * @file WorkWithUsBlock component
 * @description The elevator pitch
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    background: theme.local.palette.background.dark,
    padding: '36px 0',
    width: '100%'
  }
});

const WorkWithUsBlock = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography color="inherit" component="h2" variant="headline" align="center" paragraph>Work with us</Typography>
      <Typography color="inherit" variant="subheading" align="center">
        Are you in the beverage industry? We are, and we specialize in product photography and creative services.
      </Typography>
      <Typography color="inherit" variant="subheading" align="center">
        {"We're Mouse and Moon Creations, makers of The Portland Pour."}
      </Typography>
      <Typography color="inherit" variant="subheading" align="center" paragraph>
        <Link to="/work-with-us">Learn how we can help</Link>
      </Typography>
    </div>
  );

}

export default withStyles(styles)(WorkWithUsBlock);
