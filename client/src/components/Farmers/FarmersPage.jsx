import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Typography,
  Box,
  Autocomplete,
  createFilterOptions,
  TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import FarmersList from './FarmersList.jsx';

const FarmersPage = () => {
  const theme = useTheme();
  const [numberOfProfiles, setNumberOfProfiles] = useState(10);
  const [farmer, setFarmer] = useState('');
  const [farmerData, setfarmerData] = useState([]);
  const defaultFilterOptions = createFilterOptions();

  useEffect(() => {
    axios.get('/api/farmers').then((response) => {
      setfarmerData(response.data);
    });
  }, []);

  const optionsLimit = 1;

  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, optionsLimit);
  };

  const loadMoreFarmers = () => {
    setNumberOfProfiles(numberOfProfiles + 1);
    setFarmer('');
  };

  return (
    <Box
      sx={{
        height: 'calc(100vh - 58px)',
        display: 'grid',
        gridTemplateRows: '[intro] auto [body] 1fr [button] auto',
        gridGap: theme.spacing(1),
      }}
    >
      <Box>
        <Typography align="center" sx={{ fontWeight: 'bold' }}>
          Meet your farmers!
        </Typography>
        <Typography align="center">
          These are the hardworking people growing the very products we source.
          You can learn a little more about their farms and their biography
          here.
        </Typography>
      </Box>

      <Box
        sx={{
          height: '100%',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateRows: '[search] auto [content] minmax(0,1fr)',
          gridGap: theme.spacing(1),
          paddingTop: theme.spacing(1),
        }}
      >
        <Container>
          <Autocomplete
            filterOptions={filterOptions}
            freeSolo
            onChange={(e, nV) => {
              setFarmer(nV);
            }}
            onInputChange={(e, nV) => {
              setFarmer(nV);
            }}
            options={[
              ...new Set(
                farmerData.map(
                  (farmerItem) =>
                    `${farmerItem.first_name} ${farmerItem.last_name}`
                )
              ),
            ]}
            renderInput={(params) => {
              return <TextField {...params} label="Farmer Search" />;
            }}
          />
        </Container>
        <Container maxWidth="lg">
          {farmerData.length > 0 && (
            <FarmersList
              farmers={
                farmer
                  ? farmerData.filter((farmerMockData) => {
                      const [firstName, lastName] = farmer.split(' ');
                      return (
                        farmerMockData.first_name === firstName &&
                        farmerMockData.last_name === lastName
                      );
                    })
                  : farmerData
              }
              index={numberOfProfiles}
            />
          )}
        </Container>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={loadMoreFarmers} variant="contained">
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default FarmersPage;
