Input
=====

_(show examples)_

Input handling and forms are some of the
primary building blocks of dynamic web applications.

React has two ways of handling forms,
giving you various levels of control

Uncontrolled Form Component
---------------------------

```js
class AddItem extends React.Component {
  handleSubmit(e) {
    if (!(e.keyCode === 13)) {
      return;
    }

    const inputField = this.refs.todoInput;
    this.props.add(inputField.value);
    inputField.value = '';
  },

  render() {
    return (
      <div>
        <input
          ref="todoInput"
          type="text"
          className="form-control"
          placeholder="New Item"
          onKeyDown={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}
```

Uncontrolled forms leave the input control
to the HTML form (which might be the right thing to do sometimes).
It lets you read from the input fields by attaching a 'ref' and
interacting with a React-wrapped DOM element.

Read more about refs [here](https://reactjs.org/docs/refs-and-the-dom.html)

Controlled Form Component
-------------------------

```js
class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: ''
    };
  }

  handleChange(e) {
    this.setState({
      newItem: e.target.value
    });
  }

  handleSubmit(e) {
    if (!(e.keyCode === 13)) {
      return;
    }

    this.props.add(this.state.newItem);
    this.setState({ newItem: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          value={this.state.newItem}
          placeholder="New Item"
          onKeyDown={this.handleSubmit.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}
```

When using a controlled form/component you have full
control over the form elements by controlling
the 'value' property of the inputs. This means you
can do validation as the user types, as well as
other real-time applications, before the actual
form content is updated.


[**Exercises**]

- See `/exercises` folder (chapter 2: 10)
