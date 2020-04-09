import React from 'react';
import GroceryEntry from './GroceryEntry.jsx';

const GroceryList = props => (
  <ul className="groceries">
    <GroceryEntry />
  </ul>
);

export default GroceryList;