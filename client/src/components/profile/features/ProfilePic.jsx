import React from 'react';
import { Grid, Card, Avatar } from '@mui/material';
import useStyles from '../styles.jsx';

const ProfilePic = () => {
  const classes = useStyles();

  return (
    <Avatar className={classes.avatar} alt="profile picture" />
  );
};

export default ProfilePic;
