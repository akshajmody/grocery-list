import React from 'react';
import GroceryPicture from './GroceryPicture.jsx';
import GroceryForm from './GroceryForm.jsx';
import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { item: 'Apple', quantity: 1}
      ]
    };

    this.handleItemSubmit = this.handleItemSubmit.bind(this);
  }

  handleItemSubmit(item) {
    console.log('Made it to App handleSUbmit');
    console.log(item);
    const groceries = [...this.state.groceries];
    groceries.push(item);
    this.setState({ groceries }); // this.setSTate({ groceries: groceries })
  }

  render() {
    return (
      <div>HELLO FROM APP
        <GroceryPicture />
        <GroceryForm handleSubmit={this.handleItemSubmit} />
        <GroceryList />
      </div>
    )
  }
}

export default App;