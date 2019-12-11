const React = require('react');
const PropTypes = require('prop-types');

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
 * 7.1 Exercise description:
 *
 * Add appropriate default props
 * to the component so that:
 *
 * <MyFirstComponentWithDefaultProps />
 *
 * renders
 *
 * <div>
 *   <h3>Count: <span>0</span><h3>
 *   <span>Active</span>
 * </div>
 */

class MyFirstComponentWithDefaultProps extends React.Component {
  render() {
    return (
      <div>
        <h3>Count: <span>{this.props.count}</span></h3>

        {this.props.isActive ? (
          <span>Active</span>
        ) : (
          <span>Inactive</span>
        )}
      </div>
    );
  }
}

MyFirstComponentWithDefaultProps.propTypes = {
  isActive: PropTypes.bool,
  count: PropTypes.number,
};


MyFirstComponentWithDefaultProps.defaultProps = {
  isActive: true,
  count:0
}




/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 7.2 Exercise description:
 *
 * Add appropriate default props
 * to the component so that:
 *
 * <MySecondComponentWithPropTypes />
 *
 * renders
 *
 * <div></div>
 *
 */

class MySecondComponentWithDefaultProps extends React.Component {
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

MySecondComponentWithDefaultProps.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string)
};


MySecondComponentWithDefaultProps.defaultProps = {
  paragraphs: []
}




/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 7.3 Exercise description:
 *
 * Add appropriate default props
 * to the component so that:
 *
 * <MyThirdComponentWithPropTypes />
 *
 * renders
 *
 * <div></div>
 */

class MyThirdComponentWithDefaultProps extends React.Component {
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

MyThirdComponentWithDefaultProps.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string
    )
  )
};

MyThirdComponentWithDefaultProps.defaultProps = {
  lists: []
}











/**
 * Exports
 */
module.exports = {
  MyFirstComponentWithDefaultProps,
  MySecondComponentWithDefaultProps,
  MyThirdComponentWithDefaultProps
};
