import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { QuantityInput } from './mealStyles.jsx';

const CartEntry = ({
  item,
  quantity,
  changeHandler,
  remove,
}) => (
  <>
    <span>{item}</span>
    <QuantityInput type="number" name={item} value={quantity} onChange={changeHandler} min={1} />
    <Button name={item} onClick={remove}>Remove</Button>
    <br />
  </>
);

CartEntry.propTypes = {
  item: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default CartEntry;
