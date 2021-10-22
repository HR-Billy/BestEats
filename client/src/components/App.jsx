import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
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
import Profile from './Profile/Profile.jsx';
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
          <Router>
            <NavigationBar>
              <MainSet>
                <Link to="/" style={{ textDecoration: 'none', margin: "0 0 0 10px", padding: "0 0 0 0", display: 'flex' }}>
                  {/* <img src="https://images-ext-1.discordapp.net/external/NCEtE_ht5rE9qkVsUk_dtfzbwKvSCGZ1bB4s_kDyIR0/https/static.vecteezy.com/system/resources/previews/002/285/940/original/green-heeathy-food-with-spoon-fork-logo-free-vector.jpg?width=1008&height=1008" alt="best eats logo" height="80px" /> */}
                  <img src="https://www.graphicsprings.com/filestorage/stencils/1c3f83b24f3cd7029f90f9f6e250d09d.png?width=500&height=500" alt="best eats logo" height="70px" />
                  <Typography
                    // color="#F24B6A"
                    color="#B0C800"
                    align="center"
                    variant="h4"
                    sx={{ mb: 3, mt: 3, ml: 0, mr: 5, fontFamily: "Kalam", fontSize: "25px", fontWeight: 'bold' }}
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
              <Link to="/login" style={{ textDecoration: 'none', marginRight: '20px' }}>
                <Typography
                  color="black"
                  align="center"
                  variant="h5"
                  sx={{ mb: 3, mt: 3, ml: 3 }}
                >
                  LOGIN
                </Typography>
              </Link>
              {/* <AuthButton /> */}
            </NavigationBar>
            <CurrentPage>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/meal-plan" render={() => <MealPlan />} />
              <Route exact path="/farmers" component={FarmersPage} />
              <Route exact path="/store" render={() => <Store />} />
              <Route exact path="/health" component={HealthPage} />
              <Route exact path="/subscribe" render={() => <Subscribe />} />
              <Route exact path="/login" render={() => <SignIn />} />
            </CurrentPage>
          </Router>
        </ThemeProvider>
      </div>
    </Context.Provider>
  );
};

export default App;
