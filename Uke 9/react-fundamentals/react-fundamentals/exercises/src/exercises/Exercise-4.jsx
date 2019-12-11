const React = require('react');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 */

let REPLACE_ME = () => <div/>;

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
 * 4.1 Exercise description:
 *
 * Write a React component that outputs
 * the following HTML initially:
 *
 * <label class="CheckboxWithLabel">
 *   <input type="checkbox" checked="false" />
 *   Off
 * </label>
 *
 * But changes to the following when clicked:
 *
 * <label class="CheckboxWithLabel">
 *   <input type="checkbox" checked="true" />
 *   On
 * </label>
 *
 * when being instantiated with:
 *
 * <CheckboxWithLabel
 *   labelOn='On'
 *   labelOff='Off'
 * />
 *
 * HINT: the <input> element should have the following props/attributes:
 * - onChange
 */

class CheckboxWithLabel extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      checked: false
    }
  };

  handleClick () {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <label className="CheckboxWithLabel">
      <input onChange={this.handleClick.bind(this)} type="checkbox" checked={this.state.checked} />
        {this.state.checked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  };
};




/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 4.2 Exercise description:
 *
 * Write a React component that outputs
 * the following HTML initially:
 *
 * <div>
 *   0
 * </div>
 *
 * But changes to the following when clicked once:
 *
 * <div>
 *   1
 * </div>
 *
 * and to the following when clicked twice:
 *
 * <div>
 *   2
 * </div>
 *
 * and so on.. :)
 *
 * when being instantiated with:
 *
 * <ClickCounter />
 *
 */


class ClickCounter extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      counter: 0
    }
  };

  handleClick () {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.counter}
      </div>
    )}
;}



/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 4.3 Exercise description:
 *
 * Extend the functionality of the
 * previous click-counter by enabling
 * it to accept an initial count to start on,
 * rendering the following:
 *
 * <div>
 *   10
 * </div>
 *
 * But changes to the following when clicked once:
 *
 * <div>
 *   11
 * </div>
 *
 * and to the following when clicked twice:
 *
 * <div>
 *   12
 * </div>
 *
 * and so on..
 *
 * when being instantiated with:
 *
 * <ClickCounterWithInitialValue initialValue={10} />
 *
 */

class ClickCounterWithInitialValue extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      counter: this.props.initialValue
    }
  };

  handleClick () {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.state.counter}
      </div>
    )}
;}






/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 4.4 Exercise description:
 *
 * Write a React component that outputs
 * the following HTML initially:
 *
 * <div>
 *   <button>(+)</button>
 *   <button>(-)</button>
 *   <p>Count: 0</p>
 * </div>
 *
 * But changes to the following when the (+) button is clicked:
 *
 * <div>
 *   <button>(+)</button>
 *   <button>(-)</button>
 *   <p>Count: 1</p>
 * </div>
 *
 * or to the following when the (-) button is clicked:
 *
 * <div>
 *   <button>(+)</button>
 *   <button>(-)</button>
 *   <p>Count: -1</p>
 * </div>
 *
 * and so on..
 *
 * when being instantiated with:
 *
 * <IncrementDecrement />
 *
 */


class IncrementDecrement extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      counter: 0
    }
  };

  handleClick (modifier) {
    this.setState({
      counter: this.state.counter + modifier
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 1)}>(+)</button>
        <button onClick={this.handleClick.bind(this, -1)}>(-)</button>
        <p>Count: {this.state.counter}</p>
      </div>
    )}
;}






/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 4.5 Exercise description:
 *
 * Write a React component that outputs
 * the following HTML initially:
 *
 * <div>
 *   <button>(+)</button>
 *   <button>(-)</button>
 *   <p>Count: 0</p>
 * </div>
 *
 * But changes to the following when the (+) button is clicked:
 *
 * <div>
 *   <button>(+)</button>
 *   <button>(-)</button>
 *   <p>Count: 5</p>
 * </div>
 *
 * or to the following when the (-) button is clicked:
 *
 * <div>
 *   <button>(+)</button>
 *   <button>(-)</button>
 *   <p>Count: -5</p>
 * </div>
 *
 * and so on..
 *
 * when being instantiated with:
 *
 * <IncrementDecrementStep stepInterval={5} />
 *
 */

class IncrementDecrementStep extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      counter: 0,
      stepInterval: this.props.stepInterval
    }
  };

  handleClick (modifier) {
    this.setState({
      counter: this.state.counter + (modifier*this.state.stepInterval)
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 1)}>(+)</button>
        <button onClick={this.handleClick.bind(this, -1)}>(-)</button>
        <p>Count: {this.state.counter}</p>
      </div>
    )}
;}















/**
 * Exports
 */
module.exports = {
  CheckboxWithLabel,
  ClickCounter,
  ClickCounterWithInitialValue,
  IncrementDecrement,
  IncrementDecrementStep
};
