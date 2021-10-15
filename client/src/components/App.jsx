import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home.jsx';
import UserProfile from './userProfile/UserProfile.jsx';

const App = () => (
  <Router>
    <div>
      {/* <Header /> */}
      <div>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/profile">
            <UserProfile />
          </Route>

        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
