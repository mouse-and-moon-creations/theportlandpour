/**
 * @file blog actions
 * @description Helper methods for blog stuff
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import blogConstants from 'constants/blogConstants';
import blogHelper from 'helpers/blogHelper';
import API from 'services/API';

const request = (type) => { return { type: type }; }

const success = (type, data) => { return { type: type, data: data }};

const fail = error => { return { type: blogConstants.ERROR, error: error }};

//const message = message => { return { type: blogConstants.MESSAGE, message: message }};

const clearPostDetail = () => {

  return dispatch => { dispatch(success(blogConstants.CLEAR_POST_DETAIL, null)); }

}

const getPostBySlug = (slug, opts={}) => {

  const options = Object.assign({}, { formats: 'mobiledoc', include: 'tags' }, opts);
  const queryString = Object.keys(options).map(key => key + '=' + options[key]).join('&');
  const endpoint = blogHelper.getEndpoint('postBySlug', queryString, slug);

  return dispatch => {

    dispatch(request(blogConstants.WAITING_POST));

    API.get(endpoint)
      .then(
        posts => {
          dispatch(success(blogConstants.GET_POST, posts.posts[0]));
        },
        error => {
          dispatch(fail(error));
        }
      );

  }

}

const getFeaturedPosts = (opts = {}) => {

  const options = Object.assign({}, { filter: 'featured:true', formats: 'mobiledoc', include: 'tags', limit: 6 }, opts);
  const queryString = Object.keys(options).map(key => key + '=' + options[key]).join('&');
  const endpoint = blogHelper.getEndpoint('posts', queryString);

  return dispatch => {

    dispatch(request(blogConstants.WAITING_POST));

    API.get(endpoint)
      .then(
        featuredPosts => {
          dispatch(success(blogConstants.GET_FEATURED_POSTS, featuredPosts));
        },
        error => {
          dispatch(fail(error));
        }
      );

  }

}

const getLatestPosts = (opts = {}) => {

  const options = Object.assign({}, { formats: 'mobiledoc', include: 'tags', limit: 6 }, opts);
  const queryString = Object.keys(options).map(key => key + '=' + options[key]).join('&');
  const endpoint = blogHelper.getEndpoint('posts', queryString);

  return dispatch => {

    dispatch(request(blogConstants.WAITING_POST));

    API.get(endpoint)
      .then(
        latestPosts => {
          dispatch(success(blogConstants.GET_LATEST_POSTS, latestPosts));
        },
        error => {
          dispatch(fail(error));
        }
      );

  }

}

/**
 * Get a list of posts from Ghost
 * @param  {String}  [posts='posts']         The endpoint
 * @return {Promise} { meta: {}, posts: [] } Promise object contains posts array and meta object
 */
const getPosts = (opts = {}) => {

  const options = Object.assign({}, { formats: 'mobiledoc', include: 'tags', limit: 16 }, opts);
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

const getTags = (opts={}) => {

  const options = Object.assign({}, { fields: 'name,slug', limit: 'all', order: 'name' }, opts);
  const queryString = Object.keys(options).map(key => key + '=' + options[key]).join('&');
  const endpoint = blogHelper.getEndpoint('tags', queryString);

  return dispatch => {

    dispatch(request(blogConstants.WAITING_POST));

    API.get(endpoint)
      .then(
        tags => {
          dispatch(success(blogConstants.GET_TAGS, tags.tags));
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
          users.users.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if(nameA > nameB) {
              return 1;
            }
            else if (nameA < nameB) {
              return -1;
            }
            else {
              return 0;
            }
          });
          dispatch(success(blogConstants.GET_USERS, users.users.reverse()));
        },
        error => {
          dispatch(fail(error));
        }
      );

  }

}

const setSelectedMixers = selectedMixers => {

  return dispatch => {

    dispatch(success(blogConstants.SET_SELECTED_MIXERS, selectedMixers));

  }

}

const setSelectedSpirits = selectedSpirits => {

  return dispatch => {

    dispatch(success(blogConstants.SET_SELECTED_SPIRITS, selectedSpirits));

  }

}

const addToMailChimp = (fields) => {

  const endpoint = blogHelper.getMailChimpEndpoint();

  return dispatch => {

    dispatch(request(blogConstants.WAITING_MAILCHIMP));

    API.jsonPost(endpoint, fields)
      .then(
        result => {
          if(result.result === 'success') {
            dispatch(success(blogConstants.MAILCHIMP, result));
          }
          else {
            dispatch(fail(result));
          }
        },
        error => {
          console.log(error);
          dispatch(fail(error));
        }
      );

  }

}

const clearMessaging = () => {

  return dispatch => {
    dispatch(success(blogConstants.CLEAR_MESSAGING));
  };

}

const blogActions = {
  clearMessaging,
  clearPostDetail,
  addToMailChimp,
  getFeaturedPosts,
  getLatestPosts,
  getPostBySlug,
  getPosts,
  getTags,
  getUsers,
  setSelectedMixers,
  setSelectedSpirits
};

export default blogActions;
