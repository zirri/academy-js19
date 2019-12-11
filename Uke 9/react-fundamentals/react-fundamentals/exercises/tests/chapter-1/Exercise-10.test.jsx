/* eslint-disable */

const React = require('react');

const deepEqual = require('deep-equal');

const {
  findDOMNode
} = require('react-dom');

const {
  createRenderer,
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = require('react-addons-test-utils');


describe('Exercise 10-1 - My first (controlled) form component', () => {
  it('Should render the initial output correctly', () => {
    let renderer = createRenderer();

    const {
      ValidatedField,
    } = require(`../../src/${__version__}/Exercise-10.jsx`);

    renderer.render(
      <ValidatedField />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div style={{ backgroundColor: 'red' }}>
        <input onChange={function noRef() { "use strict"; }} type="text" value="" />
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should update the output correctly when adding input to the field', () => {
    const {
      ValidatedField
    } = require(`../../src/${__version__}/Exercise-10.jsx`);

    const component = renderIntoDocument(
      <ValidatedField />
    );

    const div = findRenderedDOMComponentWithTag(
      component,
      'div'
    );

    const input = findRenderedDOMComponentWithTag(
      component,
      'input'
    );

    assert.equal(
      findDOMNode(div).style.backgroundColor,
      'red',
      'Did not have correct background color initially'
    );

    assert.equal(
      findDOMNode(input).value,
      '',
      'Did not have an empty initial value for the input field'
    );

    Simulate.change(input, { target: { value: 'a' } });

    assert.equal(
      findDOMNode(input).value,
      'a',
      'Did not update state correctly when typing in input field'
    );

    Simulate.change(input, { target: { value: 'ab' } });

    assert.equal(
      findDOMNode(input).value,
      'ab',
      'Did not update state correctly when typing in input field'
    );

    Simulate.change(input, { target: { value: 'abc' } });

    assert.equal(
      findDOMNode(input).value,
      'abc',
      'Did not update state correctly when typing in input field'
    );

    Simulate.change(input, { target: { value: '12345678900' } });

    assert.equal(
      findDOMNode(input).value,
      '12345678900',
      'Did not update state correctly when typing in input field'
    );

    assert.equal(
      findDOMNode(div).style.backgroundColor,
      'green',
      'Did not update background color correctly when valid (length > 10)'
    );

    Simulate.change(input, { target: { value: '12345678900@' } });

    assert.equal(
      findDOMNode(input).value,
      '12345678900@',
      'Did not update state correctly when typing in input field'
    );

    assert.equal(
      findDOMNode(div).style.backgroundColor,
      'red',
      'Did not update background color correctly when inValid (@)'
    );
  });
});
