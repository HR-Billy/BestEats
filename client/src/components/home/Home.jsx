import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
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
  </ThemeProvider>
);

export default Home;
