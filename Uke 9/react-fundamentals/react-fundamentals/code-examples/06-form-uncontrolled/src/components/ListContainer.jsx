const React = require('react');
const AddItem = require('./AddItem.jsx');
const List = require('./List.jsx');

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['buy milk', 'buy porsche', 'clean house']
    };
  }

  handleAddItem(newItem) {
    this.setState({
      items: [
        ...this.state.items,
        newItem,
      ],
    });
  }

  handleRemoveItem(index) {
    const updatedItems = [
      ...this.state.items.slice(0, index),
      ...this.state.items.slice(index + 1),
    ];

    this.setState({
      items: updatedItems
    });
  }

  render() {
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>

          <AddItem
            add={this.handleAddItem.bind(this)}
          />

          <List
            items={this.state.items}
            remove={this.handleRemoveItem.bind(this)}
          />

        </div>
      </div>

    )
  }
}

module.exports = ListContainer;
