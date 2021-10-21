import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import {
  Text,
  NavigationBar,
  Login,
  CurrentPage,
  MainSet,
} from './styles.jsx';
import Home from './home/Home.jsx';
import { Context } from '../Context.jsx';
import Store from './grocery_page/Store.jsx';
import FarmersPage from './Farmers/FarmersPage.jsx';
import HealthPage from './Health/HealthPage.jsx';
import Subscribe from './subscription/Subscribe.jsx';
import SignIn from './SignIn.jsx';
import MealPlan from './meals/MealPlan.jsx';
import Profile from './Profile/Profile.jsx';
import mytheme from './theme.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(Math.round((Math.random() * 500) + 1));

  return (
    <Context.Provider value={{
      loggedIn,
      setLoggedIn,
      userId,
      setUserId,
    }}
    >
      <div>
        <ThemeProvider theme={mytheme}>
          <Router>
            <NavigationBar>
              <MainSet>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    color="black"
                    align="center"
                    variant="h5"
                // sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
                    sx={{ mb: 3, mt: 3, ml: 3 }}
                  >
                    HOME
                  </Typography>
                </Link>
                <Link to="/meal-plan" style={{ textDecoration: 'none' }}>
                  <Typography
                    color="black"
                    align="center"
                    variant="h5"
                    sx={{ mb: 3, mt: 3, ml: 3 }}
                  >
                    MEALS
                  </Typography>
                </Link>
                <Link to="/farmers" style={{ textDecoration: 'none' }}>
                  <Typography
                    color="black"
                    align="center"
                    variant="h5"
                    sx={{ mb: 3, mt: 3, ml: 3 }}
                  >
                    FARMERS
                  </Typography>
                </Link>
                <Link to="/store" style={{ textDecoration: 'none' }}>
                  <Typography
                    color="black"
                    align="center"
                    variant="h5"
                    sx={{ mb: 3, mt: 3, ml: 3 }}
                  >
                    STORE
                  </Typography>
                </Link>
                <Link to="/health" style={{ textDecoration: 'none' }}>
                  <Typography
                    color="black"
                    align="center"
                    variant="h5"
                    sx={{ mb: 3, mt: 3, ml: 3 }}
                  >
                    LIFESTYLE
                  </Typography>
                </Link>
                <Link to="/subscribe" style={{ textDecoration: 'none' }}>
                  <Typography
                    color="black"
                    align="center"
                    variant="h5"
                    sx={{ mb: 3, mt: 3, ml: 3 }}
                  >
                    MEMBERSHIP
                  </Typography>
                </Link>
              </MainSet>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button>LOGIN</Button>
              </Link>
            </NavigationBar>
            <CurrentPage>
              <Route
                exact
                path="/"
                render={() => (
                  <Home />
                )}
              />
              <Route
                exact
                path="/meal-plan"
                render={() => <MealPlan />}
              />
              <Route exact path="/farmers" component={FarmersPage} />
              <Route
                exact
                path="/store"
                render={() => <h1>Grocery store component goes here</h1>}
              />
              <Route exact path="/health" component={HealthPage} />
              <Route
                exact
                path="/subscribe"
                render={() => <Subscribe />}
              />
              <Route
                exact
                path="/login"
                render={() => (
                  <SignIn />
                )}
              />
            </CurrentPage>
          </Router>

        </ThemeProvider>
      </div>
    </Context.Provider>

  );
};

export default App;
