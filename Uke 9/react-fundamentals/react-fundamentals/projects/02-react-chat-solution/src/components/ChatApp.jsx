/**
 * Apply styling
 */
require('../styles/app.css');

/**
 * Dependencies
 */
const React = require('react');

/**
 * Components
 */
const MessageInput = require('./MessageInput.jsx');
const MessageList = require('./MessageList.jsx');

/**
 * Main App Component
 */
class ChatApp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">React Workshop Chat</h1>
            <div className="col-sm-8 col-sm-offset-2">

              <MessageInput />

            </div>
            <div className="col-sm-10 col-sm-offset-1">
            <div className="panel panel-default">
              <div className="panel-heading">Chat Messages</div>

                <MessageList />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = ChatApp;
