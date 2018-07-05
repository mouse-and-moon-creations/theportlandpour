/**
 * @file Logo component
 * @description Logo
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import { Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  drawerPaper: {
    paddingTop: '130px',
    width: '24%',
    [theme.breakpoints.down('md')]: {
      width: '30%'
    }
  }
});

const Sidebar = props => {

  const { classes } = props;

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      drawer
    </Drawer>
  );

}

export default withStyles(styles)(Sidebar);
