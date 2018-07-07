import PropTypes from 'prop-types';

export const PROPTYPES = {
  buttonColor: PropTypes.string,
  classes: PropTypes.object,
  fields: PropTypes.object,
  form: PropTypes.string,
  showCancel: PropTypes.bool,
  submitFormCallback: PropTypes.func,
  submitLabel: PropTypes.string
};

export const DEFAULT_PROPS = {
  buttonColor: 'default',
  classes: {
    cancelButton: '',
    form: '',
    formActions: '',
    submitButton: ''
  },
  fields: {},
  form: '',
  showCancel: true,
  submitFormCallback: null,
  submitLabel: 'submit'
};

export const SCHEMA_KEYS = {
  help: 'help',
  required: 'required',
  title: 'title'
};
