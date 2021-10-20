import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Avatar } from '@mui/material';
import { ProfileContext } from './ProfileContext.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import Status from './features/Status.jsx';
import Feed from './features/Feed.jsx';
import Orders from './features/Orders.jsx';
import useStyles from './styles.jsx';

const Profile = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState('');
  const [feed, setFeed] = useState([]);
  const [nutritionFacts, setNutritionFacts] = useState([]);
  const [status, setStatus] = useState('');

  const arriving = 'on its way';
  const recent = 'recent orders';
  const suggested = 'suggested meals';

  useEffect(() => {
    axios.get('profile/user/?user_id=4')
      .then(({ data }) => {
        console.log(data);
      });
  });

  return (
    <ProfileContext.Provider value={{
      user,
      setUser,
      profilePhoto,
      setProfilePhoto,
      feed,
      setFeed,
      nutritionFacts,
      setNutritionFacts,
      status,
      setStatus,
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
