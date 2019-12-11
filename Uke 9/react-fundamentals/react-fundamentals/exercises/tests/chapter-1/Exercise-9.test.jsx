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


describe('Exercise 9-1 - My first higher order component', () => {
  it('Should render the simple component correctly', () => {
    let renderer = createRenderer();

    const {
      withScrollPosition,
      MySimpleComponent,
      MyFirstComponentExtendedWithHigherOrderComponents
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    renderer.render(
      <MySimpleComponent
        scrollX={100}
        scrollY={200}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <p>Scroll Position x: 100 y: 200</p>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have a correctly functioning higher order component (initial state)', () => {
    const {
      withScrollPosition,
      MySimpleComponent,
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    const MyFirstComponentExtendedWithHigherOrderComponents = withScrollPosition(MySimpleComponent);

    // Force the scroll position
    window.scrollX = 0;
    window.scrollY = 0;

    const component = renderIntoDocument(
      <MyFirstComponentExtendedWithHigherOrderComponents />
    );

    const paragraph = findRenderedDOMComponentWithTag(
      component,
      'p'
    );

    assert.equal(
      findDOMNode(paragraph).textContent,
      'Scroll Position x: 0 y: 0',
      'Did not have correct initial state'
    );
  });

  it('Should have a correctly functioning higher order component (state update)', () => {
    const {
      withScrollPosition,
      MySimpleComponent,
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    const MyFirstComponentExtendedWithHigherOrderComponents = withScrollPosition(MySimpleComponent);

    // Force the scroll position
    window.scrollX = 0;
    window.scrollY = 0;

    const component = renderIntoDocument(
      <MyFirstComponentExtendedWithHigherOrderComponents />
    );

    const paragraph = findRenderedDOMComponentWithTag(
      component,
      'p'
    );

    // Force the scroll position
    window.scrollX = 20;
    window.scrollY = 1000;

    // Trigger a scroll event
    window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));

    assert.equal(
      findDOMNode(paragraph).textContent,
      'Scroll Position x: 20 y: 1000',
      'Did not update state correctly'
    );
  });

  it('Should have a a correct usage of higher order component (initial state)', () => {
    const {
      MyFirstComponentExtendedWithHigherOrderComponents
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    // Force the scroll position
    window.scrollX = 0;
    window.scrollY = 0;

    const component = renderIntoDocument(
      <MyFirstComponentExtendedWithHigherOrderComponents />
    );

    const paragraph = findRenderedDOMComponentWithTag(
      component,
      'p'
    );

    assert.equal(
      findDOMNode(paragraph).textContent,
      'Scroll Position x: 0 y: 0',
      'Did not have correct initial state'
    );
  });

  it('Should have a correctly functioning higher order component (state update)', () => {
    const {
      MyFirstComponentExtendedWithHigherOrderComponents
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    const component = renderIntoDocument(
      <MyFirstComponentExtendedWithHigherOrderComponents />
    );

    const paragraph = findRenderedDOMComponentWithTag(
      component,
      'p'
    );

    // Force the scroll position
    window.scrollX = 500;
    window.scrollY = 1200;

    // Trigger a scroll event
    window.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));

    assert.equal(
      findDOMNode(paragraph).textContent,
      'Scroll Position x: 500 y: 1200',
      'Did not update state correctly'
    );
  });
});

describe('Exercise 9-2 - My first wrapper component', () => {
  it('Should have a correctly functioning wrapper component (initial state) (case 1)', () => {
    const {
      Expander
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    const component = renderIntoDocument(
      <Expander height={50}>
        <p>Hello World</p>
        <p>Goodbye World</p>
      </Expander>
    );

    const div = findRenderedDOMComponentWithTag(
      component,
      'div'
    );

    const paragraphs = scryRenderedDOMComponentsWithTag(
      component,
      'p'
    );

    assert.equal(
      paragraphs.length,
      2,
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[0]).textContent,
      'Hello World',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[1]).textContent,
      'Goodbye World',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(div).style.maxHeight,
      '50px',
      'Does not add correct style property (maxHeight)'
    );

    assert.equal(
      findDOMNode(div).style.backgroundColor,
      'yellow',
      'Does not add correct style property (backgroundColor)'
    );

    assert.equal(
      findDOMNode(div).style.overflow,
      'hidden',
      'Does not add correct style property (overflow)'
    );
  });

  it('Should have a correctly functioning wrapper component (initial state) (case 2)', () => {
    const {
      Expander
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    const component = renderIntoDocument(
      <Expander height={100}>
        <p>Hello World</p>
        <p>Goodbye World</p>
        <p>Yallow</p>
      </Expander>
    );

    const div = findRenderedDOMComponentWithTag(
      component,
      'div'
    );

    const paragraphs = scryRenderedDOMComponentsWithTag(
      component,
      'p'
    );

    assert.equal(
      paragraphs.length,
      3,
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[0]).textContent,
      'Hello World',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[1]).textContent,
      'Goodbye World',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[2]).textContent,
      'Yallow',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(div).style.maxHeight,
      '100px',
      'Does not add correct style property (maxHeight)'
    );

    assert.equal(
      findDOMNode(div).style.overflow,
      'hidden',
      'Does not add correct style property (overflow)'
    );
  });

  it('Should have a correctly functioning wrapper component (state update)', () => {
    const {
      Expander
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    const component = renderIntoDocument(
      <Expander height={100}>
        <p>Hello World</p>
        <p>Goodbye World</p>
        <p>Yallow</p>
      </Expander>
    );

    const div = findRenderedDOMComponentWithTag(
      component,
      'div'
    );

    let paragraphs = scryRenderedDOMComponentsWithTag(
      component,
      'p'
    );

    assert.equal(
      paragraphs.length,
      3,
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[0]).textContent,
      'Hello World',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[1]).textContent,
      'Goodbye World',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[2]).textContent,
      'Yallow',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(div).style.maxHeight,
      '100px',
      'Does not add correct style property (maxHeight)'
    );

    Simulate.click(div);

    assert.equal(
      findDOMNode(div).style.maxHeight,
      'none',
      'Does not update style property correctly'
    );

    assert.equal(
      paragraphs.length,
      3,
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[0]).textContent,
      'Hello World',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[1]).textContent,
      'Goodbye World',
      'Expander does not use children correctly'
    );

    assert.equal(
      findDOMNode(paragraphs[2]).textContent,
      'Yallow',
      'Expander does not use children correctly'
    );
  });

  it('Should have a correctly functioning wrapper component (state update)', () => {
    const {
      MyExpandableComponent
    } = require(`../../src/${__version__}/Exercise-9.jsx`);

    const component = renderIntoDocument(
      <MyExpandableComponent />
    );

    const div = scryRenderedDOMComponentsWithTag(
      component,
      'div'
    )[0];

    let paragraphs = scryRenderedDOMComponentsWithTag(
      component,
      'p'
    );

    assert.equal(
      paragraphs.length,
      10,
      'Correct amount of children not passed'
    );

    paragraphs.forEach((p, index) => {
      assert.equal(
        findDOMNode(p).textContent,
        `A lot of text ${index + 1}`,
        'Wrong children passed (not correct content)'
      );
    });

    assert.equal(
      findDOMNode(div).style.maxHeight,
      '50px',
      'Wrong height property added (not correct amount)'
    );

    Simulate.click(div);

    assert.equal(
      findDOMNode(div).style.maxHeight,
      'none',
      'Does not update style property correctly'
    );
  });
});
