Why Do We Need Frontend Libraries and Frameworks?
=================================================

- Structure
- Performance
- Declarative vs. Imperative
- Building Blocks and Re-use
- "Speaking the same language"
- A better way to describe our user interfaces!

What you're doing here is just mapping `flights` into list items (DOM elements)

```js
const items = flights.map((flight) => {
  let li = document.createElement('li');
  li.className = 'flight';
  li.innerHTML = flight.destination;

  return li;
});
```

In React it would look like this:

```js
const items = flights.map((flight) => {
  return React.DOM.li({ className: 'flight' }, flight.destination);
});
```

Or using JSX:

```js
const items = flights.map((flight) => {
  return <li className='flight'>{flight.destination}</li>;
});
```

React
-----

React makes the answers obvious to these questions:

- What state is there?
- Where is it mutated?

Your components are just pure function of props and state (ideally).
This enables you to describe your component at any point
in time based on a set of props and state that returns
the same UI for the same set of inputs.


Let's look a closer at pure functions:

```js
const add = (x, y) => x + y;
```

- will always return the same value given the same input
- has no side-effects

```js
// either as part of the new function's definition
const double = (x) => add(x, x);

// or used to pass in arguments to the function
add(add(x, y), double(z));

// or even passed INTO a function
const double = (adder, value) => adder(value);
double(add, 5);
```

Pure functions are incredibly versatile. They are completely isolated
from the context in which they are used.

Now let's see how React does this:

React components are literally functions that return a
description of UI that will get rendered.

```js
const input = React.DOM.input({ type: 'password' });

React.render(input, document.body);
```

```js
const element = React.DOM.div({ className: 'App' },
                  React.DOM.h1(null, 'Hello!'),
                  React.DOM.p(null, 'lorem ipsum ...'),
                );

React.render(element, document.body);
```

Let's do some math. We can create our own types of components in
React:

```js
const Add = (props) => {
  const sum = props.x + props.y;
  return React.DOM.span({}, sum);
}

const element = Add({ x: 2, y: 3 }); // <span>5</span>

const Double = (props) => {
  return React.createElement(Add({
    x: props.value,
    y: props.value,
  }));
}

const element = Double({ value: 2 }); // <span>4</span>
```

It's just functions, except for these two differences:

- it assumes that it'll be passed an object with `props` as the first argument
- it returns a description of UI to be rendered later

JSX
----

Now that we know that React components are just functions, perhaps JSX
wont make you puke. XML is a pretty great way to express user interface
components. XML elements have a name, some properties, and hierarchy,
just like UI.

```js
const element = (
  <div className="App">
    <h1 className="Title">Hello!</h1>
    <p>React and ES6 is awesome</p>
  </div>
);

const element = (
  div({ className: "App" },
    h1({ className: "Title" }, 'Hello!'),
    p(null, 'React and ES6 is awesome')
  );
);
```

Again, JSX is really just a different way to call functions. Arrays
start with `[`, regular expressions start with `/`, and UI starts with
`<`. There's nothing crazy going on.

Because its just JavaScript, there are no special ways to deal with
scope, or injection to make components available to your "templates".

```js
const SomeThing = require('./SomeThing');

const App = () => {
  const Renamed = Something;
  return (
    <div>
      <SomeThing/>
      <Renamed/>
    </div>
  );
}
```

This purely functional way of creating components is called "Functional Stateless Components",
which by its name implies that this type of component cannot be used when creating stateful components (no longer true now that we have hooks! - more about that later).

To be able to create stateful components with logic we need to use the new `class` syntax that enables the use of lifecycle methods and component state. We take a closer look in a second. The old `React.createClass` API is now deprecated.

```js
const SomeThing = require('./SomeThing');

class App extends React.Component {
  render() {
    const Renamed = Something;
    return (
      <div>
        <SomeThing/>
        <Renamed/>
      </div>
    );
  }
}
```

Things you have to know:

- JavaScript
- React component class

Always Re-render
----------------

Because React Elements are just descriptions of UI, not the actual UI,
when things change, it can do a diff of the old values with the new
values. If nothing is different, the actual UI isn't touched at all. If
there are changes, the absolute minimal changes to the DOM are
performed. They call this the "Virtual DOM". Its just a bunch of UI
descriptions in memory.

- This allows you to write code that doesn't have to know a whole lot
  about how your app changes over time, all you have to tell it is that
  "something might have changed", it doesn't matter what, and all that
  matters are the values, not the identities of the objects.
- Render is stateless, just like a server app, that's why you can
  actually write a server rendered app in React.
