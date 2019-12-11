/* eslint-disable */

const React = require('react');

const deepEqual = require('deep-equal');

const {
  findDOMNode
} = require('react-dom');

const {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = require('react-addons-test-utils');

describe('Exercise 8-1 - My first component using lifecycle methods', () => {
  it('Should have correct initial state', () => {
    const {
      MyFirstComponentUsingLifecycleMethods
    } = require(`../../src/${__version__}/Exercise-8.jsx`);

    const component = renderIntoDocument(
      <MyFirstComponentUsingLifecycleMethods />
    );

    // Force the scroll position
    window.scrollX = 0;
    window.scrollY = 0;

    const div = findRenderedDOMComponentWithTag(
      component,
      'div'
    );

    assert.equal(
      findDOMNode(div).textContent,
      'Scroll Position x: 0 y: 0',
      'Did not have correct initial state'
    );
  });

  it('Should update state correctly when scrolling', () => {
    const {
      MyFirstComponentUsingLifecycleMethods
    } = require(`../../src/${__version__}/Exercise-8.jsx`);

    // Force the scroll position
    window.scrollX = 0;
    window.scrollY = 0;

    const component = renderIntoDocument(
      <MyFirstComponentUsingLifecycleMethods />
    );

    const div = findRenderedDOMComponentWithTag(
      component,
      'div'
    );

    // Force the scroll position
    window.scrollX = 20;
    window.scrollY = 1000;

    // Trigger a scroll event
    window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));

    assert.equal(
      findDOMNode(div).textContent,
      'Scroll Position x: 20 y: 1000',
      'Did not update state correctly'
    );
  });
});
