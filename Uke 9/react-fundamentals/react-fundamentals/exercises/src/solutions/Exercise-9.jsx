const React = require('react');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 */

let REPLACE_ME = () => <div/>;
let REPLACE_ME_ = (c) => () => <c/>;

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
 * 9.1 Exercise description:
 *
 * Create a higher order component factory
 * that injects the scroll position of the
 * browser as props to any component that
 * is extended (scrollX and scrollY)
 *
 */

const withScrollPosition = function (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        scrollX: window.scrollX,
        scrollY: window.scrollY
      };
    }

    handleScroll() {
      this.setState({
        scrollX: window.scrollX,
        scrollY: window.scrollY
      });
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    render() {
      return (
        <Component
          {...this.props}
          scrollX={this.state.scrollX}
          scrollY={this.state.scrollY}
        />
      );
    }
  };
};










/**
 * Create a simple component that renders
 * the following output:
 *
 * <div>
 *   <p>Scroll Position x: 100 y: 200</p>
 * </div>
 *
 * If instantiated with
 *
 * <MySimpleComponent scrollX={100} scrollY={100} />
 */
const MySimpleComponent = class extends React.Component {
  render() {
    return (
      <div>
        <p>Scroll Position x: {this.props.scrollX} y: {this.props.scrollY}</p>
      </div>
    );
  }
};

/**
 * Use the higher order component factory you
 * created to extend the simple component with
 * the scroll position of the browser
 */
const MyFirstComponentExtendedWithHigherOrderComponents = withScrollPosition(MySimpleComponent);









/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 9.2 Exercise description:
 *
 * Create a higher order component that
 * enables its children to be collapsed
 * (max height of 30px) when initially
 * rendered.
 *
 * When clicked it should allow the children
 * to expand to their original height (auto)
 *
 *
 * It should output the following HTML initially:
 *
 * <div> // Inline style - max-height: 30px | background-color: yellow | overflow: hidden
 *   <p>A lot of text</p>
 *   <p>A lot of text</p>
 *   <p>A lot of text</p>
 *   ....
 * </div>
 *
 * Then when the 'div' is clicked it should output:
 *
 * <div> // Inline style - max-height: none | background-color: yellow | overflow: hidden
 *   <p>A lot of text</p>
 *   <p>A lot of text</p>
 *   <p>A lot of text</p>
 *   ....
 * </div>
 *
 * When instanciated with
 *
 * <Expander height={30}>
 *   <p>A lot of text</p>
 *   <p>A lot of text</p>
 *   <p>A lot of text</p>
 *   ....
 * </Expander>
 */

const Expander = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  handleClick() {
    this.setState({
      isExpanded: true
    });
  }

  render() {
    const expanderStyles = {
      maxHeight: this.state.isExpanded ? 'none' : `${this.props.height}px`,
      backgroundColor: 'yellow',
      overflow: 'hidden'
    };

    return (
      <div onClick={this.handleClick.bind(this)} style={expanderStyles}>
        {this.props.children}
      </div>
    );
  }
};

/**
 * Use this as input to the next
 * part of the exercise
 */
const MyLongTextComponent = class extends React.Component {
  render() {
    return (
      <div>
        <p>A lot of text 1</p>
        <p>A lot of text 2</p>
        <p>A lot of text 3</p>
        <p>A lot of text 4</p>
        <p>A lot of text 5</p>
        <p>A lot of text 6</p>
        <p>A lot of text 7</p>
        <p>A lot of text 8</p>
        <p>A lot of text 9</p>
        <p>A lot of text 10</p>
      </div>
    );
  }
};

/**
 * Create a component that uses the Expander (with height 50)
 * as a part of its render method, wrapping the
 * MyLongTextComponent as its children
 */
const MyExpandableComponent = class extends React.Component {
  render() {
    return (
      <Expander height={50}>
        <MyLongTextComponent />
      </Expander>
    );
  }
};













/**
 * Exports
 */
module.exports = {
  withScrollPosition,
  MySimpleComponent,
  MyFirstComponentExtendedWithHigherOrderComponents,
  Expander,
  MyLongTextComponent,
  MyExpandableComponent
};
