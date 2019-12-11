require('../styles/style.css');

const React = require('react');

const Box = require('./Box.jsx');

const ToolTip = require('../wrappers/ToolTip.jsx');
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
        <ToolTip text={'I am a useful tooltip!'}>
          <ExtendedBox />
        </ToolTip>
      </div>
    );
  }
}

module.exports = App;
