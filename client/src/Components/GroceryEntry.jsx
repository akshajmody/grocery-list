import React from 'react';

const GroceryEntry = ({ handleDelete, grocery }) => (
  <li onClick={() => handleDelete(grocery)}>
    <span> {grocery.item} </span>
    <span> {grocery.quantity} </span>
  </li>
);

export default GroceryEntry;