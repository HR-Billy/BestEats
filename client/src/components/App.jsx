import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Typography, Avatar } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Text, NavigationBar, Login, CurrentPage, MainSet,
} from './styles.jsx';
import Home from './home/Home.jsx';
import { Context } from '../Context.jsx';
import Store from './grocery_page/Store.jsx';
import FarmersPage from './Farmers/FarmersPage.jsx';
import HealthPage from './Health/HealthPage.jsx';
import Subscribe from './subscription/Subscribe.jsx';
import SubLanding from './subscription/SubLanding.jsx';
import MealPlan from './meals/MealPlan.jsx';
import Profile from './profile/Profile.jsx';
import mytheme from './theme.jsx';
import AuthButton from './auth/authentication-button.jsx';
import ProtectedRoute from './auth/protected-route.jsx';

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
    axios.post('api/member/new', newUser)
      .then((res) => {
        console.log(res.data);
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
      const newUser = {
        auth_id: user.sub,
        username: user.nickname,
        email: user.email,
        member_start_date: user.updated_at,
        profile_pic: user.picture,
      };
      axios.post('api/member/login', newUser)
        .then((res) => {
          console.log(res.data);
          setSubscribed(res.data);
          renderSubscribe();
        })
        .catch(console.log('error with get request'));
    }
  }, [isAuthenticated]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log(user.sub);
  //     const request = {
  //       auth_id: user.sub,
  //     };
  //     // check if current user exists in user table
  //     axios.post('api/member/status', request)
  //       .then((res) => {
  //         console.log('user status', res.data);
  //         // if exists, check subscription status
  //         if (res.data) {
  //           axios.post('api/member/substatus', request)
  //             .then((nextres) => {
  //               console.log(nextres.data);
  //               setSubscribed(nextres.data);
  //               renderSubscribe();
  //             })
  //             .catch(console.log('error with get request'));
  //         // if not, add user. keep subscribe = false.
  //         } else {
  //           addUser();
  //         }
  //       });
  //   }
  // }, [isAuthenticated]);

  return (
    <Context.Provider value={{
      subscribed,
      setSubscribed,
    }}
    >
      <div>
        <ThemeProvider theme={mytheme}>
          <Router>
            <NavigationBar>
              <MainSet>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none', margin: '0 0 0 10px', padding: '0 0 0 0', display: 'flex',
                  }}
                >
                  <img src="https://www.graphicsprings.com/filestorage/stencils/1c3f83b24f3cd7029f90f9f6e250d09d.png?width=500&height=500" alt="best eats logo" height="70px" />
                  <Typography
                    color="#B0C800"
                    align="center"
                    variant="h4"
                    sx={{
                      mb: 3, mt: 3, ml: 0, mr: 5, fontFamily: 'Kalam', fontSize: '25px', fontWeight: 'bold',
                    }}
                  >
                    Best Eats
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
                    GROCERY
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
              <Link to="/profile" style={{ textDecoration: 'none', marginRight: '20px' }}>
                {user && <Avatar align="center" variant="h5" sx={{ mb: 3, mt: 3, ml: 3 }} />}
              </Link>
              <AuthButton />
            </NavigationBar>
            <CurrentPage>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/meal-plan" render={() => <MealPlan />} />
              <Route exact path="/farmers" component={FarmersPage} />
              <Route exact path="/store" render={() => <Store />} />
              <Route exact path="/health" component={HealthPage} />
              <Route exact path="/subscribe" component={isAuthenticated ? Subscribe : SubLanding} />
              <ProtectedRoute exact path="/profile" component={Profile} />
            </CurrentPage>
          </Router>
        </ThemeProvider>
      </div>
    </Context.Provider>
  );
};

export default App;
