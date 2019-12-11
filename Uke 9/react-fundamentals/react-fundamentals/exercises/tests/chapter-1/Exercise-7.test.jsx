const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  createRenderer,
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} = require('react-addons-test-utils');

describe('Exercise 7-1 - My first component with default props', () => {
  it('Should have the correct defaults (case 1)', () => {
    let renderer = createRenderer();

    const {
      MyFirstComponentWithDefaultProps
    } = require(`../../src/${__version__}/Exercise-7.jsx`);

    renderer.render(
      <MyFirstComponentWithDefaultProps
        isActive={false}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <h3>Count: <span>0</span></h3>
        <span>Inactive</span>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have the correct defaults (case 2)', () => {
    let renderer = createRenderer();

    const {
      MyFirstComponentWithDefaultProps
    } = require(`../../src/${__version__}/Exercise-7.jsx`);

    renderer.render(
      <MyFirstComponentWithDefaultProps
        count={10}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <h3>Count: <span>10</span></h3>
        <span>Active</span>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have the correct defaults (case 3)', () => {
    let renderer = createRenderer();

    const {
      MyFirstComponentWithDefaultProps
    } = require(`../../src/${__version__}/Exercise-7.jsx`);

    renderer.render(
      <MyFirstComponentWithDefaultProps />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <h3>Count: <span>0</span></h3>
        <span>Active</span>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});

describe('Exercise 7-2 - My second component with default props', () => {
  it('Should have the correct defaults (case 1)', () => {
    let renderer = createRenderer();

    const {
      MySecondComponentWithDefaultProps
    } = require(`../../src/${__version__}/Exercise-7.jsx`);

    renderer.render(
      <MySecondComponentWithDefaultProps />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});

describe('Exercise 7-3 - My third component with default props', () => {
  it('Should have the correct defaults (case 1)', () => {
    let renderer = createRenderer();

    const {
      MyThirdComponentWithDefaultProps
    } = require(`../../src/${__version__}/Exercise-7.jsx`);

    renderer.render(
      <MyThirdComponentWithDefaultProps />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div />
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});
