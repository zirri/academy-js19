/**
 * Import and apply styles
 */
require('../styles/app.css');

/**
 * Import dependencies
 */
const React = require('react');
const sortBy = require('sort-by');


const FlightInfo = require('./FlightInfo.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [
        {id:1, destination: 'San Francisco', clicks: 0, image: './img/san-francisco.jpg', price: 5000 },
        {id:2, destination: 'Los Angeles', clicks: 0, image: './img/los-angeles.jpg', price: 4000 },
        {id:3, destination: 'San Diego', clicks: 0, image: './img/san-diego.jpg', price: 6000 },
        {id:4, destination: 'New York', clicks: 0, image: './img/new-york.jpg', price: 3000 },
      ],
      sort:{
        sortKey1: 'destination',
        sortKey2: 'destination'
      }
    };
  }

  handleToggleDetails(index, showDetails) {
    if (!showDetails) return;

    let updatedFlights = this.state.flights;
    updatedFlights[index].clicks += 1;

    this.setState({
      flights: updatedFlights
    });
  };

  handleSortClick(keyIn, sortKey){
    this.setState({
      [keyIn]: sortKey,
    })
  }

  render() {
    const flights = this.state.flights.map((flight, index) => (
      <FlightInfo
        summary={flight.destination}
        image={flight.image}
        key={flight.id}
        onToggleDetails={this.handleToggleDetails.bind(this, index)}
      >
        <p>Price: {flight.price}</p>
        <p>Clicks: {flight.clicks}</p>
        <img src={flight.image}/>
      </FlightInfo>
    ));
    console.log(flights)
    return (
      <div>
        <h1>Available Flights!</h1>
        <div>
          {flights.sort(sortBy(this.state.sortKey1))}
        </div>
        <button onClick={this.handleSortClick.bind(this, 'sortKey1', 'destination')}>sort by destination</button>
        <button onClick={this.handleSortClick.bind(this, 'sortKey1', 'price')}>sort by price</button>
        <button onClick={this.handleSortClick.bind(this, 'sortKey1', 'clicks')}>sort by clicks</button>
        <hr/>
        <div>
          {flights.sort(sortBy(this.state.sortKey2))}
        </div>
        <button onClick={this.handleSortClick.bind(this, 'sortKey2', 'destination')}>sort by destination</button>
        <button onClick={this.handleSortClick.bind(this, 'sortKey2', 'price')}>sort by price</button>
        <button onClick={this.handleSortClick.bind(this, 'sortKey2', 'clicks')}>sort by clicks</button>
      </div>
    );
  }
};
 
  
module.exports = App;