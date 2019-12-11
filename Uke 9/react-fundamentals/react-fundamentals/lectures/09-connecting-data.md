Connecting Data
===============

_(show example app)_

To connect data to our React application we can leverage the ability to hook on to the different parts of the lifecycle of a component. Usually this would mean waiting for the component to mount initially, before we fetch some data that we place in the component state.

Starting point
--------------

```js
class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  render() {
    const { messages } = this.state;

    const messageElements = messages
    .map(({ id, from, text }) => {
      return (
        <li key={id}>
          {from}: {text}
        </li>
      )
    });

    return (
      <ul>
        {messageElements}
      </ul>
    )
  }
}
```

So now we have to:

1. Add a method for fetching the data and store it in state (`handlePopulateMessages`)
2. Trigger this method when the component mounts (`componentDidMount`)

Example with data
-----------------

```js
import getMessages from './services/get-messages';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.handlePopulateMessages();
  }

  async handlePopulateMessages() {
    const messages = await getMessages()
    this.setState({ messages });
  }

  render() {
    const { messages } = this.state;

    const messageElements = messages
    .map(({ id, from, text }) => {
      return (
        <li key={id}>
          {from}: {text}
        </li>
      )
    });

    return (
      <ul>
        {messageElements}
      </ul>
    )
  }
}
```

There's still a few things missing here though:

1. We have no error handling - we need to be able to reflect this to the user
2. We have no way of knowing if the messages are being fetched or not - they will just suddenly pop up

We'll solve this by using a common convention

Example with error and loading handling
---------------------------------------

```js
import getMessages from './services/get-messages';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoading: false,
      messages: [],
    };
  }

  componentDidMount() {
    this.handlePopulateMessages();
  }

  handlePopulateMessages() {
    this.setState({
      isLoading: true,
      error: null,
    });

    getMessages()
    .then((messages) => {
      this.setState({
        messages,
        isLoading: false
      });
    })
    .catch((error) => {
      this.setState({ error });
    });
  }

  render() {
    const {
      messages,
      isLoading,
      error,
    } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>
    }

    if (isLoading) {
      return <div>Loading messages...</div>
    }

    const messageElements = messages
    .map(({ id, from, text }) => {
      return (
        <li key={id}>
          {from}: {text}
        </li>
      );
    });

    return (
      <ul>
        {messageElements}
      </ul>
    );
  }
}
```

[**Project**]

- open `/projects/02-react-chat`
- follow instructions in `readme.md`
