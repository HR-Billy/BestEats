import React from 'react';
import Grid from '@mui/material/Grid';
import { Meal, MealImage } from './mealStyles.jsx';

const MealCard = ({ meal }) => (
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
    <Meal>
      <MealImage src={meal.photo} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
      <span>{meal.time}</span>
      {/* <span></span> */}
    </Meal>
  </Grid>
);

export default MealCard;
