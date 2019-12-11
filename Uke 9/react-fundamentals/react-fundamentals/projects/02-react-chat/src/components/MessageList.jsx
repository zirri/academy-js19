/**
 * Dependencies
 */
const React = require('react');

/**
 * Transition group helper
 */
const CSSTransitionGroup = require('react-addons-css-transition-group');

/**
 * Provided services
 *
 * NOTE: You'll have to finish the implementation
 * of it to make it work as intended
 */
const getMessages = require('../services/chat').getMessages;

/**
 * Message List Component
 */
class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  refreshMessages() {
    console.log('getting new messages')
    getMessages()
      .then(result => {
        const messages = result.data;
        this.setState({
          messages
        })  
      })
    /*

      x1. Use the getMessages service to get the
      latest chat messages.

      x2. Use this data to update the state
      of your application

     */
  }

  componentDidMount() {
    this.refreshInterval = setInterval(this.refreshMessages, 1000)
    /*

      x3. Set up an interval to regularly
      call the refreshMessages method to update the
      chat messages state of your application.

      x4. Add the appropriate lifecycle methods
      and make sure you "clean up" properly.

      ------------------------------------------
      Hint: Take a look at the lifecycle lecture
      ------------------------------------------
     */
  }

  componentWillUnmount(){
    clearInterval(this.refreshInterval)
  }

  render() {
    const list = this.state.messages.map((item, index) => {
      return (
        /*

          x5. The chat message items also supply a name/nickname (item.name).
          Show that in the UI as well.

         */

        <li className="list-group-item" key={item._id} >
          {item.name}:{item.text}
        </li>
      );
    });

    return (
      /**

        6. (bonus) Make the chat messages transition in nicely by applying
        the provided "fade" transition with CSSTransitionGroup
        (see ./src/styles/app.css)

       */
      <ul className="list-group">
        {list}
      </ul>
    );
  }
};

module.exports = MessageList;
