import React from 'react';

const CartEntry = ({ item, quantity, changeHandler, remove }) => (
  <>
    <p>{item}</p>
    <input type="number" name={item} value={quantity} onChange={changeHandler} min="1" />
    <button type="button" name={item} onClick={remove}>Remove</button>
  </>
);

export default CartEntry;
