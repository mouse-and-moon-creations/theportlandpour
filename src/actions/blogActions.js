/**
 * @file blog helper
 * @description Helper methods for blog stuff
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import blogConstants from 'constants/blogConstants';
import { blogHelper } from 'helpers';
import { API } from 'services';

const request = () => { return { type: blogConstants.WAITING }; }

const success = (posts) => { return { type: blogConstants.GET_POSTS, posts: posts }};

const fail = error => { return { type: blogConstants.ERROR, error: error }};

/**
 * Get a list of posts from Ghost
 * @param  {String}  [posts='posts']         The endpoint
 * @return {Promise} { meta: {}, posts: [] } Promise object contains posts array and meta object
 */
const getPosts = (opts = {}) => {

  const options = Object.assign({}, { formats: 'mobiledoc' }, opts);
  const queryString = Object.keys(options).map(key => key + '=' + options[key]).join('&');
  const endpoint = blogHelper.getEndpoint('posts', queryString);

  return dispatch => {

    dispatch(request());

    API.get(endpoint)
      .then(
        posts => {
          dispatch(success(posts));
        },
        error => {
          dispatch(fail(error));
        }
      );

  }

}

const blogActions = {
  getPosts
};

export default blogActions;
