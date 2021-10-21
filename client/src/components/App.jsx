import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Text,
  NavigationBar,
  Login,
  CurrentPage,
  MainSet,
} from './styles.jsx';
import Home from './home/Home.jsx';
import { Context } from '../Context.jsx';
import Store from './grocery_page/Store.jsx';
import FarmersPage from './Farmers/FarmersPage.jsx';
import HealthPage from './Health/HealthPage.jsx';
import Subscribe from './subscription/Subscribe.jsx';
import SignIn from './SignIn.jsx';
import MealPlan from './meals/MealPlan.jsx';
import Profile from './Profile/Profile.jsx';
import mytheme from './theme.jsx';
import AuthButton from './auth/authentication-button.jsx';
import ProtectedRoute from './auth/protected-route.jsx';

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userId, setUserId] = ('');

//   return (
//     <Context.Provider value={{
//       loggedIn,
//       setLoggedIn,
//       userId,
//       setUserId,
//     }}
//     >
//       <div>
//         <ThemeProvider theme={mytheme}>
//           <Router>

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  const [subscribed, setSubscribed] = useState(false);
  console.log(user);

  const addUser = () => {
    const newUser = {
      auth_id: user.sub,
      username: user.nickname,
      email: user.email,
      member_start_date: user.updated_at,
      profile_pic: user.picture,
    };
    axios.post('/member/new', newUser)
      .then((res) => {
        console.log(res);
      })
      .catch(console.log);
  };

  const renderSubscribe = () => {
    if (!subscribed) {
      return (
        <Link to="/subscribe" style={{ textDecoration: 'none' }}>
          <Typography
            color="black"
            align="center"
            variant="h5"
            sx={{ mb: 3, mt: 3, ml: 3 }}
          >
            SUBSCRIBE
          </Typography>
        </Link>
      );
    } return '';
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user.sub);
      axios.get('/member/substatus', user.sub)
        .then((res) => {
          setSubscribed(res);
        })
        .catch(console.log);
    }
  }, [isAuthenticated]);

  return (
    <Context.Provider value={{
      subscribed,
      setSubscribed,
    }}
    >
      <ThemeProvider theme={mytheme}>
        <div>
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
              {renderSubscribe()}
            </MainSet>
            {/* <Link to="/login" style={{ textDecoration: 'none' }}> */}
            <AuthButton />
            {/* <Button variant="contained" sx={{ mt: 3, mx: 3 }}>LOGIN</Button> */}
            {/* </Link> */}
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
              render={() => <MealPlan />}
            />
            <Route exact path="/farmers" component={FarmersPage} />
            <Route
              exact
              path="/store"
              render={() => <h1>Grocery store component goes here</h1>}
            />
            <Route exact path="/health" component={HealthPage} />
            <Route
              exact
              path="/subscribe"
              render={() => <Subscribe />}
            />
            {/* <Route
            exact
            path="/login"
            render={() => (
              <SignIn />
            )}
          /> */}
          </CurrentPage>
          {/* </Router> */}

        </div>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
