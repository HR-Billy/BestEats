import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import mockupMeals from './mockupMeals.jsx';
import MealCard from './MealCard.jsx';
import MealFilter from './MealFilter.jsx';
import MealCart from './MealCart.jsx';
import {
  MealCards,
  SubscribeBar,
  SubscribeButton,
} from './mealStyles.jsx';

const MealPlan = () => {
  const [meals, setMeals] = useState(mockupMeals);
  const [filteredMeals, setFilteredMeals] = useState(meals);
  const [cart, setCart] = useState({});
  // Login Placeholder
  const [loggedIn, setLoggedIn] = useState(true);

  const filterMeals = (filters) => {
    // Show all meals when there are no filters
    if (filters.length === 0) {
      setFilteredMeals(meals);
    }
    // Check meals for each filter
    filters.forEach((filter) => {
      // Change filter to be in the same format as database
      let lowerCaseFilter = filter.toLowerCase();
      if (lowerCaseFilter.indexOf(' ') !== -1) {
        const index = lowerCaseFilter.indexOf(' ');
        lowerCaseFilter = `${lowerCaseFilter.substring(0, index)}_${lowerCaseFilter.substring(index + 1)}`;
      }
      // Filter meals
      setFilteredMeals(filteredMeals.filter((meal) => {
        if (meal[lowerCaseFilter]) {
          return meal;
        }
        return null;
      }));
    });
  };

  const addToCart = (mealName) => {
    const item = { [mealName]: 1 };
    setCart({ ...cart, ...item });
  };

  const fillerFunction = () => (
    null
  );

  return (
    <>
      <MealFilter filterMeals={filterMeals} />
      <MealCards>
        <Grid spacing={3} container justify="center">
          {filteredMeals.map((meal) => (
            !loggedIn ? (
              <MealCard key={meal.name} meal={meal} click={fillerFunction} />
            ) : (
              <MealCard key={meal.name} meal={meal} click={addToCart} />
            )
          ))}
        </Grid>
        <MealCart cart={cart} setCart={setCart} />
      </MealCards>
      {!loggedIn
        && (
        <SubscribeBar>
          <Link to="/subscribe">
            <SubscribeButton type="button"> Subscribe </SubscribeButton>
          </Link>
        </SubscribeBar>
        )}
    </>
  );
};

export default MealPlan;
