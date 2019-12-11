const React = require('react');

class Box extends React.Component {
  render() {
    return (
      <div>
        <p>Window width: {this.props.windowWidth}</p>
        <p>Window height: {this.props.windowHeight}</p>
      </div>
    );
  }
}

module.exports = Box;
