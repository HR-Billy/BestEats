import React from 'react';
import { Meals } from './mealStyles.jsx';

const MealCard = ({ meal }) => (
  <Meals>
    <img src={meal.photo} alt={meal.name} />
    <h2>{meal.name}</h2>
    <p>{meal.description}</p>
    <span>{meal.time}</span>
    {/* <span></span> */}
  </Meals>
);

export default MealCard;
