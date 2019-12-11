Higher Order Components and Wrappers
====================================

We've seen how we can add functionality to components by using lifecycle methods, but not how you can factor out / share behavior or functionality between components.
This can be done by leveraging the concept of higher order components.
Higher order components follow the same principals as higher order functions.

__A higher order functions means:__
- a function that takes function(s) as input
- a function that returns a function as output

It's the same with higher order components!

We can have higher order components in two varieties:
1. Wrapper components
2. Higher order components

__A higher order component means:__
- a function that takes components as input
- a function that returns a component as output

__A wrapper component means:__
- a components that takes another component as a child (wraps it)

These higher order component are usually called decorators, and there's a bunch of them out there ready for you to use.

Higher order function example
-----------------------------

Higher order functions can add additional functionality
to existing functions without the inner function knowing
about it (no coupling or dependencies).

That's pretty powerful!

```js
const withDebug = function (fn) {
  return function() {
    console.log('function', fn.name, 'called with arguments', arguments);
    return fn.apply(null, arguments);
  };
}

const withReversedArguments = function (fn) {
  return function(...args) {
    return fn.apply(null, args.slice().reverse());
  };
}

const sum = function sum(a, b) {
  return a + b;
};

const sumWithDebug = withDebug(sum);

const result = sumWithDebug(1, 2)
// -> function sum called with arguments [1, 2]
//
console.log(result);
// -> 3

const reversedSumWithDebug = withReversedArguments(withDebug(sum));

const result2 = reversedSumWithDebug(1, 2);
// -> function sum called with arguments [2, 1]

console.log(result2);
// -> 3
```


Higher order component example
------------------------------

Higher order component factories can add additional functionality
to existing components without the inner function knowing
about it (no coupling or dependencies).

(Usually this means injecting props into components, or conditionally rendering them)

That's also pretty powerful!

```js
/**
 * Using a component class
 */
const withInjection = function(Component, propsToInject) {
  return class extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          {...propsToInject}
        />
      );
    }
  };
}

/**
 * Using a plain function
 */
const withInjection = function(Component, propsToInject) {
  return (props) => (
    <Component
      {...props}
      {...propsToInject}
    />
  );
}

class MyComponent extends React.Component {
  render() {
    return <div>Hello World {this.props.name}</div>
  }
}

const MyExtendedComponent = withInjection(MyComponent, { name: 'Eirik' });

ReactDOM.render(<MyComponent />, document.getElementById('app'));
// -> <div>Hello World</div>

ReactDOM.render(<MyExtendedComponent />, document.getElementById('app'));
// -> <div>Hello World Eirik</div>

ReactDOM.render(<MyExtendedComponent name='Frank' />, document.getElementById('app'));
// -> <div>Hello World Eirik</div>
```

Wrapper component example
-------------------------

Instead of creating new components that are
decorated, we can also create components that
are used to wrap around other components to
inject properties or behavior by using `this.props.children`




Example 1 (extending children with additional props):

```js
const cloneWithProps = require('react-addons-clone-with-props');

class InjectorComponent extends React.Component {
  render() {
    return cloneWithProps(this.props.children, this.props.propsToInject);
  }
}

class MyComponent extends React.Component {
  render() {
    return <div>Hello World {this.props.name}</div>
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));
// -> <div>Hello World</div>

ReactDOM.render(
  <InjectorComponent propsToInject={{ name: 'Eirik' }}>
    <MyComponent />
  <InjectorComponent/>,
  document.getElementById('app')
);
// -> <div>Hello World Eirik</div>

ReactDOM.render(
  <InjectorComponent propsToInject={{ name: 'Eirik' }}>
    <MyComponent name='Frank' />
  <InjectorComponent/>,
  document.getElementById('app')
);
// -> <div>Hello World Eirik</div>
```




Example 2 (adding functionality to a component without manipulating it):

_(show example app)_

```js
class ToolTip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showToolTip: false,
      xPos: 0,
      yPos: 0
    };
  }

  handleMouseMove(event) {
    this.setState({
      xPos: event.clientX,
      yPos: event.clientY,
    });
  }

  handleMouseEnter() {
    this.setState({
      showToolTip: true
    });
  }

  handleMouseLeave() {
    this.setState({
      showToolTip: false
    });
  }

  render() {
    const toolTipStyles = {
      position: 'absolute',
      top: this.state.yPos,
      left: this.state.xPos,
    };

    const toolTip = (
      <p style={toolTipStyles}>{this.props.text}</p>
    );

    return (
      <div
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}
      >
        {this.state.showToolTip ? toolTip : null}
        {this.props.children}
      </div>
    );
  }
}

class MyComponent extends React.Component {
  render() {
    return <div>Some important field that needs explanation</div>
  }
}

ReactDOM.render(
  <ToolTip text='This is a helpful tooltip about the field!'>
    <MyComponent />
  </ToolTip>,
  document.getElementById('app')
);
```




Using higher order components to factor out functionality / behavior
--------------------------------------------------------------------
```js
/**
 * Higher order component factory for
 * extending any component with
 * window size as props
 */
const withWindowSize = function(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.handleResize = this.handleResize.bind(this);

      this.state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      };
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
        <Component
          {...this.props}
          windowHeight={this.state.windowHeight}
          windowWidth={this.state.windowWidth}
        />
      );
    }
  };
};

/**
 * Just a simple component we want to extend
 */
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Window width: {this.props.windowWidth}</p>
        <p>Window height: {this.props.windowHeight}</p>
      </div>
    );
  }
}

/**
 * Extending our component
 */
const MyComponentWithWindowSize = withWindowSize(MyComponent);

ReactDOM.render(<MyComponent />, document.getElementById('app'));
// <div>
//   <p>Window width: </p>
//   <p>Window height: </p>
// </div>

ReactDOM.render(<MyComponentWithWindowSize />, document.getElementById('app'));
// <div>
//   <p>Window width: 500 </p>
//   <p>Window height: 300</p>
// </div>
```

Example of using multiple higher order components:

```js
/**
 * Just a simple component we want to extend
 */
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Window width: {this.props.windowWidth}</p>
        <p>Window height: {this.props.windowHeight}</p>
        <p>Scroll x: {this.props.scrollX}</p>
      </div>
    );
  }
}

/**
 * Extending our component
 */
const MyComponentWithWindowSize = withWindowSize(MyComponent);
const MyComponentWithScrollPosition = withScrollPosition(MyComponent);
const MyComponentWithScrollPositionAndWindowSize = withScrollPosition(withWindowSize(MyComponent));

ReactDOM.render(<MyComponent />, document.getElementById('app'));
// <div>
//   <p>Window width: </p>
//   <p>Window height: </p>
//   <p>Scroll x: </p>
// </div>

ReactDOM.render(<MyComponentWithWindowSize />, document.getElementById('app'));
// <div>
//   <p>Window width: 500 </p>
//   <p>Window height: 300</p>
//   <p>Scroll x: </p>
// </div>

ReactDOM.render(<MyComponentWithScrollPositionAndWindowSize />, document.getElementById('app'));
// <div>
//   <p>Window width: 500 </p>
//   <p>Window height: 300</p>
//   <p>Scroll x: 253 </p>
// </div>
```


[**Exercises**]

- See `/exercises` folder (chapter 2: 9)
