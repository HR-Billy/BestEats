import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
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
              <Text>HOME</Text>
            </Link>
            <Link to="/meal-plan" style={{ textDecoration: 'none' }}>
              <Text>MEALS</Text>
            </Link>
            <Link to="/farmers" style={{ textDecoration: 'none' }}>
              <Text>FARMERS</Text>
            </Link>
            <Link to="/store" style={{ textDecoration: 'none' }}>
              <Text>STORE</Text>
            </Link>
            <Link to="/health" style={{ textDecoration: 'none' }}>
              <Text>HEALTH</Text>
            </Link>
            <Link to="/subscribe" style={{ textDecoration: 'none' }}>
              <Text>SUBSCRIBE</Text>
            </Link>
          </MainSet>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Login>LOGIN</Login>
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
