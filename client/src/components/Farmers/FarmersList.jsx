import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import FarmersMockData from './FarmersMockData.js';
import FarmerCard from './FarmerCard.jsx';

const ListContainer = styled.div`
  background-color: coral;
`;

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

export default FarmersList;
