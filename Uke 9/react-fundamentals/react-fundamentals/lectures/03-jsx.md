JSX and the gotchas
===================

Conditionals
------------

No `for`, `while` or `if/else` inside JSX blocks (you can only use expressions - not statements)

Instead use

- `.map`
- `.filter`
- ternary expression `var name = evaluateMe ? pickMeIfTrue : elsePickMe;`
- conditional expressions
  - `{this.props.something && this.props.somethingElse}`
  - `{this.props.eitherMe || this.props.orMe}`


Comments
--------

- if between an opening and closing xml tag wrap comment in `{/* */}`
- if inside a non-closed xml-tag use both `//` and `/* */` as usual or `{/* */}`

```js
<FlightInfo
  summary={...}
  image={...}
  // fdsfdsfds
>
  {/* */}
</FlightInfo>
```

```js
// short circuit && (emulating if)
{isLoading && (
  <div>Loading...</div>
)}

// ternary (emulating if/else)
{isFinished ? (
  <div>results are ready</div>
) : (
  <div>results are loading</div>
)}

// nested ternary (emulating nested if/else)
{isLatestVersion ? (
  <div>You have the latest version</div>
) : (
  needsUpgrade ? (
    <div>You have an older version and need an upgrade</div>
  ) : (
    <div>You have an older version, but it is compatible</div>
  )
)}

// spaces with newlines
<button>one</button>{' '}
<button>two</button>

// mixed comment styles
<AwesomeComponent
  // commenty comment
  /* some commenty stuff */
  myProp={someStuff}
>
  {/* other commenty stuff */}
  <p>Actual content</p>
</AwesomeComponent>
```

Spread Attributes
-----------------

If you know all the properties that you want to place on a component ahead of time, it is easy to use JSX:

```js
const component = <Component foo={x} bar={y} />;
```

But if you're passing along props that might be different for each time you have the ability to "spread" them on with the spread operator:

```js
let props = {};
props.foo = x;
props.bar = y;
const component = <Component {...props} />;
```

And this is how the order decides what overrides (last one overrides the previous):

```js
const props = { foo: 'default' };
const component = <Component {...props} foo={'override'} />;
console.log(component.props.foo); // 'override'
```

[**Exercises**]

- See `/exercises` folder (chapter 2: 5)
