const React = require('react');

class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  }

  handleClick() {
    this.props.onToggleDetails(!this.state.showDetails);

    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {
    let summaryClass = 'flight-info-summary'
    summaryClass += this.state.showDetails ? 'flight-info-summary-opened' : '';

    return (
      <div className="flight-info">
        <div onClick={this.handleClick.bind(this)} className={summaryClass}>
          {!this.state.showDetails && (
            <img
              style={{ height: 35, width: 35 }}
              src={this.props.image}
            />
          )}

          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.state.showDetails && (
            this.props.children
          )}
        </div>
      </div>
    );
  }
};

module.exports = FlightInfo;
