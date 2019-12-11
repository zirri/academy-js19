const React = require('react');
const PropTypes = require('prop-types');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 */

let REPLACE_ME = React.createClass({ render() { return <div />; } });

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
 * 6.1 Exercise description:
 *
 * Add the correct propTypes to
 * the component below:
 *
 * It should accept the following props:
 *
 * this.props.isActive should be an optional boolean
 * this.props.count should be an optional number
 *
 */

class MyFirstComponentWithPropTypes extends React.Component {
  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>

        {this.props.isActive ? (
          <span>Active</span>
        ) : (
          <span>Inactive</span>
        )}
      </div>
    );
  };
};



MyFirstComponentWithPropTypes.propTypes = {
  isActive: PropTypes.bool,
  count: PropTypes.number
};





/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 6.2 Exercise description:
 *
 * Add the correct propTypes to
 * the component below:
 *
 * It should accept the following props:
 *
 * this.props.isActive should be a required boolean
 * this.props.count should be a required number
 *
 */

class MyFirstComponentWithPropTypesRequired extends React.Component {
  render() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>

        {this.props.isActive ? (
          <span>Active</span>
        ) : (
          <span>Inactive</span>
        )}
      </div>
    );
  }
}

MyFirstComponentWithPropTypesRequired.propTypes = {
  isActive: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired
}





/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 6.3 Exercise description:
 *
 * Add the correct propTypes to
 * the component below:
 *
 * It should accept the following props:
 *
 * this.props.paragraphs should be an optional array of string
 *
 */

class MySecondComponentWithPropTypes extends React.Component {
  render() {
    return (
      <div>
        {this.props.paragraphs.map((paragraph, i) =>
          <p key={i}>{paragraph}</p>
        )}
      </div>
    );
  }
}

MySecondComponentWithPropTypes.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string)
}






/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 6.4 Exercise description:
 *
 * Add the correct propTypes to
 * the component below:
 *
 * It should accept the following props:
 *
 * this.props.lists should be an optional array of arrays of strings (yikes..)
 *
 */

class MyThirdComponentWithPropTypes extends React.Component {
  render() {
    return (
      <div>
        {this.props.lists.map((list, i) =>
          <ul key={'list' + i}>
            {list.map((item, j) =>
              <li key={'item' + j}>{item}</li>
            )}
          </ul>
        )}
      </div>
    );
  }
}


MyThirdComponentWithPropTypes.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};








/**
 * Exports
 */
module.exports = {
  MyFirstComponentWithPropTypes,
  MyFirstComponentWithPropTypesRequired,
  MySecondComponentWithPropTypes,
  MyThirdComponentWithPropTypes
};
