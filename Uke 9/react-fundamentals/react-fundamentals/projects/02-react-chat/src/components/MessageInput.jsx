/**
 * Dependencies
 */
const React = require('react');

/**
 * Provided services
 *
 * NOTE: You'll have to finish the implementation
 * of it to make it work as intended
 */
const submitMessage = require('../services/chat').submitMessage;

/**
 * Message Input Component
 */
class MessageInput extends React.Component {

  handleKeyDown(event) {
    if(event.keyCode != 13){
      return;
    }
    
    const messageField = this.refs.messageInput;
    const nicknameField = this.refs.nickname;
    
    const message = {
      text: messageField.value,
      name: nicknameField.value
    }

    messageField.value = '';
    nicknameField.value = '';


    console.log(message)
    //submitMessage(message);

  }

  render() {
    return (
      <div className="form-group">

        <input
          ref="messageInput"
          type="text"
          placeholder="Compose Message"
          className="form-control"
          onKeyDown={this.handleKeyDown.bind(this)}
        />
        <input
          ref="nickname"
          type="text"
          placeholder="Your Nickname"
          className="form-control"
          onKeyDown={this.handleKeyDown.bind(this)}
        />
      </div>
    );
  }
}

module.exports = MessageInput;
