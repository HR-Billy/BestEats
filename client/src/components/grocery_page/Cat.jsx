import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const H2 = styled.h3`
  text-align: center;
  /* color: #608200; */
  padding-top: 0px;
  margin-top: 0px;
  font-weight: normal;
`;

const Image = styled.img`
  border-radius: 10px;
`;

export default function Cat({ data, handleClick, brightness }) {
  function createName(name) {
    if (name === 'Dairy') return 'Dairy & Eggs';
    if (name === 'Meat') return 'Meat & Seafood';
    return name;
  }
  return (
    <Container>
      <Image onClick={handleClick} name={data.name} src={data.src} width="243px" height="135px" style={{filter: `brightness(${brightness})`}} />
      <H2>{createName(data.name)}</H2>
    </Container>
  );
}