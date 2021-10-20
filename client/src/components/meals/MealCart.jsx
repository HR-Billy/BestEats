import React, { useState, useEffect } from 'react';
import CartEntry from './CartEntry.jsx';
import { StyledCart } from './mealStyles.jsx';

const MealCart = ({ cart, setCart }) => {
  // const [total, setTotal] = useState(0);
  const [accordion, setAccordion] = useState(false);

  const checkCart = () => {
    if (Object.keys(cart).length > 0) {
      setAccordion(true);
    } else {
      setAccordion(false);
    }
  };

  const changeQuantity = (event) => {
    setCart({ ...cart, [event.target.name]: event.target.value });
  };

  const removeFromCart = (event) => {
    const { [event.target.name]: omit, ...rest } = cart;
    setCart(rest);
  };

  useEffect(
    checkCart, [cart],
  );

  return (
    <>
      {accordion
        && (
          <StyledCart>
            <h1> Choose Your Meals </h1>
            {Object.keys(cart).map((item) => (
              <CartEntry
                key={item}
                item={item}
                quantity={cart[item]}
                changeHandler={changeQuantity}
                remove={removeFromCart}
              />
            ))}
            <button type="button"> Confirm </button>
          </StyledCart>
        )}
    </>
  );
};

export default MealCart;
