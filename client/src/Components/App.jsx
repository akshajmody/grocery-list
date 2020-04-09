import React from 'react';
import GroceryPicture from './GroceryPicture.jsx';
import GroceryForm from './GroceryForm.jsx';
import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { item: 'Apple', quantity: 1},
        { item: 'Pear', quantity: 5}
      ]
    };

    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
  }

  handleItemSubmit(item) {
    console.log('Made it to App handleSUbmit');
    console.log(item);
    const groceries = [...this.state.groceries];
    groceries.push(item);
    this.setState({ groceries }); // this.setSTate({ groceries: groceries })
  }

  handleDelete(grocery) {
    const groceries = [...this.state.groceries];
    const filtered = groceries.filter(item => item !== grocery);
    this.setState({ groceries: filtered })
  }

  render() {
    return (
      <div>HELLO FROM APP
        <GroceryPicture />
        <GroceryForm handleSubmit={this.handleItemSubmit} />
        <GroceryList groceries={this.state.groceries} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App;