import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import mytheme from './theme.jsx';

export default function SelectPlan({ mealQty }, { setMealQty } ) {
  // const [mealQty, setMealQty] = useState(3);

  const planOptions = {
    3: 25.99,
    4: 33.99,
    5: 41.99,
    7: 55.99,
  };
  const planPrice = planOptions[mealQty];
  const costPerMeal = planPrice / mealQty;
  const tax = planPrice * 0.09;
  const shipping = 10;
  const total = planPrice + tax + shipping;

  const handleChange = (e) => {
    setMealQty(e.target.value);
  };

  return (
    <ThemeProvider theme={mytheme}>
      <CssBaseline />
      <Grid container sx={{ height: '100vh' }}>
        <Typography variant="h6" gutterBottom>
          Choose Your Meal Plan
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl style={{ height: 250, width: 250 }}>
              <InputLabel id="mealsPerWeek">Meals Per Week</InputLabel>
              <Select
                required
                id="mealsPerWeek"
                label="Meals per Week"
                value={mealQty}
                onChange={handleChange}
              >
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={7}>7</MenuItem>
              </Select>
            </FormControl>
            <div className="Cost">
              <Typography variant="h6" component="div">
                Price:
                $
                {planPrice.toFixed(2)}
              </Typography>
              <Typography variant="h8" component="div">
                Cost per meal:
                $
                {costPerMeal.toFixed(2)}
              </Typography>
              <Typography variant="h8" component="div">
                Shipping:
                $
                {shipping.toFixed(2)}
              </Typography>
              <Typography variant="h8" component="div">
                Tax:
                $
                {tax.toFixed(2)}
              </Typography>
              <Typography variant="h6" component="div">
                Total:
                $
                {total.toFixed(2)}
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            // backgroundImage: 'url(https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
              backgroundImage: 'url(https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
