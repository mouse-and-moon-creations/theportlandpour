import config from 'config';

function getEndpoint(endpoint, query='') {

  let ret = config.blog.api.host;

  ret += '/';
  ret += config.blog.api.endpoints[endpoint];
  ret += '?';
  ret += 'client_id=' + config.blog.api.user;
  ret += '&client_secret=' + config.blog.api.secret;
  ret += query ? '&' + query : '';

  return ret;

}

export default getEndpoint;
