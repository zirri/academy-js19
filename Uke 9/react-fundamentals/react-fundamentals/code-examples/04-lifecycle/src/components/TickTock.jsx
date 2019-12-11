const React = require('react');

class TickTock extends React.Component {
  constructor(props) {
    super(props);
    this.intervals = [];
    this.state = { seconds: 0 };
  }

  _setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  componentDidMount() {
    this._setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    this.intervals.map(clearInterval);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    return (
      <p>React has been running for {this.state.seconds} seconds.</p>
    );
  }
}

module.exports = TickTock;
