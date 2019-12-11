require('../styles/app.css');

const React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      airlines: [{
        name: 'Norwegian',
        color: '#A8383B',
        flights: [
          { destination: 'San Francisco', likes: 0, image: './img/san-francisco.jpg', price: 5000 },
          { destination: 'Los Angeles', likes: 0, image: './img/los-angeles.jpg', price: 4000 },
          { destination: 'San Diego', likes: 0, image: './img/san-diego.jpg', price: 6000 },
          { destination: 'New York', likes: 0, image: './img/new-york.jpg', price: 3000 },
        ]
      }, {
        name: 'SAS',
        color: '#393276',
        flights: [
          { destination: 'Vancouver', likes: 0, image: './img/vancouver.jpg', price: 5500 },
          { destination: 'Toronto', likes: 0, image: './img/toronto.jpg', price: 4500 },
          { destination: 'Sacramento', likes: 0, image: './img/sacramento.jpg', price: 6500 },
          { destination: 'Las Vegas', likes: 0, image: './img/las-vegas.jpg', price: 3500 },
        ]
      }]
    };
  }

  handleToggleDetails(index, showDetails) {
    /**
     * If we're hiding the details
     * we don't want to increment
     * the counter, so we abort
     */
    if (!showDetails) {
      return;
    }

    /**
     * If we've clicked on a flight
     * we now want to show the details
     * and increment the 'likes' field
     * of the flight with the correct
     * 'index'
     *
     * To update the state we will
     * first "copy" the existing
     * state to a separate variable.
     * (should use Object.assign())
     *
     * Then we mutate it to the desired
     * new state
     */

    /**
     * Mutative solution
     */
    // var updatedAirlines = this.state.airlines;
    // var updatedFlights = updatedAirlines[this.state.active].flights;
    // updatedFlights[index].likes += 1;

    const activeAirlineIndex = this.state.active;

    /**
     * Non-mutative solution
     */
    const updatedAirlines = [
      ...this.state.airlines.slice(0, activeAirlineIndex),
      {
        ...this.state.airlines[activeAirlineIndex],
        flights: [
          ...this.state.airlines[activeAirlineIndex].flights.slice(0, index),
          {
            ...this.state.airlines[activeAirlineIndex].flights[index],
            likes: this.state.airlines[activeAirlineIndex].flights[index].likes + 1
          },
          ...this.state.airlines[activeAirlineIndex].flights.slice(index + 1)
        ]
      },
      ...this.state.airlines.slice(this.state.active + 1)
    ];

    /**
     * Tell React to update the
     * state to our newly created
     * state.
     *
     * This will trigger a re-render
     */
    this.setState({
      airlines: updatedAirlines
    });
  }

  handleSelectAirline(index) {
    /**
     * If we click on another airline
     * we want to tell React to set
     * this airline as the active one
     * in our state
     */
    this.setState({
      active: index
    });
  }

  render() {
    /**
     * Shorthand for the current
     * active airline
     */
    const activeAirline = this.state.airlines[this.state.active];

    /**
     * Set the header text color
     * based on which airline is
     * selected
     */
    const headerStyles = {
      color: activeAirline.color
    };

    return (
      <div>
        <h1 style={headerStyles}>
          Available Flights for {activeAirline.name}!
        </h1>

        <AirlineSelection
          handleSelectAirline={this.handleSelectAirline.bind(this)}
          airlines={this.state.airlines}
        />

        <AirlineInfo
          active={this.state.active}
          flights={activeAirline.flights}
          onToggleDetails={this.handleToggleDetails.bind(this)}
        />
      </div>
    );
  }
}

class AirlineSelection extends React.Component {
  render() {
    return (
      <div className="airline-selection">
        <p className="airline-selection-item">Select airline</p>

        {/**
         * Map through all the airlines
         * and show them as options for
         * selection, passing a callback
         * for handling this as a prop
         */}

        {this.props.airlines.map((airline, index) => {
          return (
            <p
              key={'airline-' + index}
              className="airline-selection-item"
              onClick={this.props.handleSelectAirline.bind(null, index)}
            >
              {airline.name}
            </p>
          );
        })}
      </div>
    );
  }
}

class AirlineInfo extends React.Component {
  render() {
    return (
      <div>
        {this.props.flights.map((flight, index) => (
          <FlightInfo
            key={'flight-' + index}
            active={this.props.active}
            summary={flight.destination}
            onToggleDetails={this.props.onToggleDetails.bind(null, index)}
          >
            <p>Price: {flight.price}</p>
            <p>Likes: {flight.likes}</p>
            <img src={flight.image}/>
          </FlightInfo>
        ))}
      </div>
    );
  }
}

class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showDetails: this.props.active !== nextProps.active ? false : this.state.showDetails
    });
  }

  handleClick() {
    /**
     * When we click on a flight
     * we want to toggle showing
     * the details (on/off)
     *
     * In addition we want to call
     * the callback supplied to this
     * component via props, if one was
     * passed
     */
    this.setState({
      showDetails: !this.state.showDetails
    }, () => {
      if (!this.props.onToggleDetails) return;
      this.props.onToggleDetails(this.state.showDetails);
    });
  }

  render() {
    /**
     * Set the element class dynamically
     * based on if we are showing
     * the details or not
     */
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

module.exports = App;
