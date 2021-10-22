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

const FarmersList = ({ farmers, index }) => (
  <ListContainer>
    <Grid container>
      {farmers.slice(0, index).map((farmer) => (
        <Grid item>
          <FarmerCard key={farmer.id} farmer={farmer} />
        </Grid>
      ))}
    </Grid>
  </ListContainer>
);

export default FarmersList;
