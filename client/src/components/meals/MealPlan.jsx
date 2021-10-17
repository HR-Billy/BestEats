import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import mockupMeals from './mockupMeals.jsx';
import MealCard from './MealCard.jsx';
import { SubscribeButton } from './mealStyles.jsx';

const MealPlan = () => {
  const [meals, setMeals] = useState(mockupMeals);

  // const onSubscribe = () => {
  // };

  return (
    <>
      <div className="productCards">
        <Grid spacing={2} container justify="center">
          {meals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
        </Grid>
      </div>
      <div className="subscribeBar">
        <Link to="/subscribe">
          <SubscribeButton type="button"> Subscribe </SubscribeButton>
        </Link>
      </div>
    </>
  );
};

export default MealPlan;
