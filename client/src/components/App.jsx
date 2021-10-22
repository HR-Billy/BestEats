import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Typography, Avatar } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { Text, NavigationBar, Login, CurrentPage, MainSet } from './styles.jsx';
import Home from './home/Home.jsx';
import { Context } from '../Context.jsx';
import Store from './grocery_page/Store.jsx';
import FarmersPage from './Farmers/FarmersPage.jsx';
import HealthPage from './Health/HealthPage.jsx';
import Subscribe from './subscription/Subscribe.jsx';
import SignIn from './SignIn.jsx';

import AuthButton from './auth/authentication-button.jsx';
import ProtectedRoute from './auth/protected-route.jsx';
import MealPlan from './meals/MealPlan.jsx';
import Profile from './profile/Profile.jsx';
import mytheme from './theme.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = '';
  const { user } = useAuth0();
  console.log(user);

  return (
    <Context.Provider
      value={{
        loggedIn,
        setLoggedIn,
        userId,
        setUserId,
      }}
    >
      <div>
        <ThemeProvider theme={mytheme}>
          <NavigationBar>
            <MainSet>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  margin: '0 0 0 10px',
                  padding: '0 0 0 0',
                  display: 'flex',
                }}
              >
                <img
                  src="https://www.graphicsprings.com/filestorage/stencils/1c3f83b24f3cd7029f90f9f6e250d09d.png?width=500&height=500"
                  alt="best eats logo"
                  height="70px"
                />
                <Typography
                  color="#B0C800"
                  align="center"
                  variant="h4"
                  sx={{
                    mb: 3,
                    mt: 3,
                    ml: 0,
                    mr: 5,
                    fontFamily: 'Kalam',
                    fontSize: '25px',
                    fontWeight: 'bold',
                  }}
                >
                  Best Eats
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
                  GROCERY
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
            <Link
              to="/profile"
              style={{ textDecoration: 'none', marginRight: '20px' }}
            >
              <Avatar
                align="center"
                variant="h5"
                sx={{ mb: 3, mt: 3, ml: 3 }}
              />
            </Link>
            <AuthButton />
          </NavigationBar>
          <CurrentPage>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/meal-plan" render={() => <MealPlan />} />
            <Route exact path="/farmers" component={FarmersPage} />
            <Route exact path="/store" render={() => <Store />} />
            <Route exact path="/health" component={HealthPage} />
            <Route exact path="/subscribe" render={() => <Subscribe />} />
            <ProtectedRoute exact path="/profile" component={Profile} />
          </CurrentPage>
        </ThemeProvider>
      </div>
    </Context.Provider>
  );
};

export default App;
