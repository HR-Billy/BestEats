import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileContext } from './ProfileContext.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import Status from './features/Status.jsx';
import Feed from './features/Feed.jsx';
import Orders from './features/Orders.jsx';
import useStyles from './styles.jsx';

const Profile = () => {
  const { user } = useAuth0();
  const classes = useStyles();
  const authId = user.sub;

  const [profilePhoto, setProfilePhoto] = useState('');
  const [name, setName] = useState(''); // implement later
  const [memberSince, setMemberSince] = useState(''); // implement later
  const [feed, setFeed] = useState([]);
  const [suggestedMeals, setSuggestedMeals] = useState(null); // implement later
  const [recentMeals, setRecentMeals] = useState([]);
  const [arrivingMeals, setArrivingMeals] = useState([]);
  const [mealAverages, setMealAverages] = useState([]);
  const [nutritionFacts, setNutritionFacts] = useState([]);
  const [getNewMealsOn, setGetNewMealsOn] = useState([]); // implement later

  const [products, setProducts] = useState(null);

  const arriving = 'ON ITS WAY:';
  const recent = 'RECENT ORDERS:';
  const suggested = 'SUGGESTED MEALS:';
  const arrivingNone = 'Enjoy Your Meals';
  const recentNone = 'Order More';
  const suggestedNone = 'Update Your Preferences For Suggested Meals';

  useEffect(() => {
    axios.get(`profile/user/?authId=${authId}`)
      .then(({ data }) => {
        const { results } = data[0];

        setProfilePhoto(results.photo);
        setName(results.username);
        setMemberSince(results.memberStartDate);
        setFeed(results.feed);
        setRecentMeals(results.recent);
        setArrivingMeals(results.arriving);
        setMealAverages(results.mealAverages[0]);
        setNutritionFacts(results.nutritionFacts);
        setGetNewMealsOn(results.subscriptionStartSate); // implement later
      });
  }, []);

  return (
    <ProfileContext.Provider value={{
      feed,
      setFeed,
      products,
      nutritionFacts,
      mealAverages,
    }}
    >
      <Container className={classes.wrapper}>
        <Grid container align="center" justify="center" alignItems="center" spacing={3}>

          <Grid item xs={4}>
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <Typography>Welcome {name}&#33;</Typography>
                <Avatar className={classes.profilePhoto} alt="profile picture" src={profilePhoto} />
              </Grid>
              <Grid item xs={12}>
                <NutritionFacts />
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
                  <Orders text={suggested} meals={suggestedMeals} noMeals={suggestedNone} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={recent} meals={recentMeals} noMeals={recentNone} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={arriving} meals={arrivingMeals} noMeals={arrivingNone} />
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
