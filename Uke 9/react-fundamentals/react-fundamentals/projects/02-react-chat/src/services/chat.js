/**
 * Dependencies
 */
const request = require('axios');

/**
 * Environment / config
 */
const API_URL = 'https://react-workshop-chat.herokuapp.com/chat';

/**
 * Service for getting messages
 */
function getMessages() {
  return request.get(API_URL);
  
  /*
    x1. Use axios (from npm - see npm/github for DOCS),
    jQuery.ajax or some other request library to fetch chat messages from the API_URL

    The API returns a response in the form:

    [
      { text: 'NanaNANanaNaNaNa', name: 'Batman' },
      { text: 'Anybody home?', name: 'Charlie' },
      ...
    ]

    This service should return a promise of the data unchanged

   */
}

/**
 * Service for submitting a message
 */
function submitMessage(message) {
  return axios.post(API_URL, message)
  /*

    2. Use axios (from npm - see npm/github for DOCS),
    jQuery.ajax or some other request library to submit a
    chat message by doing a POST-request to the API_URL.

    The API accepts (body) data of the form:

    {
      text: 'My new chat message!'
      name: 'Anonymous'
    }

   */
}

/**
 * Export
 */
module.exports = {
  getMessages: getMessages,
  submitMessage: submitMessage,
};
