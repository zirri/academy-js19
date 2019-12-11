require('../styles/app.css');

const React = require('react');
const sortBy = require('sort-by')

const FlightInfo = require('./FlightInfo.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [
        { id: 0, weather: 'warm', destination: 'San Francisco', clicks: 0, image: './img/san-francisco.jpg', price: 5000 },
        { id: 1, weather: 'cold', destination: 'Los Angeles', clicks: 0, image: './img/los-angeles.jpg', price: 4000 },
        { id: 2, weather: 'warm', destination: 'San Diego', clicks: 0, image: './img/san-diego.jpg', price: 6000 },
        { id: 3, weather: 'cold', destination: 'New York', clicks: 0, image: './img/new-york.jpg', price: 3000 },
      ],
      sortBy: 'destination',
      filterBy: '',
    };
  }

  handleToggleDetails(flightId, showDetails) {
    if (!showDetails) {
      return;
    }

    const index = this.state.flights.findIndex(({ id }) => flightId === id);

    // Create updated state without mutating
    const updatedFlights = [
      ...this.state.flights.slice(0, index),
      {
        ...this.state.flights[index],
        clicks: this.state.flights[index].clicks + 1
      },
      ...this.state.flights.slice(index + 1)
    ];

    this.setState({
      flights: updatedFlights
    });
  }

  handleSort(field, event) {
    event.preventDefault();

    this.setState({
      sortBy: field
    });
  }

  handleFilter(weather, event) {
    event.preventDefault();

    this.setState({
      filterBy: weather
    });
  }

  render() {
    const flights = this.state.flights
    .slice()
    .filter((flight) => this.state.filterBy ? this.state.filterBy === flight.weather : true)
    .sort(sortBy(this.state.sortBy))
    .map((flight) => (
      <FlightInfo
        key={`flight-${flight.id}`}
        summary={flight.destination}
        image={flight.image}
        onToggleDetails={this.handleToggleDetails.bind(this, flight.id)}
      >
        <p>Price: {flight.price}</p>
        <p>Clicks: {flight.clicks}</p>
        <img src={flight.image}/>
      </FlightInfo>
    ));

    return (
      <div>
        <h1>Available Flights!</h1>
        <div>
          <h3>Sorting</h3>
          <button onClick={this.handleSort.bind(this, 'destination')}>
            Sort by destination
          </button>
          <button onClick={this.handleSort.bind(this, '-price')}>
            Sort by price
          </button>
          <button onClick={this.handleSort.bind(this, '-clicks')}>
            Sort by clicks
          </button>
        </div>
        <div>
          <h3>Filtering</h3>
          <button onClick={this.handleFilter.bind(this, '')}>
            All
          </button>
          <button onClick={this.handleFilter.bind(this, 'warm')}>
            Warm
          </button>
          <button onClick={this.handleFilter.bind(this, 'cold')}>
            Cold
          </button>
        </div>
        <div>
          {flights}
        </div>
      </div>
    );
  }
};

module.exports = App;
