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
  Paper,
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
  sidebar: {
    position: 'absolute',
    right: '24px',
    top: theme.local.headerPadding,
    width: '24%',
    [theme.breakpoints.down('md')]: {
      width: '26%'
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
    <Paper className={classes.sidebar} elevation={0}>
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
                <TextField fullWidth type="text" name="name" label="Name" />
                <TextField fullWidth type="email" name="_replyto" label="Email" />
                <TextField fullWidth multiline rows={3} name="message" label="Message" />
              </CardContent>
              <CardActions>
                <Button type="submit" variant="raised">Send</Button>
              </CardActions>
            </Card>
          </form>
        </CardContent>
      </Card>
    </Paper>
  );

}

export default withStyles(styles)(Sidebar);
