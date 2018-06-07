/**
 * @file blog helper
 * @description Helper methods for blog stuff
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import blogConstants from 'constants/blogConstants';
import { blogHelper } from 'helpers';
import { API } from 'services';

const request = (type) => { return { type: type }; }

const success = (type, data) => { return { type: type, data: data }};

const fail = error => { return { type: blogConstants.ERROR, error: error }};

/**
 * Get a list of posts from Ghost
 * @param  {String}  [posts='posts']         The endpoint
 * @return {Promise} { meta: {}, posts: [] } Promise object contains posts array and meta object
 */
const getPosts = (opts = {}) => {

  const options = Object.assign({}, { formats: 'mobiledoc', include: 'tags' }, opts);
  const queryString = Object.keys(options).map(key => key + '=' + options[key]).join('&');
  const endpoint = blogHelper.getEndpoint('posts', queryString);

  return dispatch => {

    dispatch(request(blogConstants.WAITING_POSTS));

    API.get(endpoint)
      .then(
        posts => {
          dispatch(success(blogConstants.GET_POSTS, posts));
        },
        error => {
          dispatch(fail(error));
        }
      );

  }

}

const getUsers = (opts={}) => {

  const options = Object.assign({}, { limit: 'all' }, opts);
  const queryString = Object.keys(options).map(key => key + '=' + options[key]).join('&');
  const endpoint = blogHelper.getEndpoint('users', queryString);

  return dispatch => {

    dispatch(request(blogConstants.WAITING_USERS));

    API.get(endpoint)
      .then(
        users => {
          dispatch(success(blogConstants.GET_USERS, users.users));
        },
        error => {
          dispatch(fail(error));
        }
      );

  }

}

const blogActions = {
  getPosts,
  getUsers
};

export default blogActions;
