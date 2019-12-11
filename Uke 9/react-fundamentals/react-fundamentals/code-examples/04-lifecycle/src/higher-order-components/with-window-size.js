const React = require('react');

const withWindowSize = function(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      };
    }

    handleResize(e) {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize.bind(this));
    }

    render() {
      return (
        <Component
          {...this.props}
          windowHeight={this.state.windowHeight}
          windowWidth={this.state.windowWidth}
        />
      );
    }
  }
};

module.exports = withWindowSize;
