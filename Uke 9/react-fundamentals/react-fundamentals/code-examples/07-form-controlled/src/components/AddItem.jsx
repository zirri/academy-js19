const React = require('react');

class AddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: false,
      newItem: ''
    };
  }

  handleChange(e) {
    let valid = false;

    if (
      !e.target.value.includes('@')
    ) {
      this.setState({
        newItem: e.target.value
      });
    }
  }

  handleSubmit(e) {
    if (e.keyCode === 13) {
      this.props.add(this.state.newItem);

      this.setState({
        newItem: ''
      });
    }
  }

  render() {
    const inputFieldStyles = {
      backgroundColor: this.state.valid ? 'green' : 'red',
      color: 'white',
    };

    return (
      <div>
        <input
          style={inputFieldStyles}
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

module.exports = AddItem;
