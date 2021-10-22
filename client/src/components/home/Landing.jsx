import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductHeroLayout from './ProductHero.jsx';

const backgroundImage = 'https://wallpapercave.com/wp/wp2020196.jpg'; // bright fresh fruit "rgba(0, 0, 0, 0.4)"
// const backgroundImage = 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'; // light with center spacing
// const backgroundImage = 'https://images.pexels.com/photos/952479/pexels-photo-952479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'; // dark with cutting board
// const backgroundImage = 'https://images.pexels.com/photos/890507/pexels-photo-890507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'; // groceries with variety of food
// const backgroundImage = 'https://images.pexels.com/photos/7689003/pexels-photo-7689003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'; // blue with chili
// const backgroundImage = 'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'; // dining table

const Landing = () => (
  <ProductHeroLayout
    sxBackground={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center',
    }}
  >
    {/* Increase the network loading priority of the background image. */}
    <img
      style={{ display: 'none' }}
      src={backgroundImage}
      alt="increase priority"
    />
    <Typography color="inherit" align="center" variant="h1" marked="center" sx={{ textShadow: 5 }}>
      Welcome to Best Eats.
    </Typography>
    <Typography
      color="inherit"
      align="center"
      variant="h2"
      sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
    >
      A one stop shop for the best healthy food,
      and lifestyle advice, delivered right to your door!
    </Typography>
    <Link to="/subscribe" style={{ textDecoration: 'none' }}>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
      // href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Get started
      </Button>
    </Link>
    <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
      Already a member? Log in.
    </Typography>
    {/* </Grid> */}
  </ProductHeroLayout>
);

export default Landing;
