/**
 * Dependencies
 */
const React = require('react');
const ReactDOM = require('react-dom');

/**
 * Services
 */
const submitMessage = require('../services/chat').submitMessage;

/**
 * Message Input Component
 */
class MessageInput extends React.Component {
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      submitMessage({
        name: this.refs.nameInput.value,
        text: this.refs.messageInput.value,
      })
      .then(() => {
        this.refs.messageInput.value = '';
      });
    }
  }

  render() {
    return (
      <div className="form-group">
        <input
          ref="nameInput"
          type="text"
          placeholder="Nickname"
          className="form-control"
        />

        <input
          ref="messageInput"
          type="text"
          placeholder="Compose Message"
          className="form-control"
          onKeyDown={this.handleKeyDown.bind(this)}
        />
      </div>
    );
  }
}

module.exports = MessageInput;
