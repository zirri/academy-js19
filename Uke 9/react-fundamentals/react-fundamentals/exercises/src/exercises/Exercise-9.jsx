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
 * Create a higher order component
 * that injects the scroll position of the
 * browser as props to any component that
 * is extended (scrollX and scrollY)
 *
 */

const withScrollPosition = REPLACE_ME_;

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
const MySimpleComponent = REPLACE_ME;

/**
 * Use the higher order component factory you
 * created to extend the simple component with
 * the scroll position of the browser
 */
const MyFirstComponentExtendedWithHigherOrderComponents = REPLACE_ME;











/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 9.2 Exercise description:
 *
 * Create a wrapper component that
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

const Expander = REPLACE_ME;

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
const MyExpandableComponent = REPLACE_ME;














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
