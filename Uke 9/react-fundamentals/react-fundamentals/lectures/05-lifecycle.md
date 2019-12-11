Lifecycle
=========

Lifecycle methods are Reacts way of
letting you hook onto the different
stages of the component lifecycle.

This is handy for things like:

- Initialization
- Controlling component behavior
- Integrating with other libraries
- Teardown and cleanup


- See `/code-examples/lifecycle` and `/code-examples/lifecycle/assets`


Example 1 - setInterval
-----------------------

_(show example app)_

```js
class TickTock extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    return (
      <p>React has been running for {this.state.seconds} seconds.</p>
    );
  }
}

React.render(
  <TickTock />,
  document.getElementById('example')
);
```

Example 2 - setInterval
-----------------------

```js
class TickTock extends React.Component {
  constructor(props) {
    super(props);
    this.intervals = [];
    this.state = { seconds: 0 };
  }

  _setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  componentDidMount() {
    this._setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    return (
      <p>React has been running for {this.state.seconds} seconds.</p>
    );
  }
}

React.render(
  <TickTock />,
  document.getElementById('example')
);
```

Example 3 - Window size
-----------------------

_(show example app)_

```js
class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };

    this.handleResize = this.handleResize.bind(this)
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        <p>Window width: {this.state.windowWidth}</p>
        <p>Window height: {this.state.windowHeight}</p>
      </div>
    );
  }
}

React.render(
  <Box />,
  document.getElementById('example')
);
```

Integration with other libraries
--------------------------------

Very often when transitioning to a new framework or library you have a lot of old stuff you want to reuse if you can.
By leveraging the lifecycle methods of React you can reuse any of your old plugins from jQuery and other "widget"-based components


Using jQuery inside React
-------------------------

- `refs`
- You can manually handle DOM updates by hooking on to an actual DOM-node
- You also have to handle events manually for you jQuery component
- __NOTE:__ React will not know about these updates!
- As a result - you have to clean up after yourself

```js
/**
 * jQuery is available in the scope as $
 */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myContainer = React.createRef();
  }

  componentDidMount() {
    const node = this.myContainer.current;
    const $node = $(node);
    /**
     * manipulate the node
     * (initialize and hook onto events)
     */
  }

  componentDidUpdate(prevProps) {
    const node = this.refs.myContainer;
    const $node = $(node);
    /**
     * manipulate the node
     * (react to update from the outside)
     */
  }

  componentWillUnmount() {
    /**
     * clean up if necessary
     * (remove events and stuff)
     */
  }

  render() {
    return <div ref={this.myContainer}></div>;
  }
}
```


[**Exercises**]

- See `/exercises` folder (chapter 2: 8)
