import React from 'react';
import { Card, CardHeader, CardContext } from '@mui/material';
import useStyles from '../themes.jsx';

const Orders = ({ text }) => {
  const classes = useStyles();

  return (
    <h1>{text}</h1>
  );
};

export default Orders;
