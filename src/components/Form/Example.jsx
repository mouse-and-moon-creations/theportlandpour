/**
 * Example.jsx
 *
 * Form example - read this to see how to create a form
 */

/**
 * Import React and FormCreator
 * Your form will extend the FormCreator class, but React must be in scope for JSX
 */
import React from 'react';
import { FormCreator } from './FormCreator';

/**
 * Import the compoonents you'll need for your form.
 * In this case, we're importing Material components from @material-ui/core
 */
import {
  Button,
  Checkbox,
  Paper,
  TextFieldHelpText,
  Typography
} from '@material-ui/core';

/**
 * Form validations.
 * PIAC uses validator (docs are at https://github.com/chriso/validator.js)
 *
 * You don't have to import the FormValidator. The parent class will handle all that
 *
 * Remember, create a validation for every element in your form, even if it needs no validation.
 * This is how the FormCreator knows what elements are in the form
 */
const VALIDATIONS = [
  {
    field: 'disclosureAccepted',
    method: 'matches',
    args: [/true/],
    validWhen: true,
    message: 'Please read and accpet the investigator assurances.'
  }
];

/**
 * The form class
 * @extends FormCreator
 */
class ExampleForm extends FormCreator {

  /**
   * Do some stuff before the form component mounts.
   *
   * You may have more or less stuff to do, but you'll always
   * want to setValidations, and pass it the validations we created before.
   */
  componentWillMount() {

    /**
     * setValidations will create a new FormValidation object with the validations you provide
     */
    this.setValidations(VALIDATIONS);

    /**
     * You may also want to set the initial state of the form
     * The FormCreator uses local state (not Redux) to collect
     * the values a user entered into the form. Once the form is submitted, those values
     * are passed to a callback function, which, in most cases, will dispatch
     * the appropriate action.
     *
     * Pass an array of form input element names. setInitialState will then check
     * the data from the API and add values, if there are any.
     *
     * Be sure to include 'validation'. This is the property the formValidator uses.
     */
    this.setInitialState([
      'disclosureAccepted',
      'validation'
    ]);

  }

  /**
   * The render method
   * This is your form. Build it as you like
   *
   * Some tips:
   * Use <section> elements to divide the form into sections, and caption them if you like
   * Keep it simple! This is a mobile app, so keep in mind that large, complex forms will be difficult to use
   * Do not hide form sections or elements. If there are form errors, this makes them hard to find.
   * If the form needs paging, consider breaking it up into separate forms
   */
  render() {

  /**
   * Create markup for your input elements only
   *
   * Use a constant, because we'll use the renderForm() method to wrap
   * the inputs in a <form> element.
   *
   * renderForm() will also add the submit buttons and stuff
   *
   * Notice class methods getLabel() and getHelpText(). They do what they say.
   * See FormCreator.js for info on what methods are available, and how they work.
   */
    const FORM = (
      <div className="task-detail-form">
        <section id="coordinator" className="form-section">
          <div className="form-section-title">
            <Typography variant="title">Study coordinator</Typography>
          </div>

          <div className="form-section-content">
            <TextField
              fullWidth
              id="coordinatorName"
              name="coordinatorName"
              disabled={this.disabled}
              label={this.getLabel('coordinatorName', 'Name')}
              onChange={this.handleChange}
              value={this.getValue('coordinatorName')}
              error={this.isValidationError('coordinatorName')}
              helpText={this.getHelpText('coordinatorName')} />
          </div>
        </section>
      </div>
    );

    /**
     * Return the rendered form.
     * Call renderForm() to add the submit button and wrap everything in a form element
     */
    return this.renderForm(FORM);

  }

}

export { PiacForm };
