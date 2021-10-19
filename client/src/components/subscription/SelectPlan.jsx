import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from '@mui/material/styles';
import mytheme from '../theme.jsx';

export default function SelectPlan({ setMealPlan }) {
  const [mealQty, setMealQty] = useState(3);

  const planOptions = {
    3: 25.99,
    4: 33.99,
    5: 41.99,
    7: 55.99,
  };
  const mealImages = {
    3: 'url(https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
    4: 'url(https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
    5: 'url(https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
    7: 'url(https://images.pexels.com/photos/1838607/pexels-photo-1838607.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)',
  };
  const planPrice = planOptions[mealQty];
  const costPerMeal = planPrice / mealQty;
  const tax = planPrice * 0.09;
  const shipping = 10;
  const total = planPrice + tax + shipping;

  useEffect(() => setMealPlan({
    mealQty,
    planPrice,
    tax,
    shipping,
    total,
  }), [mealQty]);

  const handleChange = (e) => {
    setMealQty(e.target.value);
  };

  return (
    <ThemeProvider theme={mytheme}>
      <CssBaseline />
      <Grid container sx={{ height: '60vh' }}>
        <Typography variant="h6" gutterBottom>
          Select Your Meal Plan
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={5}>
            <FormControl style={{ height: 100, width: 250 }}>
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
            <List disablePadding style={{ width: 250 }}>
              <ListItem sx={{ py: 0, px: 0 }}>
                <ListItemText
                  primary={<Typography variant="h6" sx={{ fontWeight: 600 }}>Price:</Typography>}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  $
                  {planPrice.toFixed(2)}
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingTop: 0, paddingBottom: 1, px: 0 }}>
                <ListItemText
                  primary={<Typography variant="body2" sx={{ fontStyle: 'italic' }}>Cost Per Meal:</Typography>}
                />
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  $
                  {costPerMeal.toFixed(2)}
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Shipping:" />
                <Typography variant="body2">
                  $
                  {shipping.toFixed(2)}
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Tax:" />
                <Typography variant="body2">
                  $
                  {tax.toFixed(2)}
                </Typography>
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText
                  primary={<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Total:</Typography>}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  $
                  {total.toFixed(2)}
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: mealImages[mealQty],
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
