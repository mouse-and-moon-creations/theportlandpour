import PropTypes from 'prop-types';

export const PROPTYPES = {
  fields: PropTypes.object,
  form: PropTypes.string,
  submitFormCallback: PropTypes.func,
};

export const DEFAULT_PROPS = {
  fields: {},
  form: '',
  submitFormCallback: null,
};

export const SCHEMA_KEYS = {
  help: 'help',
  required: 'required',
  title: 'title'
};
