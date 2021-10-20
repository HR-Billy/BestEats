import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Filter } from './mealStyles.jsx';

const MealFilter = ({ filterMeals }) => {
  const [activeFilter, setActiveFilter] = useState([]);

  const filters = [
    'Low Calorie',
    'Vegetarian',
    'Pescatarian',
    'Vegan',
    'Halal',
    'Spicy',
    'Easy Prep',
    'Easy Cleanup',
  ];

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(filter, filterName, theme) {
    return {
      fontWeight:
        filterName.indexOf(filter) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setActiveFilter(value);
  };

  useEffect(() => {
    filterMeals(activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Filter>
        <FormControl sx={{ m: 1, width: 800 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={activeFilter}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {filters.map((filter) => (
              <MenuItem
                key={filter}
                value={filter}
                style={getStyles(filter, activeFilter, theme)}
              >
                {filter}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Filter>
    </>
  );
};

export default MealFilter;
