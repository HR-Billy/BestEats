import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Context } from '../Context.jsx';
import Store from './grocery_page/Store.jsx';
import FarmersPage from './Farmers/FarmersPage.jsx';
import Subscribe from './subscription/Subscribe.jsx';
import SignIn from './SignIn.jsx';
import Profile from './profile/Profile.jsx';
import {
  Text, NavigationBar, Login, CurrentPage, MainSet,
} from './styles.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = ('');

  return (
    <Context.Provider value={{
      loggedIn,
      setLoggedIn,
      userId,
      setUserId,
    }}
    >
      <div>
        <Router>
          <NavigationBar>
            <MainSet>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Text>Home</Text>
              </Link>
              <Link to="/meal-plan" style={{ textDecoration: 'none' }}>
                <Text>Meals</Text>
              </Link>
              <Link to="/farmers" style={{ textDecoration: 'none' }}>
                <Text>Farmers</Text>
              </Link>
              <Link to="/store" style={{ textDecoration: 'none' }}>
                <Text>Store</Text>
              </Link>
              <Link to="/health" style={{ textDecoration: 'none' }}>
                <Text>Health</Text>
              </Link>
              <Link to="/subscribe" style={{ textDecoration: 'none' }}>
                <Text>Subscribe</Text>
              </Link>
            </MainSet>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Login>Login</Login>
            </Link>
          </NavigationBar>
          <CurrentPage>
            <Route
              exact
              path="/"
              render={() => <h1>Home component goes here</h1>}
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
              render={() => (
                <Store />
              )}
            />
            <Route
              exact
              path="/health"
              render={() => <h1>Health section component goes here</h1>}
            />
            <Route
              exact
              path="/subscribe"
              render={() => (
                <Subscribe />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <SignIn />
              )}
            />
            <Route
              exact
              path="/profile"
              render={() => (
                <Profile />
              )}
            />
          </CurrentPage>
        </Router>
      </div>
    </Context.Provider>
  );
};

export default App;
