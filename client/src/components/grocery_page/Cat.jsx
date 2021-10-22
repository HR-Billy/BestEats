import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const H2 = styled.h4`
  text-align: center;
  padding-top: 0px;
  margin-top: 0px;
  font-weight: normal;
`;

const Image = styled.img`
  border-radius: 20px;
  box-shadow: 2px 2px 2px #ccc;
`;

export default function Cat({ data, handleClick, brightness }) {
  function createName(name) {
    if (name === 'Dairy') return 'Dairy & Eggs';
    if (name === 'Meat') return 'Meat & Seafood';
    return name;
  }
  return (
    <Container>
      <Image onClick={handleClick} name={data.name} src={data.src} width="219px" height="122px" style={{filter: `brightness(${brightness})`}} />
      <H2>{createName(data.name)}</H2>
    </Container>
  );
}