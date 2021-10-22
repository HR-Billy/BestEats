import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import { QuantityInput, QuantitySet } from './mealStyles.jsx';

const CartEntry = ({
  item,
  quantity,
  changeHandler,
  remove,
}) => (
  <>
    <Typography><span>{item}</span></Typography>
    <QuantitySet>
      <QuantityInput type="number" name={item} value={quantity} onChange={changeHandler} min={1} />
      <Button name={item} onClick={remove}>Remove</Button>
      <br />
    </QuantitySet>
  </>
);

CartEntry.propTypes = {
  item: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default CartEntry;
