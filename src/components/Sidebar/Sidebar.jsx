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
  Divider,
  Drawer,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blogActions } from 'actions';
import {
  Gloss,
  Form
} from 'components';

const styles = theme => ({
  drawerPaper: {
    paddingTop: '130px',
    width: '24%',
    [theme.breakpoints.down('md')]: {
      width: '30%'
    }
  },
  rootCompact: {
    width: 'auto'
  }
});

const Sidebar = props => {

  const { classes } = props;

  const submitForm = fields => { return props.dispatch(blogActions.addToMailChimp(fields)); }

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
          <Gloss label="Stay in touch" />
          <Typography variant="headline">Get the newsletter</Typography>
          <Form submitFormCallback={submitForm} form="hero" classes={{ submitButton: classes.submitButton, form: classes.form }} showCancel={false} buttonColor="default" submitLabel="Sign up" />
        </CardContent>
      </Card>
      <Divider />
    </Drawer>
  );

}

export default withStyles(styles)(Sidebar);
