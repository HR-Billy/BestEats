import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Container, Grid, Paper, Avatar } from '@mui/material';
import { Context } from '../../Context.jsx';
import { ProfileContext } from './ProfileContext.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import Status from './features/Status.jsx';
import Feed from './features/Feed.jsx';
import Orders from './features/Orders.jsx';
import useStyles from './styles.jsx';

const Profile = () => {
  const classes = useStyles();
  const { userId } = useContext(Context);
  const [profilePhoto, setProfilePhoto] = useState('');
  const [feed, setFeed] = useState([]);
  const [products, setProducts] = useState([]);
  const [yourMeals, setYourMeals] = useState([]);

  const arriving = 'on its way';
  const recent = 'recent orders';
  const suggested = 'suggested meals';

  useEffect(() => {
    axios.get('profile/user/?user_id=10')
    // axios.get(`profile/user/?user_id=${userId}`)
      .then(({ data }) => {
        console.log(data[0]);
        const { results } = data[0];

        setProfilePhoto(results.photo);
        setFeed(results.feed);
        setProducts(results.products);
        yourMeals(results.meals);
      });
  }, []);

  return (
    <ProfileContext.Provider value={{
      feed,
      setFeed,
      products,
      yourMeals,
    }}
    >
      <Container className={classes.wrapper}>
        <Grid container spacing={3}>

          <Grid item xs={4}>
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <Paper className={classes.picContainer}>
                  <Avatar className={classes.profilePhoto} alt="profile picture" src={profilePhoto} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.nutritionContainer}>
                  <NutritionFacts />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.statusContainer}>
                  <Status />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.feedContainer}>
                  <Feed />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={arriving} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={recent} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={suggested} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </ProfileContext.Provider>
  );
};

export default Profile;
