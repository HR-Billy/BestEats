import React from 'react';
import { Card, Avatar } from '@mui/material';
import useStyles from '../styles.jsx';

const ProfilePic = () => {
  const classes = useStyles();
  const defaultPic = 'https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png';

  return (
      <Avatar className={classes.avatar} alt="profile picture" src={defaultPic} />
  );
};

export default ProfilePic;
