/**
 * @file API service
 * @description Service methods for REST APIs
 * @author tm
 * @copyright Inspec Digital, LLC
 */

const API = {
  get
}

export default API;

/**
 * GET from a REST API
 * @param  {String} endpoint     The endpoint from which to GET
 * @param  {Object} [options={}] Header or content options
 * @return {Promise}             Promise contains parsed JSON response
 */
function get(endpoint, options = {}) {

  return fetch(endpoint, options).then(response => {
      return response.ok ? response.json() : Promise.reject(response.statusText);
    }).then(data => {
      return data;
    });

}
