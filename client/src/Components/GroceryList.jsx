import React from 'react';
import GroceryEntry from './GroceryEntry.jsx';

const GroceryList = ({ groceries, handleDelete }) => (
  <ul className="groceries">
    {
      groceries.map(grocery => (
        <GroceryEntry grocery={grocery} handleDelete={handleDelete}/>
      ))
    }
  </ul>
);

export default GroceryList;