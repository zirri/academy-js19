/* eslint-disable */

const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} = require('react-addons-test-utils');

describe('Exercise 6-1 - My first component with PropTypes', () => {
  it('should have correct PropTypes assigned', () => {
    const {
      MyFirstComponentWithPropTypes
    } = require(`../../src/${__version__}/Exercise-6.jsx`);

    // collect the errors that SHOULD happen (caused by PropTypes)
    let correctErrors = [];

    // collect the corresponding errors of not having correct PropTypes
    let errors = []

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyFirstComponentWithPropTypes
          isActive={5}
          count={5}
        />
      );
    } catch (e) {
      correctErrors[0] = e;
    } finally {
      if (!correctErrors[0]) {
        errors.push('isActive should have correct PropType assigned');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyFirstComponentWithPropTypes
          isActive={true}
          count={'thing'}
        />
      );
    } catch (e) {
      correctErrors[1] = e;
    } finally {
      if (!correctErrors[1]) {
        errors.push('count should have correct PropType assigned');
      }
    }

    // collect errors and throw
    if (errors.length) {
      throw new Error(errors.join('\n'));
    }

  });
});

describe('Exercise 6-2 - My first component with required PropTypes', () => {
  it('should have correct PropTypes assigned', () => {
    const {
      MyFirstComponentWithPropTypesRequired
    } = require(`../../src/${__version__}/Exercise-6.jsx`);

    // collect the errors that SHOULD happen (caused by PropTypes)
    let correctErrors = [];

    // collect the corresponding errors of not having correct PropTypes
    let errors = []

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyFirstComponentWithPropTypesRequired
          isActive={5}
          count={5}
        />
      );
    } catch (e) {
      correctErrors[0] = e;
    } finally {
      if (!correctErrors[0]) {
        errors.push('isActive should have correct PropType assigned');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyFirstComponentWithPropTypesRequired
          isActive={true}
          count={'thing'}
        />
      );
    } catch (e) {
      correctErrors[1] = e;
    } finally {
      if (!correctErrors[1]) {
        errors.push('count should have correct PropType assigned');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyFirstComponentWithPropTypesRequired
          isActive={true}
        />
      );
    } catch (e) {
      correctErrors[2] = e;
    } finally {
      if (!correctErrors[2]) {
        errors.push('count should be a required proptype');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyFirstComponentWithPropTypesRequired
          count={6}
        />
      );
    } catch (e) {
      correctErrors[3] = e;
    } finally {
      if (!correctErrors[3]) {
        errors.push('isActive should be a required proptype');
      }
    }

    // collect errors and throw
    if (errors.length) {
      throw new Error(errors.join('\n'));
    }

  });
});

describe('Exercise 6-3 - My second component with PropTypes', () => {
  it('should have correct PropTypes assigned', () => {
    const {
      MySecondComponentWithPropTypes
    } = require(`../../src/${__version__}/Exercise-6.jsx`);

    // collect the errors that SHOULD happen (caused by PropTypes)
    let correctErrors = [];

    // collect the corresponding errors of not having correct PropTypes
    let errors = []

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MySecondComponentWithPropTypes
          paragraphs={[5, 6, 7]}
        />
      );
    } catch (e) {
      correctErrors[0] = e;
    } finally {
      if (!correctErrors[0]) {
        errors.push('paragraphs should have correct PropType assigned');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MySecondComponentWithPropTypes
          paragraphs={[true, false, true]}
        />
      );
    } catch (e) {
      correctErrors[1] = e;
    } finally {
      if (!correctErrors[1]) {
        errors.push('paragraphs should have correct PropType assigned');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MySecondComponentWithPropTypes
          paragraphs={['blabla', 'blabla2']}
        />
      );
    } catch (e) {
      errors.push(e);
    }

    // collect errors and throw
    if (errors.length) {
      throw new Error(errors.join('\n'));
    }

  });
});

describe('Exercise 6-4 - My third component with PropTypes', () => {
  it('should have correct PropTypes assigned', () => {
    const {
      MyThirdComponentWithPropTypes
    } = require(`../../src/${__version__}/Exercise-6.jsx`);

    // collect the errors that SHOULD happen (caused by PropTypes)
    let correctErrors = [];

    // collect the corresponding errors of not having correct PropTypes
    let errors = []

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyThirdComponentWithPropTypes
          lists={[
            { a: 5},
            ['List 2 Item 1', 'List 2 Item 2']
          ]}
        />
      );
    } catch (e) {
      correctErrors[0] = e;
    } finally {
      if (!correctErrors[0]) {
        errors.push('lists should have correct PropType assigned');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyThirdComponentWithPropTypes
          lists={[
            [6, 'List 1 Item 2'],
            ['List 2 Item 1', 7]
          ]}
        />
      );
    } catch (e) {
      correctErrors[1] = e;
    } finally {
      if (!correctErrors[1]) {
        errors.push('lists should have correct PropType assigned');
      }
    }

    // testing a proptype
    try {
      const myComponent = renderIntoDocument(
        <MyThirdComponentWithPropTypes
          lists={[
            ['List 1 Item 1', 'List 1 Item 2'],
            ['List 2 Item 1', 'List 2 Item 2']
          ]}
        />
      );
    } catch (e) {
      errors.push(e);
    }

    // collect errors and throw
    if (errors.length) {
      throw new Error(errors.join('\n'));
    }

  });
});
