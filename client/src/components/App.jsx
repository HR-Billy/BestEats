import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Text, NavigationBar, Login, CurrentPage, MainSet } from './styles.jsx';
import Store from './grocery_page/Store.jsx';
import FarmersPage from './Farmers/FarmersPage.jsx';
import SignIn from './SignIn.jsx';
import Subscribe from './subscription/Subscribe.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import AuthButton from './auth/authentication-button.jsx';
import ProtectedRoute from './auth/protected-route.jsx';

const App = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
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
          <AuthButton />
        </MainSet>

        {/* <Link to="/login" style={{ textDecoration: 'none' }}>
            <Login>Login</Login>
          </Link> */}
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
        <ProtectedRoute exact path="/farmers" component={FarmersPage} />
        <Route exact path="/store" render={() => <Store />} />
        <Route
          exact
          path="/health"
          render={() => <h1>Health section component goes here</h1>}
        />
        <Route
          exact
          path="/subscribe"
          render={() => <Subscribe />}
        />
        <Route exact path="/login" render={() => <SignIn />} />
      </CurrentPage>
    </div>
  );
};

export default App;
