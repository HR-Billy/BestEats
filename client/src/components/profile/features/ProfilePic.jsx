import React from 'react';
import { Card } from '@mui/material';
import { ProfileImage } from '../styles.jsx';

const ProfilePic = () => {
  const defaultPic = 'https://www.madd.org/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png';

  return (
    // <Card>
      <ProfileImage alt="profile picture" src={defaultPic} />
    // </Card>
  );
};

export default ProfilePic;
