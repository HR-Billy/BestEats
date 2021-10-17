import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        {meals.map((meal) => (
          <MealCard key={meal.name} meal={meal} />
        ))}
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
