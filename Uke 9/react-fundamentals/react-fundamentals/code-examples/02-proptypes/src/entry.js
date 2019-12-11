const ReactDOM = require('react-dom');

const UserList = require('./js/UserList.jsx');

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
