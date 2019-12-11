class ToolTip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showToolTip: false,
      xPos: 0,
      yPos: 0
    };
  }

  handleMouseMove(event) {
    this.setState({
      xPos: event.clientX,
      yPos: event.clientY + 100,
    });
  }

  handleMouseEnter() {
    this.setState({
      showToolTip: true
    });
  }

  handleMouseLeave() {
    this.setState({
      showToolTip: false
    });
  }

  render() {
    const toolTipStyles = {
      position: 'absolute',
      background: 'yellow',
      top: this.state.yPos,
      left: this.state.xPos
    };

    const toolTip = (
      <p style={toolTipStyles}>{this.props.text}</p>
    );

    return (
      <div
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}
      >
        {this.state.showToolTip ? toolTip : null}
        {this.props.children}
      </div>
    );
  }
}

export default ToolTip;
