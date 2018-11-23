/**
 * @file blog helper
 * @description Helper methods for blog stuff
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import config from '../config';
import moment from 'moment';

/**
 * Get an absolute path for a Ghost asset
 * @param {string} asset relative path to an asset
 * @return {string}
 */
const getAssetUrl = asset => {

  return config.blog.www + asset;

}

const getCatchHook = () => {

  return config.zapier.catchHook;

}

const getDescription = () => {

  return config.blog.description + ' ' + config.blog.descriptionSuffix;

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

const getPostDescription = post => {

  let ret = 'Cocktail recipe - ';

  ret += post.title;
  ret += '. Get the ' + post.title + ' cocktail recipe and story ';
  ret += config.blog.descriptionSuffix;

  return ret;

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

  return (config.blog.title + ' - ' + (title ? title : config.blog.longTitle));

}

const getFacebookShare = url => {

  return config.facebook.share + url;

}

const getGooglePlusShare = url => {

  return config.googlePlus.share + url;

}

const getHandle = site => {

  return config[site].handle;

}

const getHashtags = site => {

  return config[site].hashtags;

}

const getTwitterShare = (url = '', tweet = '', hashtags = '') => {

  const query = '?url=' + url + '&text=' + tweet + '&hashtags=' + hashtags;

  return config.twitter.share + query;

}

const getPinterestShare = (url, media, description = '') => {

  const query = '?url=' + url + '&media=' + media + '&description=' + description;

  return config.pinterest.share + query;

}

const getEmailShare = (url, subject, body) => {

  return 'mailto:%20?subject=' + subject + '&body=' + body + ' ' + url;

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
  getCatchHook,
  getDescription,
  getEmailShare,
  getEndpoint,
  getFacebookShare,
  getFeaturedPostsCaption,
  getFeaturedPostsTitle,
  getGooglePlusShare,
  getHandle,
  getHashtags,
  getMailChimpEndpoint,
  getPinterestShare,
  getPostDate,
  getPostDescription,
  getPostUrl,
  getTitle,
  getTwitterShare,
  getUrl,
  postLinkHandler
};

export default blogHelper;
