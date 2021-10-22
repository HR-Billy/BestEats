import React from 'react';
import {
  Grid, Typography, Paper, Avatar,
} from '@mui/material';
import useStyles from '../styles.jsx';

const Orders = ({ text, meals, noMeals }) => {
  const classes = useStyles();
  let orders;

  if (meals) {
    orders = meals.map((meal) => {
      const { mealId, mealPhoto, mealName} = meal;

      return (
        <Grid item xs={4} key={mealId}>
          <Paper className={classes.mealContainer}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <Avatar className={classes.mealPhoto} alt="meal" src={mealPhoto} />
              </Grid>
              <Grid item>
                <Typography>{mealName}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      );
    });
  } else {
    orders = (
      <Grid item xs={12}>
        {/* <Paper className={classes.mealContainer}> */}
          {/* <Grid container spacing={2} direction="column" alignItems="center"> */}
            <Typography variant="h2">{noMeals}</Typography>
          {/* </Grid> */}
        {/* </Paper> */}
      </Grid>
    );
  }

  return (
    <Grid container spacing={1}>

      <Grid item xs={12}>
        <Typography>{text}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3}>
          {orders}
        </Grid>
      </Grid>

    </Grid>
  );
};

export default Orders;
