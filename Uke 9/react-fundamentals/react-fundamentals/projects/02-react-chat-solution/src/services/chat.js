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
  return request.get(API_URL)
  .then(({ data }) => data);
}

/**
 * Service for submitting a message
 */
function submitMessage({ name, text }) {
  return request.post(API_URL, { name, text });
}

/**
 * Export
 */
module.exports = {
  getMessages: getMessages,
  submitMessage: submitMessage,
};
