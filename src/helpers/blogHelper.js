/**
 * @file blog helper
 * @description Helper methods for blog stuff
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import config from 'config';

const blogHelper = {
  getAssetUrl,
  getEndpoint
};

export default blogHelper;

/**
 * Create an endpoint for the Ghost API
 * @param  {String} endpoint   The endpoint (such as 'posts' for posts, 'tags' for tags, etc.)
 * @param  {String} [query=''] An optional query string to append to the endpoint
 * @return {String}            The full absolute endpoint URL
 */
function getEndpoint(endpoint, query='')  {

  let ret = config.blog.host;

  ret += '/';
  ret += config.blog.api.path;
  ret += '/';
  ret += config.blog.api.endpoints[endpoint];
  ret += '?';
  ret += 'client_id=' + config.blog.api.user;
  ret += '&client_secret=' + config.blog.api.secret;
  ret += query ? '&' + query : '';

  return ret;

}

/**
 * Get an absolute path for a Ghost asset
 * @param {string} asset relative path to an asset
 * @return {string}
 */
function getAssetUrl(asset) {

  return config.blog.host + asset;

}
