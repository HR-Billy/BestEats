import React from 'react';
import { QuantityInput } from './mealStyles.jsx';

const CartEntry = ({ item, quantity, changeHandler, remove }) => (
  <>
    <span>{item} </span>
    <QuantityInput type="number" name={item} value={quantity} onChange={changeHandler} min="1" />
    <button type="button" name={item} onClick={remove}>Remove</button>
  </>
);

export default CartEntry;
