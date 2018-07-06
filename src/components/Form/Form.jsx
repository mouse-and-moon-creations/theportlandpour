/**
 * PIAC form component - generate forms for specific action item types
 */

import React, { Component } from 'react';
import { HeroForm } from './HeroForm';
import { ContactForm } from './ContactForm';
import { PROPTYPES, DEFAULT_PROPS } from './config';

class Form extends Component {

  getForm = () => {

    switch (this.props.form.toLowerCase()) {
      case 'contact':
        return (<ContactForm {...this.props} />);
      case 'hero':
        return (<HeroForm {...this.props} />);
      default:
        return (<ContactForm {...this.props} />);
    }

  }

  render() {

    return this.getForm();

  }

}

Form.propTypes = PROPTYPES;
Form.defaultProps = DEFAULT_PROPS;

export default Form;
