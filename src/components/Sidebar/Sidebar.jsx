/**
 * @file Logo component
 * @description Logo
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import {
  Card,
  CardContent,
  Drawer
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  FeaturedPosts,
  Form
} from 'components';

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
      elevation={0}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Card elevation={0}>
        <CardContent>
          Sidebar
        </CardContent>
      </Card>
    </Drawer>
  );

}

export default withStyles(styles)(Sidebar);
