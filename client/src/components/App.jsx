import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Context } from '../Context.jsx';
import {
  Text,
  NavigationBar,
  Login,
  CurrentPage,
  MainSet,
} from './styles.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Context.Provider values={{ loggedIn, setLoggedIn }}>
      <div>
        <Router>
          <NavigationBar>
            <MainSet>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Text>
                  Home
                </Text>
              </Link>
              <Link to="/meal-plan" style={{ textDecoration: 'none' }}>
                <Text>
                  Meals
                </Text>
              </Link>
              <Link to="/farmers" style={{ textDecoration: 'none' }}>
                <Text>
                  Farmers
                </Text>
              </Link>
              <Link to="/store" style={{ textDecoration: 'none' }}>
                <Text>
                  Store
                </Text>
              </Link>
              <Link to="/health" style={{ textDecoration: 'none' }}>
                <Text>
                  Health
                </Text>
              </Link>
              <Link to="/subscribe" style={{ textDecoration: 'none' }}>
                <Text>
                  Subscribe
                </Text>
              </Link>
            </MainSet>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Login>
                Login
              </Login>
            </Link>
          </NavigationBar>
          <CurrentPage>
            <Route
              exact
              path="/"
              render={() => (
                <h1>Home component goes here</h1>
              )}
            />
            <Route
              exact
              path="/meal-plan"
              render={() => (
                <h1>Meal Plan component goes here</h1>
              )}
            />
            <Route
              exact
              path="/farmers"
              render={() => (
                <h1>Meet the farmers component goes here</h1>
              )}
            />
            <Route
              exact
              path="/store"
              render={() => (
                <h1>Grocery store component goes here</h1>
              )}
            />
            <Route
              exact
              path="/health"
              render={() => (
                <h1>Health section component goes here</h1>
              )}
            />
            <Route
              exact
              path="/subscribe"
              render={() => (
                <h1>Subscription component goes here</h1>
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <h1> Login component goes here </h1>
              )}
            />
          </CurrentPage>
        </Router>
      </div>
    </Context.Provider>
  );
};

export default App;
