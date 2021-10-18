import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { ProfileContext } from './ProfileContext.jsx';
import ProfilePic from './features/ProfilePic.jsx';
import NutritionFacts from './features/NutritionFacts.jsx';
import Status from './features/Status.jsx';
import Feed from './features/Feed.jsx';
import Subscribe from './features/Subscribe.jsx';
import Orders from './features/Orders.jsx';
import useStyles from './styles.jsx';

const UserProfile = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const[hasSubsctiption, setHasSubsctiption] = useState([]);

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      <Container className={classes.wrapper}>
        <Grid container spacing={3}>

          <Grid item xs={4}>
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <Paper className={classes.picContainer}>
                  <ProfilePic />
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
              {/* <Grid item xs={12}>
                <Paper className={classes.subscribe}>
                  <Subscribe />
                </Paper>
              </Grid> */}
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={'on its way'} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={'recent orders'} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.orderContainer}>
                  <Orders text={'suggested meals'} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </ProfileContext.Provider>
  );
};

export default UserProfile;
