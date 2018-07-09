/**
 * @file Logo component
 * @description Logo
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Drawer,
  TextField,
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
        <Card elevation={0}>
          <CardContent>
            <Gloss label="Let's chat" />
            <Typography variant="headline">Contact us</Typography>
            <form action="https://formspree.io/info@theportlandpour.com" method="POST">
              <Card elevation={0}>
                <CardContent>
                  <TextField type="text" name="name" label="Name" />
                  <TextField type="email" name="_replyto" label="Email" />
                  <TextField multiline rows={3} name="message" label="Message" />
                </CardContent>
                <CardActions>
                  <Button type="submit" variant="raised">Send</Button>
                </CardActions>
              </Card>
            </form>
          </CardContent>
        </Card>
    </Drawer>
  );

}

export default withStyles(styles)(Sidebar);
