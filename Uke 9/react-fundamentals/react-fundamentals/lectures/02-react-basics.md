React Basics
============

_(show example app)_

Rendering a Component (Tree)
----------------------------

```js
ReactDOM.render(<div>Hello!</div>, document.getElementById('app'));
```

Creating a Functional Stateless Component
-----------------------------------------

- Define your component as a function that returns some UI description
- Render a component tree using `ReactDOM.render`

```js
function FlightInfo() {
  return (
    <div>
      <div>Summary</div>
      <div>Details</div>
    </div>
  );
}

ReactDOM.render(<FlightInfo/>, document.getElementById('app'));
```

Creating a Component Class
--------------------------

- Extend your component class with `React.Component` and attach the properties that are applicable
- The only required property/method is `render`, which has to return a description of the output of the component
- Render a component tree using `ReactDOM.render`

```js
class FlightInfo extends React.Component {
  render() {
    return (
      <div>
        <div>Summary</div>
        <div>Details</div>
      </div>
    );
  }
}

ReactDOM.render(<FlightInfo/>, document.getElementById('app'));
```

CSS Classes
-----------

- Just like in HTML, except `class` is a reserved keyword in JavaScript
- Instead we use `className`, which is the JavaScript equivalent (DOM API)

```js
class FlightInfo extends React.Component {
  render() {
    return (
      <div className="flight-info">
        <div className="flight-info-summary">Summary</div>
        <div className="flight-info-details">Details</div>
      </div>
    );
  }
}

ReactDOM.render(<FlightInfo/>, document.getElementById('app'));
```

Inline Styles
-------------

- We can also apply inline styles in React
- Inline styles are just plain JavaScript objects with properties
- Style properties follow the JavaScript DOM API naming
- That means `backgroundColor` vs. `background-color` in CSS

```js
class FlightInfo extends React.Component {
  render() {
    const myStyles = {
      backgroundColor: 'red',
      margin: '50px'
    };

    return (
      <div style={myStyles} className="flight-info">
        <div className="flight-info-summary">Summary</div>
        <div className="flight-info-details">Details</div>
      </div>
    );
  }
}

ReactDOM.render(<FlightInfo/>, document.getElementById('app'));
```

Using Props
-----------

- `props` argument (functional stateless component)
- `this.props` (class syntax)
- Props are passed to components just like HTML attributes

```js
// Using class syntax
class FlightInfo extends React.Component {
  render() {
    return (
      <div className="flight-info">
        <div className="flight-info-summary">
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.props.details}
        </div>
      </div>
    );
  }
}

// or using functional stateless component
function FlightInfo(props) {
  return (
    <div className="flight-info">
      <div className="flight-info-summary">
        {props.summary}
      </div>
      <div className="flight-info-details">
        {props.details}
      </div>
    </div>
  );
}

ReactDOM.render((
  <FlightInfo
    summary='A flight'
    details='An insane flight going from....'
  />
), document.getElementById('app'));
```

- We can also pass any valid JavaScript expression as a prop
- Expression need to be wrapped in curly braces

```js
const getSummary = function() {
  return 'A flight';
};

class FlightInfo extends React.Component {
  render() {
    return (
      <div className="flight-info">
        <div className="flight-info-summary">
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.props.details}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo
    summary={getSummary()}
    details={'An insane' + ' flight going' + ' from....'}
  />,
  document.getElementById('app')
);
```

- When we pass children to React components, they are also just a prop (array)

```js
class FlightInfo extends React.Component {
  render() {
    return (
      <div className="flight-info">
        <div className="flight-info-summary">
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {/* children are just a prop! */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo summary="A flight">
    <div>Some info about the a flight</div>
    <div>Even more info..</div>
  </FlightInfo>,
  document.getElementById('app')
);
```

__Special cases:__

- `children`
- `className`
- `key`


Adding State
------------

- `this.state`
- Use the `constructor` to set an initial state of your component
- Remember to call `super(props)` if using the constructor

```js
class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
    };
  }

  render() {
    let summaryClass = "flight-info-summary";
    summaryClass += this.state.showDetails ? " flight-info-summary-opened" : "";

    return (
      <div className="flight-info">
        <div className={summaryClass}>
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.state.showDetails && this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo summary="A flight">
    <div>Some info about a flight</div>
  </FlightInfo>,
  document.getElementById('app')
);
```

Updating State and Acting on Events
-----------------------------------

- To update the state of your component use the instance method `this.setState`
- Remember to bind any instance method to the instance itself (`this`)
- Calling `this.setState` will trigger a re-render of your component
- __NEVER__ mutate `this.state` to signal state change
- In general think of `this.props` and `this.state` as immutable (even if they are not)

```js
class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
    };
  }

  handleClick () {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {
    let summaryClass = "flight-info-summary";
    summaryClass += this.state.showDetails ? " flight-info-summary-opened" : "";

    return (
      <div className="flight-info">
        <div onClick={this.handleClick.bind(this)} className={summaryClass}>
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.state.showDetails && this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo summary="A flight">
    <div>Some info about a flight</div>
  </FlightInfo>,
  document.getElementById('app')
);
```

