import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Paper, Box, Typography, useMediaQuery } from '@mui/material';

const FarmerCard = ({ farmer }) => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Paper
      sx={{
        display: 'grid',
        ...(matchesSm && {
          gridTemplateRows: '[picture] auto [bio] 1fr',
          justifyItems: 'center',
        }),
        ...(matchesSmUp && {
          gridTemplateColumns: '[picture] auto [bio] 1fr',
        }),
        gridColumnGap: theme.spacing(3),
        margin: theme.spacing(2),
        padding: theme.spacing(2),
        alignItems: 'center',
      }}
    >
      <Box sx={{ height: '10em', width: '10em' }}>
        <img
          style={{ height: '100%', width: '100%', borderRadius: '5px' }}
          src={farmer.image}
          alt="farmer"
        />
      </Box>
      <Box
        sx={{
          // display: 'flex',
          // justifyContent: 'space-between',
          // flexDirection: 'column',
          display: 'grid',
          gridTemplateRows: '[name] auto [description] 1fr [contact] auto',
          gridGap: theme.spacing(2),
        }}
      >
        <Typography variant="h6">
          {farmer.first_name} {farmer.last_name}
        </Typography>
        <Typography>{farmer.biography}</Typography>

        <div>
          <Typography variant="body2">
            <strong>Farm</strong>: {farmer.farm}
          </Typography>
          <Typography variant="body2">
            <strong>Email</strong>: {farmer.email}
          </Typography>
          <Typography variant="body2">
            <strong>Phone</strong>: {farmer.phone}
          </Typography>
        </div>
      </Box>
    </Paper>
  );
};

export default FarmerCard;
