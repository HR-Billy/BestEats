import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import { Context } from '../../Context.jsx';
import { ProfileContext } from './ProfileContext.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import Status from './features/Status.jsx';
import Feed from './features/Feed.jsx';
import Orders from './features/Orders.jsx';
import useStyles from './styles.jsx';

const Profile = () => {
  const classes = useStyles();
  const { subscribed } = useContext(Context);

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

  const arriving = 'on its way';
  const recent = 'recent orders';
  const suggested = 'suggested meals';

  useEffect(() => {
    axios.get('profile/user/?user_id=1')
    // axios.get(`profile/user/?user_id=${userId}`)
      .then(({ data }) => {
        // console.log(data[0]); DELETE
        const { results } = data[0];

        setProfilePhoto(results.photo);
        setName(results.first_name);
        setMemberSince(results.member_start_date);
        setFeed(results.feed);
        setRecentMeals(results.recent);
        setArrivingMeals(results.arriving);
        setMealAverages(results.meal_averages[0]);
        setNutritionFacts(results.nutrition_facts);

        setGetNewMealsOn(results.subscription_start_date); // implement later
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
        <Grid container spacing={3}>

          <Grid item xs={4}>
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <Paper className={classes.picContainer}>
                  <Avatar className={classes.profilePhoto} alt="profile picture" src={profilePhoto} />
                  {/* <Typography>Welcome {name}</Typography> */}
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
                  <Orders text={suggested} meals={suggestedMeals} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={recent} meals={recentMeals} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={arriving} meals={arrivingMeals} />
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

