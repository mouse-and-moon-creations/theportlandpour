/**
 * @file search helper
 * @description Helper methods for Google Custom Search
 * @author tm
 * @copyright Mouse and Moon Creations, LLC
 */

import config from '../config';

const getEndpoint = (options = {}) => {

  const { cx, path } = config.search.api;
  const query = Object.keys(options).map(key => key + '=' + options[key]).join('&')

  return path + '?key=' + process.env.REACT_APP_API_KEY_SEARCH + '&cx=' + cx + '&' + query;

}

const searchHelper = {
  getEndpoint
};

export default searchHelper;
