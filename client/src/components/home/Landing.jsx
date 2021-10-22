import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductHeroLayout from './ProductHero.jsx';

const backgroundImage = 'https://wallpapercave.com/wp/wp2020196.jpg';

const WelcomeText = styled.h1`
  text-shadow: 1px 1px 2px black;
  font-size: 5rem;
`;

const SloganText = styled.h2`
  text-shadow: 1px 1px 1px black;
  font-size: 2rem;
`;

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
    <Typography variant="h1" align="center" marked="center" sx={{ mt: 10 }}>
      <WelcomeText>
        Welcome to Best Eats.
      </WelcomeText>

    </Typography>
    {/* </WelcomeText> */}
    <Typography
      color="inherit"
      align="center"
      variant="h2"
      // sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      sx={{ mb: 4, mt: 0 }}

    >
      <SloganText>
        A one stop shop for the best healthy food,
        and lifestyle advice, delivered right to your door!
      </SloganText>
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
  </ProductHeroLayout>
);

export default Landing;
