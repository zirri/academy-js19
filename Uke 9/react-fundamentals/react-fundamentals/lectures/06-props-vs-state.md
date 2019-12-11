Props vs. State
===============

First of all:

- Minimize the use of state (mutable state is the root of all evil)
- Keep state as contained as possible
- Prefer passing props over keeping state local to components

You can divide state into two types (conceptually):

- Application state
- View state

Example of view state:

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
    return (
      <div className="flight-info">
        <div onClick={this.handleClick.bind(this)} className="flight-info-summary">
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.state.showDetails && this.props.children}
        </div>
      </div>
    );
  }
}
```

Example of application state:
-----------------------------

```js
/**
 * The top component takes
 * care of all the application state
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [
        { destination: 'San Francisco', image: './img/san-francisco.jpg', price: 5000 },
        { destination: 'Los Angeles', image: './img/los-angeles.jpg', price: 4000 },
        { destination: 'San Diego', image: './img/san-diego.jpg', price: 6000 },
        { destination: 'New York', image: './img/new-york.jpg', price: 3000 },
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Available Flights!</h1>
        <div>
          {this.state.flights.map((flight) => (
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

/**
 * The FlightInfo component gets
 * passed application data as props,
 * but handles a small portion of
 * local state as it is inherently
 * coupled to the state of the view
 */
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
    return (
      <div className="flight-info">
        <div onClick={this.handleClick.bind(this)} className="flight-info-summary">
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.state.showDetails && this.props.children}
        </div>
      </div>
    );
  }
}

FlightInfo.propTypes = {
  summary: React.PropTypes.string.isRequired,
  details: React.PropTypes.string.isRequired
};
```

These top level views are often called
controller views, as they orchestrate
data for the rest of underlying application.
There can often be several controller views
in an application, depending on the size.


Later we'll look at some more efficient patterns
for managing application state that does not
involve using React state in an explicit sense,
making the application even cleaner and easier
to reason about.

[**Projects**]

- open `/projects/01-react-basics`
- follow instructions in `readme.md`
