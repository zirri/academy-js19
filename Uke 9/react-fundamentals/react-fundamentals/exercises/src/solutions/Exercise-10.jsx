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
 * 10.1 Exercise description:
 *
 * Create a controlled form
 * that validates an input field with
 * the following rules:
 *
 * - It cannot contain '@'
 * - It must contain more than 10 characters
 *
 * For an invalid input it should
 * produce the following HTML:
 *
 * <div> // Inline styles: background-color: red
 *   <input type="text">
 * </div>
 *
 * For a valid input it should
 * produce the following HTML:
 *
 * <div> // Inline styles: background-color: green
 *   <input type="text"></input>
 * </div>
 *
 * HINT: the <input> element should have the following props/attributes:
 * - onChange,
 * - value,
 * - type
 */

const ValidatedField = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false,
      currentValue: ''
    };
  }

  handleChange(event) {
    const updatedValue = event.target.value;

    const isValid = (
      !~updatedValue.indexOf('@') &&
      updatedValue.length > 10
    );

    this.setState({
      currentValue: updatedValue,
      isValid
    });
  }

  render() {
    const validationStyles = {
      backgroundColor: this.state.isValid ? 'green' : 'red'
    };

    return (
      <div style={validationStyles}>
        <input
          type="text"
          value={this.state.currentValue}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
};













/**
 * Exports
 */
module.exports = {
  ValidatedField
};
