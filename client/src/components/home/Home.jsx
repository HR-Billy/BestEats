import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import StyleLink from '@mui/material/Link';
import Landing from './Landing.jsx';
import Tiles from './Tiles.jsx';
import Questions from './Questions.jsx';
import FallGallery from './FallGallery.jsx';
import mytheme from '../theme.jsx';

const Home = () => (
  <ThemeProvider theme={mytheme}>
    <Landing />
    <Tiles />
    <FallGallery />
    <Questions />
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <StyleLink color="inherit" href="/">
        Best Eats Inc.
      </StyleLink>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  </ThemeProvider>
);

export default Home;
