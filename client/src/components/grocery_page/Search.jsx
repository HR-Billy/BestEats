import React from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

const Container = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 100px;
  text-align: center;
`;

export default function Search({ setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <Container>
      <TextField id="filled-basic" label="Search Products" variant="filled" onChange={handleChange} sx={{minWidth: "800px"}} />
    </Container>
  );
}
