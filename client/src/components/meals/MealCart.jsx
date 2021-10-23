import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import CartEntry from './CartEntry.jsx';
import { StyledCart, MealsLeft, RemainingMeals } from './mealStyles.jsx';

const MealCart = ({
  cart,
  setCart,
  total,
  setTotal,
  weeklyMeals,
}) => {
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
            <div>
              <Typography variant="h2"> Choose Your Meals </Typography>
              {Object.keys(cart).map((item) => (
                <CartEntry
                  key={item}
                  item={item}
                  quantity={cart[item]}
                  changeHandler={changeQuantity}
                  remove={removeFromCart}
                  weeklyMeals={weeklyMeals}
                  total={total}
                />
              ))}
              <Link to="/meal-plan/thankyou" style={{ textDecoration: 'none' }}>
                <Button variant="contained"> Confirm </Button>
              </Link>
            </div>
            <RemainingMeals>
              <Typography>
                <MealsLeft>
                  Meals Left:&nbsp;
                  {weeklyMeals - total}
                </MealsLeft>
              </Typography>
            </RemainingMeals>
          </StyledCart>
        )}
    </>
  );
};

MealCart.propTypes = {
  cart: PropTypes.shape({
  }).isRequired,
  setCart: PropTypes.func.isRequired,
  weeklyMeals: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
};

export default MealCart;
