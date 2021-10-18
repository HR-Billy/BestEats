import React from 'react';
import styled from 'styled-components';

import FarmersMockData from './FarmersMockData.js';
import FarmerCard from './FarmerCard.jsx';

const ListContainer = styled.div`
  background-color: coral;
`;

const FarmersList = ({ farmers, index }) => {
  return (
    <ListContainer>
      {farmers.slice(0, index).map((farmer) => (
        <FarmerCard farmer={farmer} />
      ))}
    </ListContainer>
  );
};

export default FarmersList;
