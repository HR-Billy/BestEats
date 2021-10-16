import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx'
import Footer from './Footer.jsx';
// import Home from './home/Home.jsx';
import UserProfile from './profile/UserProfile.jsx';
import { Wrapper } from './styles.jsx';

const App = () => (
  <Router>
    <Wrapper>
      <Header />
      <div>
        <Switch>

          <Route exact path="/">
            {/* <Home /> */}
          </Route>

          <Route path="/profile">
            <UserProfile />
          </Route>

        </Switch>
      </div>
      <Footer />
    </Wrapper>
  </Router>
);

export default App;
