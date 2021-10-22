import React, { useContext } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';
import { ProfileContext } from '../ProfileContext.jsx';

const NutritionFacts = () => {
  const { nutritionFacts, mealAverages } = useContext(ProfileContext);
  const { caloriesAverage, fatAverage, carbsAverage } = mealAverages;

  const createData = (name, calories, fat, carbs) => ({ name, calories, fat, carbs });
  const nutirtionRows = nutritionFacts.map((meal) => {
    const {
      name, calories, fat, carbs,
    } = meal;

    const info = createData(name, calories, fat, carbs);
    return info;
  });

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: '62vh', minHeight: '61vh', backgroundColor: '#B1C701', boxShadow: '4px 4px 4px #ccc',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nutrition facts (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nutirtionRows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>Average</TableCell>
            <TableCell align="right">{caloriesAverage}</TableCell>
            <TableCell align="right">{fatAverage}</TableCell>
            <TableCell align="right">{carbsAverage}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};
export default NutritionFacts;
