import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

const Container = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 100px;
`;

const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 500px;
  font-size: 20px;
  text-align: center;
`;

export default function Search({ setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <Container>
      {/* <TextField fullWidth label="fullWidth" id="fullWidth" /> */}
      <Input onChange={handleChange} placeholder="Search Products" type="text" />
    </Container>
  );
}
