import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, Button, Typography } from '@mui/material';
import MealCard from './MealCard.jsx';
import MealFilter from './MealFilter.jsx';
import MealCart from './MealCart.jsx';
import {
  MealCards,
  SubscribeBar,
  SubscribeButton,
} from './mealStyles.jsx';

const MealPlan = () => {
  // Authentication
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  // Hooks
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState(meals);
  const [cart, setCart] = useState({});
  const [loggedIn, setLoggedIn] = useState(isAuthenticated);
  const [isMember, setIsMember] = useState(false);

  // Preload Information
  const getMeals = () => {
    axios.get('/meal-plan/meals')
      .then((response) => {
        setMeals(response.data);
        setFilteredMeals(response.data);
      });
  };

  const getSubscriberStatus = () => {
    axios.get(`/meal-plan/user/${user.sub}`)
      .then((response) => {
        setIsMember(response.data[0].subscribed);
      });
  };

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

  // Add to cart if subscribed
  const addToCart = (mealName) => {
    const item = { [mealName]: 1 };
    setCart({ ...cart, ...item });
  };

  const fillerFunction = () => (
    null
  );

  // Get info/subscriber status (need to fix)
  useEffect(() => {
    getMeals();
    if (isAuthenticated) {
      getSubscriberStatus();
    }
  }, [isAuthenticated]);

  return (
    <>
      {(!loggedIn || !isMember) ? (
        <Typography variant="h1" align="center">
          Be Sure to Subscibe!
        </Typography>
      ) : (
        <Typography variant="h1" align="center">
          Select from the menu with a click!
        </Typography>
      )}
      <MealFilter filterMeals={filterMeals} />
      <MealCards>
        <Grid spacing={3} container justify="center">
          {filteredMeals.map((meal) => (
            !isMember ? (
              <MealCard key={meal.meal_name} meal={meal} click={fillerFunction} />
            ) : (
              <MealCard key={meal.meal_name} meal={meal} click={addToCart} />
            )
          ))}
        </Grid>
        <MealCart cart={cart} setCart={setCart} />
      </MealCards>
      {!loggedIn
        && (
          <SubscribeBar>
            <SubscribeButton>
              <Button
                variant="contained"
                sx={{ m: 1, width: 300, fontSize: 30 }}
                onClick={() => {
                  loginWithRedirect({
                    appState: { returnTo: '/subscribe' },
                  });
                }}
              >
                Subscribe
              </Button>
            </SubscribeButton>
          </SubscribeBar>
        )}
      {(loggedIn && !isMember)
        && (
          <SubscribeBar>
            <SubscribeButton>
              <Link to="/subscribe" style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ m: 1, width: 300, fontSize: 30 }}> Subscribe </Button>
              </Link>
            </SubscribeButton>
          </SubscribeBar>
        )}
    </>
  );
};

export default MealPlan;
