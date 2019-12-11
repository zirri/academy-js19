PropTypes
==========

Props are a lot like HTML attributes, and enables you
to pass data into a component.

To make sure we are passing the correct data and
structure we can make use of PropTypes, which
is provided by React as a development helper


```js
const element = <input type="checkbox" required="true" />;
```

We want to validate and control our props

```js
class EmailList extends React.Component {
  render() {
    const emails = this.props.emails
    .map((email) => {
      return (
        <li>
          <a href={'mailto:' + email}>{email}</a>
        </li>
      );
    });

    return (
      <div>
        <h1>List of emails</h1>
        <ul>{emails}</ul>
      </div>
    );
  }
}

React.render(
  <EmailList
    emails={[
      'abc@a.com',
      'ert@a.com',
      'asd@a.com',
      'ytr@a.com',
      'rty@a.com',
      'wer@a.com',
    ]}
  />,
  document.getElementById('app')
);
```

Use propTypes to validate our incoming props

```js
import PropTypes from 'prop-types';

class EmailList extends React.Component {
  render() {
    const emails = this.props.emails
    .map((email) => {
      return (
        <li>
          <a href={'mailto:' + email}>{email}</a>
        </li>
      );
    });

    return (
      <div>
        <h1>List of emails</h1>
        <ul>{emails}</ul>
      </div>
    );
  }
}

EmailList.propTypes = {
  emails: PropTypes.array
};

React.render(
  <EmailList
    emails={[
      'abc@a.com',
      'ert@a.com',
      'asd@a.com',
      'ytr@a.com',
      'rty@a.com',
      'wer@a.com',
    ]}
  />,
  document.getElementById('app')
);
```

We can also make the prop required

```js
import PropTypes from 'prop-types';

class EmailList extends React.Component {
  render() {
    const emails = this.props.emails
    .map((email) => {
      return (
        <li>
          <a href={'mailto:' + email}>{email}</a>
        </li>
      );
    });

    return (
      <div>
        <h1>List of emails</h1>
        <ul>{emails}</ul>
      </div>
    );
  }
}

EmailList.propTypes = {
  emails: PropTypes.array.isRequired
};

React.render(
  <EmailList
    emails={[
      'abc@a.com',
      'ert@a.com',
      'asd@a.com',
      'ytr@a.com',
      'rty@a.com',
      'wer@a.com',
    ]}
  />,
  document.getElementById('app')
);
```

This would guard for non-array input, but what if it's not an array of strings..?

```js
import PropTypes from 'prop-types';

class EmailList extends React.Component {
  render() {
    const emails = this.props.emails
    .map((email) => {
      return (
        <li>
          <a href={'mailto:' + email}>{email}</a>
        </li>
      );
    });

    return (
      <div>
        <h1>List of emails</h1>
        <ul>{emails}</ul>
      </div>
    );
  }
}

EmailList.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.string).isRequired
};

React.render(
  <EmailList
    emails={[
      'abc@a.com',
      'ert@a.com',
      'asd@a.com',
      'ytr@a.com',
      'rty@a.com',
      'wer@a.com',
    ]}
  />,
  document.getElementById('app')
);
```

But what if the strings passed aren't valid emails..?
(hint: we can make our own propTypes!)

```js
import PropTypes from 'prop-types';

function isEmail (str) {
  return (str instanceof String) && /.*?@.*?\.[a-z]{2,4}/.test(str);
}

const emailPropType = function (props, propName, component) {
  if (!isEmail(props[propName])) {
    return new Error('Invalid email!');
  }
};

class EmailList extends React.Component {
  render() {
    const emails = this.props.emails
    .map((email) => {
      return (
        <li>
          <a href={'mailto:' + email}>{email}</a>
        </li>
      );
    });

    return (
      <div>
        <h1>List of emails</h1>
        <ul>{emails}</ul>
      </div>
    );
  }
}

EmailList.propTypes = {
  emails: PropTypes.arrayOf(emailPropType).isRequired
};

React.render(
  <EmailList
    emails={[
      'abc@a.com',
      'ert@a.com',
      'asd@a.com',
      'ytr@a.com',
      'rty@a.com',
      'wer@a.com',
    ]}
  />,
  document.getElementById('app')
);
```

What about objects or arrays of objects..?

```js
import PropTypes from 'prop-types';

function isEmail (str) {
  return (str instanceof String) && /.*?@.*?\.[a-z]{2,4}/.test(str);
}

const emailPropType = function (props, propName, component) {
  if (!isEmail(props[propName])) {
    return new Error('Invalid email!');
  }
};

class UserList extends React.Component {
  render() {
    const users = this.props.users
    .map((user) => {
      return (
        <li>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <a href={'mailto:' + user.email}>Email: {user.email}</a>
        </li>
      );
    });

    return (
      <div>
        <h1>List of users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: emailPropType
    age: PropTypes.number
  })).isRequired
};

React.render(
  <UserList
    users={[{
      name: 'Eirik',
      age: 28,
      email: 'eirik@evconsult.no'
    }, {
      name: 'John Doe',
      age: 30,
      email: 'john@doe.no'
    }]}
  />,
  document.getElementById('app')
);
```

We can use propTypes to document our components and their API.

There are lots of proptypes:
https://facebook.github.io/react/docs/typechecking-with-proptypes.html

Default Props
=============

To avoid having to guard ourselves in components
(e.g undefined values or expected input missing) we
can use default props, which is a lifecycle method
provided by React to help us out. Used in combination
with PropTypes it can help you keep your component cleaner
and also serves as documentation for whoever uses it.

```js
import PropTypes from 'prop-types';

class UserList extends React.Component {
  render() {
    const users = this.props.users
    .map((user) => {
      return (
        <li>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </li>
      );
    });

    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })),
  title: PropTypes.string
};

React.render(
  <UserList />,
  document.getElementById('app')
);
```

If we run the code above we'll have an issue when `this.props.users`
i `.map`-ed, since this is an `Array` method. One way to handle this would
be to check inside the component if something is defined or not.

```js
import PropTypes from 'prop-types';

class UserList extends React.Component {
  render() {
    const users = (this.props.users || [])
    .map((user) => {
      return (
        <li>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </li>
      );
    });

    return (
      <div>
        <h1>{this.props.title || ''}</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })),
  title: PropTypes.string
};

React.render(
  <UserList />,
  document.getElementById('app')
);
```

But this is rather ugly, and can with time pollute your code
with a lot of statements that has nothing to do with your actual
application. Let's use the lifecycle-method `getDefaultProps` instead.

```js
import PropTypes from 'prop-types';

class UserList extends React.Component {
  render() {
    const users = this.props.users
    .map((user) => {
      return (
        <li>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </li>
      );
    });

    return (
      <div>
        <h1>this.props.title</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })),
  title: PropTypes.string,
  onToggle: PropTypes.func,
};

UserList.defaultProps = {
  users: [],
  title: 'Default Title',
  onToggle: function() { console.log('no onToggle supplied') }
};

React.render(
  <UserList />,
  document.getElementById('app')
);
```

Use an appropriate combination of PropTypes and default props
to keep your app both clean and less error prone.

__NOTE:__

PropTypes are only development helpers, and not production validation (input validation will have to be done separately).
They only provide warnings to the console.

[**Exercises**]

- See `/exercises` folder (chapter 2: 6-7)
