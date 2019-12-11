require('../styles/app.css');

const React = require('react');

const {
  MyFirstComponent,
  MySecondComponent
} = require('./Exercise-1.jsx');

const {
  MyFirstComponentWithClasses,
  MySecondComponentWithClasses,
  MyFirstComponentWithInlineStyles,
  MySecondComponentWithInlineStyles,
  MyFirstComponentWithInlineStylesAndClasses
} = require('./Exercise-2.jsx');

const {
  MyFirstComponentWithProps,
  MySecondComponentWithProps,
  MyThirdComponentWithProps,
  MyFourthComponentWithProps,
  MyFifthComponentWithProps,
  MySixthComponentWithProps,
  MySeventhComponentWithProps,
  MyEigthComponentWithProps
} = require('./Exercise-3.jsx');

const {
  CheckboxWithLabel,
  ClickCounter,
  ClickCounterWithInitialValue,
  IncrementDecrement,
  IncrementDecrementStep
} = require('./Exercise-4.jsx');

const {
  MyFirstFancyJsxComponent,
  MySecondFancyJsxComponent,
  MyThirdFancyJsxComponent
} = require('./Exercise-5.jsx');

const {
  MyFirstComponentWithPropTypes,
  MyFirstComponentWithPropTypesRequired,
  MySecondComponentWithPropTypes,
  MyThirdComponentWithPropTypes
} = require('./Exercise-6.jsx');

const {
  MyFirstComponentWithDefaultProps,
  MySecondComponentWithDefaultProps,
  MyThirdComponentWithDefaultProps
} = require('./Exercise-7.jsx');

const {
  MyFirstComponentUsingLifecycleMethods
} = require('./Exercise-8.jsx');

const {
  MyFirstComponentExtendedWithHigherOrderComponents,
  MyExpandableComponent
} = require('./Exercise-9.jsx');

