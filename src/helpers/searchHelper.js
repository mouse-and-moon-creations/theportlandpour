/**
 * @file search helper
 * @description Helper methods for Google Custom Search
 * @author tm
 * @copyright Mouse and Moon Creations, LLC
 */

import config from '../config';

const getEndpoint = (q) => {

  const { cx, path } = config.search.api;

  return path + '?key=' + process.env.REACT_APP_API_KEY_SEARCH + '&cx=' + cx + '&' + q;

}

const searchHelper = {
  getEndpoint
};

export default searchHelper;
