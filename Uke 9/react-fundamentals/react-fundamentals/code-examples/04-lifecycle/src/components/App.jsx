require('../styles/style.css');

const React = require('react');

const Box = require('./Box.jsx');
const TickTock = require('./TickTock.jsx');
const withWindowSize = require('../higher-order-components/with-window-size');

const ExtendedBox = withWindowSize(Box);

class App extends React.Component {
  render() {
    const styles = {
      backgroundColor: '#ddd',
      marginTop: 500
    };

    return (
      <div style={styles}>
        {/* <TickTock /> */}
        <ExtendedBox />
      </div>
    );
  }
}

module.exports = App;
