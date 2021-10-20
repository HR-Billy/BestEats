import React from 'react';
import Grid from '@mui/material/Grid';
import { Meal, MealImage } from './mealStyles.jsx';

const MealCard = ({ meal, click }) => (
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
    <Meal onClick={click.bind(null, meal.name)}>
      <MealImage src={meal.photo} alt={meal.name} value={meal.name}/>
      <h2 value={meal.name}>{meal.name}</h2>
      <p value={meal.name}>{meal.description}</p>
      <span value={meal.name}>{meal.time}</span>
      {/* <span></span> */}
    </Meal>
  </Grid>
);

export default MealCard;
