import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { ThankYouMessage } from './mealStyles.jsx';

const ThankYou = () => (
  <>
    <ThankYouMessage>
      <Typography><h1>Thank you!</h1></Typography>
      <Typography>
        <p>
          Your meals have been chosen for this week!&nbsp;
          Come back next week to choose your next set of meals.
        </p>
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained"> Back to Home </Button>
      </Link>
    </ThankYouMessage>
  </>
);

export default ThankYou;
