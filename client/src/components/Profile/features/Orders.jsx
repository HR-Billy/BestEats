import React from 'react';
import {
  Grid, Typography, Paper, Avatar,
} from '@mui/material';
import useStyles from '../styles.jsx';

const Orders = ({ text, meals }) => {
  const classes = useStyles();
  let orders;

  if (meals.length) {
    orders = meals.map((meal) => {
      const { meal_id, meal_photo, meal_name} = meal;

      return (
        <Grid item xs={4} key={meal_id}>
          <Paper className={classes.mealContainer}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <Avatar className={classes.mealPhoto} alt="meal" src={meal_photo} />
              </Grid>
              <Grid item>
                <Typography>{meal_name}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      );
    });
  };

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
