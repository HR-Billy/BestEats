import React from 'react';
import styled from 'styled-components';
import { Grid, Paper, Box } from '@mui/material';

import FarmerCard from './FarmerCard.jsx';

const ListContainer = styled(Box)`
  background-color: coral;
  height: 100%;
  border-radius: 5px;
  overflow-y: auto;
`;

<<<<<<< HEAD
const FarmersList = ({ farmers, index }) => {
  return (
    <ListContainer>
      <Grid container>
        {farmers.slice(0, index).map((farmer, index) => (
          <Grid key={index} item>
            <FarmerCard farmer={farmer} />
          </Grid>
        ))}
      </Grid>
    </ListContainer>
  );
};
=======
const FarmersList = ({ farmers, index }) => (
  <ListContainer>
    <Grid container>
      {farmers.slice(0, index).map((farmer) => (
        <Grid item>
          <FarmerCard farmer={farmer} />
        </Grid>
      ))}
    </Grid>
  </ListContainer>
);
>>>>>>> 59ecd0dba77757101cef5eaa4a18b7d93c70795d

export default FarmersList;
