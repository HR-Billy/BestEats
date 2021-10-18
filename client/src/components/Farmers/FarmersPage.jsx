import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import styled from 'styled-components';

import FarmersMockData from './FarmersMockData.js';
import FarmersList from './FarmersList.jsx';

const Intro = styled.p`
  color: black;
  text-align: center;
`;

const FarmersPage = () => {
  const [numberOfProfiles, setNumberOfProfiles] = useState(2);

  const loadMoreFarmers = () => {
    setNumberOfProfiles(numberOfProfiles + 1);
  };

  return (
    <Container maxWidth="lg">
      <Intro>
        Meet your farmers! <br /> These are the hardworking people growing the
        very products we source from their very own farms!
      </Intro>
      <FarmersList farmers={FarmersMockData} index={numberOfProfiles} />
      <Button onClick={loadMoreFarmers}>Load More</Button>
    </Container>
  );
};

export default FarmersPage;
