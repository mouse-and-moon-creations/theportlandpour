/**
 * @file Contact view
 * @description Contact form
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blogActions } from 'actions';
import { Form } from 'components';

const styles = {
  firstCaption: {
    marginTop: '60px'
  }
}

class ContactView extends Component {

  submitForm = fields => {

    return this.props.dispatch(blogActions.addToMailChimp(fields));

  }

  render() {

    const { classes } = this.props;

    const form = <Form submitFormCallback={this.submitForm} form="contact" />;
    const formSuccess = <Typography>Thank you for subscribing to our newsletter. Please check your email for confirmation.</Typography>;

    return (
      <React.Fragment>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="headline" paragraph={true}>Contact The Portland Pour</Typography>
            <Typography variant="title" paragraph>Subscribe</Typography>
            <Typography variant="subheading" paragraph>Join our mailing list</Typography>
            {this.props.mailchimp ? formSuccess : form}
            <Typography variant="caption" paragraph className={classes.firstCaption}>
              Get occassional updates about The Portland Pour, and local spirits.
            </Typography>
            <Typography variant="caption" paragraph>
              Don't worry, we NEVER share anything with anyone.
              Signing up for our mailing list is safe and secure.
            </Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    );

  }

}

const mapStateToProps = state => {

  return { mailchimp: state.blog.mailchimp }

}

const styledComponent = withStyles(styles)(ContactView);

export default connect(mapStateToProps)(styledComponent);
