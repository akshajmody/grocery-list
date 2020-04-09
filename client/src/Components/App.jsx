import React from 'react';
import GroceryPicture from './GroceryPicture.jsx';
import GroceryForm from './GroceryForm.jsx';
import GroceryList from './GroceryList.jsx';
import { ajax } from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    };

    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.fetchGroceries = this.fetchGroceries.bind(this);
    this.addGroceries = this.addGroceries.bind(this);
  }

  componentDidMount() {
    this.fetchGroceries();
  }

  fetchGroceries() {
    ajax({
      url: 'http://localhost:3000/items',
      method: 'GET',
      success: groceries => this.setState({ groceries }),
      error: error => console.log(error)
    });
  }

  addGroceries(item) {
    ajax({
      url: 'http://localhost:3000/items',
      method: 'POST',
      data: item,
      success: this.fetchGroceries,
      error: error => console.log(error)
    })
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
        <GroceryForm handleSubmit={this.addGroceries} />
        <GroceryList groceries={this.state.groceries} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App;