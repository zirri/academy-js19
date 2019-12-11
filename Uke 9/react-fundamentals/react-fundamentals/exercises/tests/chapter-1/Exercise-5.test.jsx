const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  createRenderer
} = require('react-addons-test-utils');

describe('Exercise 5-1 - My first fancy jsx component', () => {
  it('Should have correct output using props as input (case 1)', () => {
    let renderer = createRenderer();

    const {
      MyFirstFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MyFirstFancyJsxComponent
        isValid={true}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>its valid</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have correct output using props as input (case 2)', () => {
    let renderer = createRenderer();

    const {
      MyFirstFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MyFirstFancyJsxComponent
        isValid={true}
        isSaving={true}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>its valid</div>
        <div>its saving</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have correct output using props as input (case 3)', () => {
    let renderer = createRenderer();

    const {
      MyFirstFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MyFirstFancyJsxComponent
        isValid={true}
        isSaving={true}
        isActive={true}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>its valid</div>
        <div>its saving</div>
        <div>its active</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have correct output using props as input (case 4)', () => {
    let renderer = createRenderer();

    const {
      MyFirstFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MyFirstFancyJsxComponent
        isValid={true}
        isActive={true}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>its valid</div>
        <div>its active</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});

describe('Exercise 5-2 - My second fancy jsx component', () => {
  it('Should have correct output using props as input (case 1)', () => {
    let renderer = createRenderer();

    const {
      MySecondFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MySecondFancyJsxComponent />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>its not active</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have correct output using props as input (case 2)', () => {
    let renderer = createRenderer();

    const {
      MySecondFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MySecondFancyJsxComponent
        isActive={true}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>its active</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});

describe('Exercise 5-3 - My third fancy jsx component', () => {
  it('Should have correct output using props as input (case 1)', () => {
    let renderer = createRenderer();

    const {
      MyThirdFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MyThirdFancyJsxComponent
        isReady={false}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>not ready and not saving either</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have correct output using props as input (case 2)', () => {
    let renderer = createRenderer();

    const {
      MyThirdFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MyThirdFancyJsxComponent
        isReady={true}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>its ready</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });

  it('Should have correct output using props as input (case 3)', () => {
    let renderer = createRenderer();

    const {
      MyThirdFancyJsxComponent
    } = require(`../../src/${__version__}/Exercise-5.jsx`);

    renderer.render(
      <MyThirdFancyJsxComponent
        isReady={false}
        isSaving={true}
      />
    );

    let actualElement = renderer.getRenderOutput();

    let expectedElement = (
      <div>
        <div>not ready, but saving</div>
      </div>
    );

    assert.equalJSX(
      actualElement,
      expectedElement
    );
  });
});
