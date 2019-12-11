require('../styles/app.css');

const React = require('react');

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
        <h1>{this.props.title}</h1>
        <ul>{users}</ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    email: emailPropType,
    age: React.PropTypes.number
  })).isRequired,
  title: React.PropTypes.string
};

UserList.defaultProps = {
  users: [],
  title: 'Default Title'
};

module.exports = UserList;