- You can alternatively pass a function as the first argument to `this.setState` to assign a new state based on the previous one (more testable)

```js
class FlightInfo extends React.Component {
  constructor(props) {
    //...
  }

  handleClick () {
    this.setState((state) => {
      return {
        showDetails: !state.showDetails
      };
    });
  }

  render() {
    //...
  }
}
```

- `this.setState` has an optional callback for signaling when it has completed (because of batched execution)

```js
class FlightInfo extends React.Component {
  constructor(props) {
    //...
  }

  handleClick () {
    const doThisWhenDone = () => {
      console.log('I am done updating the state!')
    };

    this.setState({
      showDetails: !this.state.showDetails
    }, doThisWhenDone);
  }

  render() {
    //...
  }
}
```

Rendering a Data-driven List
----------------------------

- Favor a functional approach with `map`, `filter` and friends over `for` and `while`
- Several advantages of doing This
  - Less mutating of variables
  - Less intermediate variables
  - Better readability
  - Composability (chainable operations like `.map().filter().map()` and so on)

```js
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [
        { destination: 'San Francisco',  image: './img/san-francisco.jpg', price: 5000 },
        { destination: 'Los Angeles', image: './img/los-angeles.jpg', price: 4000 },
        { destination: 'San Diego', image: './img/san-diego.jpg', price: 6000 },
        { destination: 'New York', image: './img/new-york.jpg', price: 3000 },
      ]
    };
  }

  render() {
    const { flights } = this.state;

    return (
      <div>
        <h1>Available Flights!</h1>
        <div>
          {flights.map((flight) => (
            <FlightInfo summary={flight.destination}>
              <p>Price: {flight.price}</p>
              <img src={flight.image}/>
            </FlightInfo>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
```

- For better readability you can also separate those parts out

```js
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [
        { destination: 'San Francisco',  image: './img/san-francisco.jpg', price: 5000 },
        { destination: 'Los Angeles', image: './img/los-angeles.jpg', price: 4000 },
        { destination: 'San Diego', image: './img/san-diego.jpg', price: 6000 },
        { destination: 'New York', image: './img/new-york.jpg', price: 3000 },
      ]
    };
  }

  render() {
    const flights = this.state.flights
    .map((flight) => {
      return (
        <FlightInfo summary={flight.destination}>
          <p>Price: {flight.price}</p>
          <img src={flight.image}/>
        </FlightInfo>
      );
    })

    return (
      <div>
        <h1>Available Flights!</h1>
        <div>
          {flights}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
```

Component Communication
-----------------------

- Communicating upwards in the component hierarchy can be done with callbacks
- Callbacks are passed down as any other prop (it's just JavaScript all the way)

```js
class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  }

  handleClick() {
    const { onToggleDetails } = this.props;
    const { showDetails } = this.state;

    this.setState({
      showDetails: !showDetails
    }, () => {
      if (onToggleDetails) {
        onToggleDetails(showDetails);
      }
    });
  }

  render() {
    let summaryClass = "flight-info-summary";
    summaryClass += this.state.showDetails ? " flight-info-summary-opened" : "";

    return (
      <div className="flight-info">
        <div onClick={this.handleClick.bind(this)} className={summaryClass}>
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.state.showDetails && this.props.children}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [
        { destination: 'San Francisco', clicks: 0, image: '/places/san-francisco.jpg', price: 5000 },
        { destination: 'Los Angeles', clicks: 0, image: '/places/los-angeles.jpg', price: 4000 },
        { destination: 'San Diego', clicks: 0, image: '/places/san-diego.jpg', price: 6000 },
        { destination: 'New York', clicks: 0, image: '/places/new-york.jpg', price: 3000 },
      ]
    };
  }

  handleDetailsToggle(index, showDetails) {
    if (!showDetails) {
      return;
    }

    const updatedFlights = [
      ...this.state.flights.slice(0, index),
      {
        ...this.state.flights[index],
        clicks: this.state.flights[index].clicks + 1
      },
      ...this.state.flights.slice(index + 1),
    ];

    // Alternative 2 (mutates):
    // const updatedFlights = this.state.flights;
    // updatedFlights[index].clicks++;

    this.setState({
      flights: updatedFlights
    });
  }

  render() {
    return (
      <div>
        <h1>Available Flights!</h1>
        <div>
          {this.state.flights.map((flight, index) => (
            <FlightInfo
              summary={flight.destination}
              onToggleDetails={this.handleDetailsToggle.bind(this, index)}
            >
              <p>Price: {flight.price}</p>
              <p>Clicks: {flight.clicks}</p>
              <img src={flight.image}/>
            </FlightInfo>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
```

Composition
-----------

- See slides

React Developer Tools
---------------------

- Chrome extension can be [downloaded here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

[**Exercises**]

- See `/exercises` folder (chapter 1: 1-4)
