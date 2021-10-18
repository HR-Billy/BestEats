import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const Profile = styled(Paper)`
  color: black;
  margin: 10px;
  padding: 10px;
`;

const FarmerCard = ({ farmer }) => {
  return (
    <Profile>
      <div>
        {farmer.firstName} {farmer.lastName}
      </div>
      <div>{farmer.biography}</div>
      <div>Farm: {farmer.farm}</div>
      <div>{farmer.email}</div>
      <div>{farmer.phone}</div>
    </Profile>
  );
};

export default FarmerCard;
