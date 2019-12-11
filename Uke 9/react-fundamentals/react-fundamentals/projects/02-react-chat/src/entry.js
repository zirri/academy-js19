/**
 * Dependencies
 */
const ReactDOM = require('react-dom');

/**
 * Root React App Component
 */
const ChatApp = require('./components/ChatApp.jsx');

/**
 * Render the application to the DOM
 */
ReactDOM.render(<ChatApp />, document.getElementById('app'));
