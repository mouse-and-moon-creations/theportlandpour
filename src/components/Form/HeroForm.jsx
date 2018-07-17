import React from 'react';
import FormCreator from './FormCreator';
import { TextField } from '@material-ui/core';
import { PROPTYPES, DEFAULT_PROPS } from './config';

const VALIDATIONS = [
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'A valid email address is required.'
  }
];

class HeroForm extends FormCreator {

  componentWillMount() {

    this.setValidations(VALIDATIONS);

    this.setInitialState([
      'email',
      'validation'
    ]);

  }

  render() {

    const form = (
      <React.Fragment>
        <TextField
          type="text"
          name="email"
          fullWidth
          required={true}
          label="Email address"
          error={this.isValidationError('email')}
          helperText={this.getHelpText('email')}
          onChange={this.handleChange} />
      </React.Fragment>
    );

    return this.renderForm(form);

  }

}

HeroForm.propTypes = PROPTYPES;
HeroForm.defaultProps = DEFAULT_PROPS;

export default HeroForm;
