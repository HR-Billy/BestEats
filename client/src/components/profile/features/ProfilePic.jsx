import React from 'react';
import { Card } from '@mui/material';
import { ProfileImage } from '../styles.jsx';
import useStyles from '../themes.jsx';

const ProfilePic = () => {
  const classes = useStyles();
  const defaultPic = 'https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png';

  return (
      <ProfileImage className={classes.avatar} alt="profile picture" src={defaultPic} />
  );
};

export default ProfilePic;
