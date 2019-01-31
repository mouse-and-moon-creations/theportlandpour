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

  return asset.match(config.blog.www) ? asset : config.blog.www + asset;

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
  ret += 'key=' + config.blog.api.key;
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

const getPostReadingTime = (content = '') => {

  const wordsPerMinute = 275;
  const wordsPerSecond = wordsPerMinute / 60;
  const imageCount = content ? (content.match(/<img(.|\n)*?>/g) || []).length + 1 : 0;
  const text = content.replace(/<(.|\n)*?>/g, ' '); // strip any HTML tags
  const pattern = /[a-zA-ZÀ-ÿ0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
  const match = text.match(pattern);
  let wordCount = 0;
  let readingTimeSeconds = 0;

  if(match) {
    for (var i = 0; i < match.length; i++) {
      if (match[i].charCodeAt(0) >= 0x4e00) {
        wordCount += match[i].length;
      }
      else {
        wordCount += 1;
      }
    }
  }

  readingTimeSeconds = wordCount / wordsPerSecond;

  for (var j = 12; j > 12 - imageCount; j--) {
      readingTimeSeconds += Math.max(j, 3);
  }

  return Math.round(readingTimeSeconds / 60);

}

const getUrl = page => {

  return '/page/' + page;

}

const getBaseUrl = (trailing = false) => {

  return config.blog.www + (trailing ? '/' : '');

}

const getPostDate = date => {

  return moment(date).format('ll');

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
    if(e.target.href.indexOf('theportlandpour.com') === -1) {
      e.preventDefault();
      window.open(e.target.href, '_blank');
    }
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
  getPostReadingTime,
  getPostUrl,
  getTitle,
  getTwitterShare,
  getUrl,
  postLinkHandler
};

export default blogHelper;
