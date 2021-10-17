import React, { useState } from 'react';
import mockupMeals from './mockupMeals.jsx';
import MealCard from './MealCard.jsx';
import { SubscribeButton } from './mealStyles.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
      <Router>
        <div className="subscribeBar">
          <Link to="/subscribe">
            <SubscribeButton type="button"> subscribe </SubscribeButton>
          </Link>
        </div>
      </Router>
    </>
  );
};

export default MealPlan;
