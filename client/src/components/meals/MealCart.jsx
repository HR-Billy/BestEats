import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@mui/material';
import CartEntry from './CartEntry.jsx';
import { StyledCart } from './mealStyles.jsx';

const MealCart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const [accordion, setAccordion] = useState(false);

  const checkCart = () => {
    if (Object.keys(cart).length > 0) {
      setAccordion(true);
    } else {
      setAccordion(false);
    }
  };

  const countTotal = () => {
    let sum = 0;
    Object.values(cart).forEach((value) => {
      sum += Number(value);
    });
    setTotal(sum);
  };

  const changeQuantity = (event) => {
    setCart({ ...cart, [event.target.name]: event.target.value });
  };

  const removeFromCart = (event) => {
    const { [event.target.name]: omit, ...rest } = cart;
    setCart(rest);
  };

  useEffect(() => {
    checkCart();
    countTotal();
  }, [cart]);

  return (
    <>
      {accordion
        && (
          <StyledCart>
            <Typography variant="h2"> Choose Your Meals </Typography>
            {Object.keys(cart).map((item) => (
              <CartEntry
                key={item}
                item={item}
                quantity={cart[item]}
                changeHandler={changeQuantity}
                remove={removeFromCart}
              />
            ))}
            <Button variant="contained"> Confirm </Button>
          </StyledCart>
        )}
    </>
  );
};

MealCart.propTypes = {
  cart: PropTypes.shape({
  }).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default MealCart;
