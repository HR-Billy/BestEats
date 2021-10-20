import React from 'react';
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
import FarmersPage from './Farmers/FarmersPage.jsx';
import SignIn from './SignIn.jsx';
import mytheme from './theme.jsx';

const App = () => (
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
            <Button
              color="secondary"
              align="center"
              size="large"
              sx={{ mb: 3, mt: 2, ml: 2 }}
            >
              LOGIN

            </Button>
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
            render={() => <h1>Meal Plan component goes here</h1>}
          />
          <Route exact path="/farmers" component={FarmersPage} />
          <Route
            exact
            path="/store"
            render={() => <h1>Grocery store component goes here</h1>}
          />
          <Route
            exact
            path="/health"
            render={() => <h1>Health section component goes here</h1>}
          />
          <Route
            exact
            path="/subscribe"
            render={() => <h1>Subscription component goes here</h1>}
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
);

export default App;
