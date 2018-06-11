/**
 * Alert.jsx
 *
 * Use this component to show an alert.
 * Alerts can be a notice, a caution, or a warning
 *
 * notice - a simple message to alert the user to something, such as success messages, refresh messages, etc.
 * caution - a message to alert the user that their actions may cause unexpected results, such as navigating away from a dirty form
 * warning - a message to alert the user that irreperable damage will occur, such as deleting an object from the db, or that something failed
 * success - alias of notice (will add a checkmark icon instead of an info icon)
 * error - alias of warning
 *
 * You can provide only message and show=true to make a notice show.
 * If there is an action associated with the notice, such as refreshing the view, provide a callback function.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Snackbar
} from '@material-ui/core';


const PROPTYPES = {
  message: PropTypes.string,
  type: PropTypes.string,
  show: PropTypes.bool,
  actionText: PropTypes.string,
  actionCallback: PropTypes.func
};

const DEFAULT_PROPS = {
  message: '',
  type: 'notice',
  show: false,
  actionText: 'Dismiss',
  actionCallback: null
};

const alertTypes = {
  NOTICE: 'notice',
  CAUTION: 'caution',
  WARNING: 'warning',
  SUCCESS: 'success',
  ERROR: 'error'
}

class Alert extends Component {

  actionHandler = () => {
    return this.props.actionCallback ? this.props.actionCallback() : null;

  }

  getAlertTypeClass() {

    switch (this.props.type) {
      case alertTypes.NOTICE:
        return alertTypes.NOTICE;
      case alertTypes.CAUTION:
        return alertTypes.CAUTION;
      case alertTypes.WARNING:
        return alertTypes.WARNING;
      case alertTypes.SUCCESS:
        return alertTypes.NOTICE;
      case alertTypes.ERROR:
        return alertTypes.WARNING;
      default:
        return alertTypes.NOTICE;
    }

  }

  getAlertTypeIcon() {

    switch (this.props.type) {
      case alertTypes.NOTICE:
        return "fa fa-info alert-icon";
      case alertTypes.CAUTION:
        return "fa fa-exclamation alert-icon";
      case alertTypes.WARNING:
        return "fa fa-exclamation-triangle alert-icon";
      case alertTypes.SUCCESS:
        return "fa fa-check alert-icon";
      case alertTypes.ERROR:
        return "fa fa-exclamation-triangle alert-icon";
      default:
        return "fa fa-info alert-icon";
    }

  }

  render() {

    const ACTION = <Button color="secondary" size="small">{this.props.actionText}</Button>
    const CLASSNAME = this.getAlertTypeClass();
    const ICON = this.getAlertTypeIcon();
    const MESSAGE = (<span className="alert-message"><i className={ICON} aria-hidden="true"></i>{this.props.message}</span>);
    const ALERT = (<Snackbar className={CLASSNAME}
                      open={this.props.show}
                      message={MESSAGE}
                      autoHideDuration={6000}
                      action={ACTION}
                      onClose={this.actionHandler} />);

    return (
      <div className="alert">
        {this.props.show ? ALERT : null}
      </div>
    )
  }

}

Alert.propTypes = PROPTYPES;
Alert.defaultProps = DEFAULT_PROPS;

export default Alert;
