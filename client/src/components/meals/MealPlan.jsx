import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import mockupMeals from './mockupMeals.jsx';
import MealCard from './MealCard.jsx';
import MealFilter from './MealFilter.jsx';
import {
  MealCards,
  SubscribeBar,
  SubscribeButton,
} from './mealStyles.jsx';

const MealPlan = () => {
  const [meals, setMeals] = useState(mockupMeals);
  const [filteredMeals, setFilteredMeals] = useState(meals);
  // Login Placeholder
  const [loggedIn, setLoggedIn] = useState(false);

  const filterMeals = (filters) => {
    if (filters.length === 0) {
      setFilteredMeals(meals);
    }
    filters.forEach((filter) => {
      const lowerCaseFilter = filter.toLowerCase();
      setFilteredMeals(filteredMeals.filter((meal) => {
        if (meal[lowerCaseFilter]) {
          return meal;
        }
        return null;
      }));
    });
  };

  return (
    <>
      <MealFilter filterMeals={filterMeals} />
      <MealCards>
        <Grid spacing={3} container justify="center">
          {filteredMeals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </Grid>
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
