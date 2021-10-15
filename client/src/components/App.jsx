import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const routeExample = () => (
  <>
    <div>
      Route Works 1
    </div>
    <Link to="/">Home</Link>
  </>
);

const App = () => (
  <Router>
    <Route
      exact
      path="/"
      render={() => (
        <h1>
          <Link to="/besteats">
            Best Eats
          </Link>
        </h1>
      )}
    />
    <Route path="/besteats" component={routeExample} />
  </Router>
);

export default App;
