import React from 'react';
import { Box, CardHeader, CardContext, TextField, Button } from '@mui/material';

const Status = () => (
  <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { xs: 12 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Update" variant="filled" />
    </Box>
    <Button>Update</Button>
  </div>
);

export default Status;
