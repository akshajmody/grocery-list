import React from 'react';

class GroceryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const grocery = {
      item: this.state.item,
      quantity: this.state.quantity
    }

    this.props.handleSubmit(grocery);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Item
          <input name="item" value={this.state.item} onChange={this.handleInputChange} />
        </label>
        <label> Qunatity
          <input name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
        </label>
        <button>Add Grocery</button>
      </form>
    );
  }
}


export default GroceryForm;