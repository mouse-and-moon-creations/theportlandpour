/**
 * @file blog helper
 * @description Helper methods for blog stuff
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import config from 'config';
import moment from 'moment';

/**
 * Get an absolute path for a Ghost asset
 * @param {string} asset relative path to an asset
 * @return {string}
 */
const getAssetUrl = asset => {

  return config.blog.www + asset;

}

const getDescription = () => {

  return config.blog.description;

}

/**
 * Create an endpoint for the Ghost API
 * @param  {String} endpoint   The endpoint (such as 'posts' for posts, 'tags' for tags, etc.)
 * @param  {String} [query=''] An optional query string to append to the endpoint
 * @return {String}            The full absolute endpoint URL
 */
const getEndpoint = (endpoint, query='', slug='') =>  {

  let ret = config.blog.host;

  ret += '/';
  ret += config.blog.api.path;
  ret += '/';
  ret += config.blog.api.endpoints[endpoint];
  ret += slug ? '/' + slug : '/';
  ret += '?';
  ret += 'client_id=' + config.blog.api.user;
  ret += '&client_secret=' + config.blog.api.secret;
  ret += query ? '&' + query : '';

  return ret;

}

const getFeaturedPostsCaption = () => {

  return config.blog.featuredPostsCaption;

}

const getFeaturedPostsTitle = () => {

  return config.blog.featuredPostsTitle;

}

const getMailChimpEndpoint = () => {

  return config.mailchimp.joinUrl;

}

const getUrl = page => {

  return '/page/' + page;

}

const getBaseUrl = () => {

  return config.blog.www;

}

const getPostDate = date => {

  return moment(date).format('LL');

}

const getPostUrl = slug => {

  return '/post/' + slug;

}

const getTitle = (title = null) => {

  return config.blog.title + (title ? ' - ' + title : '');

}

const postLinkHandler = e => {

  if(e.target && e.target.nodeName === 'A') {
    e.preventDefault();
    window.open(e.target.href, '_blank');
  }

}

const blogHelper = {
  getAssetUrl,
  getBaseUrl,
  getDescription,
  getEndpoint,
  getFeaturedPostsCaption,
  getFeaturedPostsTitle,
  getMailChimpEndpoint,
  getPostDate,
  getPostUrl,
  getTitle,
  getUrl,
  postLinkHandler
};

export default blogHelper;
