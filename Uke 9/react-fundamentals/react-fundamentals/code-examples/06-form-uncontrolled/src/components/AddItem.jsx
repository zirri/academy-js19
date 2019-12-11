const React = require('react');

class AddItem extends React.Component {
  handleSubmit(e) {
    if (!(e.keyCode === 13)) {
      return;
    }

    const inputField = this.refs.todoInput;
    this.props.add(inputField.value);
    inputField.value = '';
  }

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

module.exports = AddItem;
