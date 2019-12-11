require('../styles/app.css');

const React = require('react');

const ListContainer = require('./ListContainer.jsx');

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    )
  }
}

module.exports = App;
