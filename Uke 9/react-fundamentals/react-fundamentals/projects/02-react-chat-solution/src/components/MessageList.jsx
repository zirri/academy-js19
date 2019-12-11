/**
 * Dependencies
 */
const React = require('react');

/**
 * Services
 */
const getMessages = require('../services/chat').getMessages;

/**
 * Message List Component
 */
class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.intervals = [];

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this._setInterval(this.refreshMessages.bind(this), 1000);
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }

  _setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  refreshMessages() {
    getMessages().then((messages) => {
      this.setState({ messages });
    });
  }

  render() {
    const { messages = [] } = this.state;

    const messageList = messages
    .map((item, index) => {
      return (
        <li className="list-group-item" key={item._id}>
          <b>{item.name}</b>: {item.text}
        </li>
      );
    });

    return (
      <ul className="list-group">
        {messageList}
      </ul>
    );
  }
}

module.exports = MessageList;
