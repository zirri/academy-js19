require('../styles/app.css');

const React = require('react');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [
        { destination: 'San Francisco', open: false, clicks: 0, image: './img/san-francisco.jpg', price: 5000 },
        { destination: 'Los Angeles', open: false, clicks: 0, image: './img/los-angeles.jpg', price: 4000 },
        { destination: 'San Diego', open: false, clicks: 0, image: './img/san-diego.jpg', price: 6000 },
        { destination: 'New York', open: false, clicks: 0, image: './img/new-york.jpg', price: 3000 },
      ]
    };
  }

  handleToggleDetails(index, showDetails) {
    const updatedFlights = [
      ...this.state.flights.slice(0, index),
      {
        ...this.state.flights[index],
        clicks: showDetails ? this.state.flights[index].clicks + 1 : this.state.flights[index].clicks,
        open: !this.state.flights[index].open
      },
      ...this.state.flights.slice(index + 1),
    ];

    this.setState({
      flights: updatedFlights
    });
  }

  render() {
    const flights = this.state.flights
    .map((flight, index) => (
      <FlightInfo
        summary={flight.destination}
        showDetails={flight.open}
        onToggleDetails={this.handleToggleDetails.bind(this, index)}
      >
        <p>Price: {flight.price}</p>
        <p>Clicks: {flight.clicks}</p>
        <img src={flight.image}/>
      </FlightInfo>
    ));

    const hasAtLeastOneFlightOpen = this.state.flights.some(flight => flight.open);

    const headerStyles = {
      color: hasAtLeastOneFlightOpen ? 'green' : 'black'
    };

    return (
      <div>
        <h1 style={headerStyles}>Available Flights!</h1>
        <div>
          {flights}
        </div>
      </div>
    );
  }
}

class FlightInfo extends React.Component {
  handleClick() {
    this.props.onToggleDetails(!this.props.showDetails);
  }

  render() {
    let summaryClass = 'flight-info-summary';
    summaryClass += this.props.showDetails ? ' flight-info-summary-opened' : '';

    return (
      <div className="flight-info">
        <div onClick={this.handleClick.bind(this)} className={summaryClass}>
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.props.showDetails && this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = App;
