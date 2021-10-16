import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Router>
      <div>
        <Link to="/">Home </Link>
        <Link to="/meal-plan">Meals </Link>
        <Link to="/farmers">Farmers </Link>
        <Link to="/store">Store </Link>
        <Link to="/healthy">Health </Link>
        <Link to="/subscribe">Subscribe</Link>
      </div>
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
        path="/healthy"
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
    </Router>
  </div>
);

export default App;
