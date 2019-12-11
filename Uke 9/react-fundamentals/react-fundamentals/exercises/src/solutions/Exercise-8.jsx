const React = require('react');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 */

let REPLACE_ME =() => <div/>;

/**
 * HINT
 * If you get stuck, you can go into '/tests/utils.js' and set 'global.hints = true'.
 * That way the error message will be more specific.
 * However, give it a try before you do this,
 * as in most cases this will give you the answer flat out.
 */





/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 8.1 Exercise description:
 *
 * Implement the following behavior to the component below:
 * - Listens to the 'scroll' event on mount
 * - Keeps the window scroll position in state (remember initial state)
 * - Removes all listeners when unmounting
 *
 * Should output the following HTML (relative to scroll position):
 *
 * <div>Scroll Position x: 0 y: 512</div>
 *
 * When instantiated with:
 *
 * <MyFirstComponentUsingLifecycleMethods />
 */

const MyFirstComponentUsingLifecycleMethods = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollX: window.scrollX,
      scrollY: window.scrollY
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    this.setState({
      scrollX: window.scrollX,
      scrollY: window.scrollY
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return <div>Scroll Position x: {this.state.scrollX} y: {this.state.scrollY}</div>;
  }
};














/**
 * Exports
 */
module.exports = {
  MyFirstComponentUsingLifecycleMethods
};