const {
  ValidatedField
} = require('./Exercise-10.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="chapter-1-1">
          <div className="chapter-1-1-1">
            <h3>Exercise 1-1: My first component</h3>

            <MyFirstComponent />
          </div>

          <div className="chapter-1-1-1">
            <h3>Exercise 1-2: My second component</h3>

            <MySecondComponent />
          </div>
        </div>

        <div className="chapter-1-2">
          <div className="chapter-1-2-1">
            <h3>Exercise 2-1: My first component with CSS classes</h3>

            <MyFirstComponentWithClasses />
          </div>

          <div className="chapter-1-2-2">
            <h3>Exercise 2-2: My second component with CSS classes</h3>

            <MySecondComponentWithClasses />
          </div>

          <div className="chapter-1-2-3">
            <h3>Exercise 2-3: My first component with inline styles</h3>

            <MyFirstComponentWithInlineStyles />
          </div>

          <div className="chapter-1-2-4">
            <h3>Exercise 2-4: My second component with inline styles</h3>

            <MySecondComponentWithInlineStyles />
          </div>

          <div className="chapter-1-2-5">
            <h3>Exercise 2-5: My first component with inline styles and classes</h3>

            <MyFirstComponentWithInlineStylesAndClasses />
          </div>
        </div>

        <div className="chapter-1-3">
          <div className="chapter-1-3-1">
            <h3>Exercise 3-1: My first component with props</h3>

            <MyFirstComponentWithProps
              name={'Hank Moody'}
            />

            <MyFirstComponentWithProps
              name={'Charlie Runkle'}
            />

            <MyFirstComponentWithProps
              name={'Trixie'}
            />
          </div>

          <div className="chapter-1-3-2">
            <h3>Exercise 3-2: My second component with props</h3>

            <MySecondComponentWithProps
              customClasses={['custom-class-1', 'custom-class-2']}
            />
          </div>

          <div className="chapter-1-3-3">
            <h3>Exercise 3-3: My third component with props</h3>

            <MyThirdComponentWithProps
              paragraphs={[
                'This is paragraph 1',
                'This is paragraph 2'
              ]}
            />
          </div>

          <div className="chapter-1-3-4">
            <h3>Exercise 3-4: My fourth component with props</h3>

            <MyFourthComponentWithProps
              lists={[
                ['List 1 - Item 1', 'List 1 - Item 2'],
                ['List 2 - Item 1', 'List 2 - Item 2']
              ]}
            />
          </div>

          <div className="chapter-1-3-5">
            <h3>Exercise 3-5: My fifth component with props</h3>

            <MyFifthComponentWithProps>
              <p>Hello World!</p>
              <p>Goodbye world..</p>
            </MyFifthComponentWithProps>
          </div>

          <div className="chapter-1-3-6">
            <h3>Exercise 3-6: My sixth component with props</h3>

            <MySixthComponentWithProps showDetails={true}>
              <p>Hello World!</p>
              <p>Goodbye world..</p>
            </MySixthComponentWithProps>
          </div>

          <div className="chapter-1-3-7">
            <h3>Exercise 3-7: My seventh component with props</h3>

            <MySeventhComponentWithProps title='Awesome Title'>
              <p>Hello World!</p>
              <p>Goodbye world..</p>
            </MySeventhComponentWithProps>
          </div>

          <div className="chapter-1-3-8">
            <h3>Exercise 3-8: My eigth component with props</h3>

            <MyEigthComponentWithProps title='Awesome Title' showDetails={true}>
              <p>Hello World!</p>
              <p>Goodbye world..</p>
            </MyEigthComponentWithProps>
          </div>
        </div>

        <div className="chapter-1-4">
          <div className="chapter-1-4-1">
            <h3>Exercise 4-1: Checkbox with label (state and events)</h3>

            <CheckboxWithLabel
              labelOn='On'
              labelOff='Off'
            />
          </div>

          <div className="chapter1-4-2">
            <h3>Exercise 4-2: Click counter (state and events)</h3>

            <ClickCounter />
          </div>

          <div className="chapter1-4-3">
            <h3>Exercise 4-3: Click counter with initial value (state and events)</h3>

            <ClickCounterWithInitialValue initialValue={10} />
          </div>

          <div className="chapter1-4-4">
            <h3>Exercise 4-4: Incrementer / Decrementer (state and events)</h3>

            <IncrementDecrement />
          </div>

          <div className="chapter1-4-5">
            <h3>Exercise 4-5: Incrementer / Decrementer with custom step interval (state and events)</h3>

            <IncrementDecrementStep stepInterval={5} />
          </div>
        </div>
        <div className="chapter-2-5">
          <div className="chapter-2-5-1">
            <h3>Exercise 5-1: My first fancy JSX component</h3>

            <MyFirstFancyJsxComponent
              isValid={true}
              isSaving={false}
              isActive={false}
            />

            <MyFirstFancyJsxComponent
              isValid={true}
              isSaving={true}
              isActive={false}
            />

            <MyFirstFancyJsxComponent
              isValid={true}
              isSaving={true}
              isActive={true}
            />
          </div>

          <div className="chapter-2-5-2">
            <h3>Exercise 5-2: My second fancy JSX component</h3>

            <MySecondFancyJsxComponent
              isActive={true}
            />

            <MySecondFancyJsxComponent
              isActive={false}
            />
          </div>

          <div className="chapter-2-5-3">
            <h3>Exercise 5-3: My third fancy JSX component</h3>

            <MyThirdFancyJsxComponent
              isReady={true}
              isSaving={false}
            />

            <MyThirdFancyJsxComponent
              isReady={false}
              isSaving={false}
            />

            <MyThirdFancyJsxComponent
              isReady={false}
              isSaving={true}
            />
          </div>
        </div>


        <div className="chapter-2-6">
          <div className="chapter-2-6-1">
            <h3>Exercise 6-1: My first component with propTypes</h3>

            <MyFirstComponentWithPropTypes
              isActive={true}
              count={14}
            />
          </div>

          <div className="chapter-2-6-2">
            <h3>Exercise 6-2: My first component with propTypes (required)</h3>

            <MyFirstComponentWithPropTypesRequired
              isActive={false}
              count={18}
            />
          </div>

          <div className="chapter-2-6-3">
            <h3>Exercise 6-3: My second component with propTypes</h3>

            <MySecondComponentWithPropTypes
              paragraphs={['Paragraph 1', 'Paragraph 2']}
            />
          </div>

          <div className="chapter-2-6-4">
            <h3>Exercise 6-4: My third component with propTypes</h3>

            <MyThirdComponentWithPropTypes
              lists={[
                ['yabba', 'dabba'],
                ['doo', 'scooby doo']
              ]}
            />
          </div>
        </div>


        <div className="chapter-2-7">
          <div className="chapter-2-7-1">
            <h3>Exercise 7-1: My first component with default props</h3>

            <MyFirstComponentWithDefaultProps />
          </div>

          <div className="chapter-2-7-2">
            <h3>Exercise 7-2: My second component with default props</h3>

            <MySecondComponentWithDefaultProps paragraphs={[]} />
          </div>

          <div className="chapter-2-7-3">
            <h3>Exercise 7-3: My third component with default props</h3>

            <MyThirdComponentWithDefaultProps lists={[]} />
          </div>
        </div>

        <div className="chapter-2-8">
          <div className="chapter-2-8-1">
            <h3>Exercise 8-1: My first component using lifecycle methods</h3>

            <MyFirstComponentUsingLifecycleMethods />
          </div>
        </div>

        <div className="chapter-2-9">
          <div className="chapter-2-9-1">
            <h3>Exercise 9-1: My first component using higher order components</h3>

            <MyFirstComponentExtendedWithHigherOrderComponents />
          </div>

          <div className="chapter-2-9-1">
            <h3>Exercise 9-2: My first component using wrapper components</h3>

            <MyExpandableComponent />
          </div>
        </div>

        <div className="chapter-2-10">
          <div className="chapter-2-10-1">
            <h3>Exercise 10-1: My first form component</h3>

            <ValidatedField />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
