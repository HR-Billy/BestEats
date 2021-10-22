import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import {
  Meal,
  MealImage,
  NameText,
  DescriptionText,
  PropertiesText,
  BottomCard,
} from './mealStyles.jsx';

const MealCard = ({ meal, click }) => (
  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
    <Meal onClick={() => { click(meal.meal_name); }}>
      <MealImage src={meal.photo} alt={meal.meal_name} />
      <BottomCard>
        <Typography><NameText>{meal.meal_name}</NameText></Typography>
        <Typography><DescriptionText>{meal.description}</DescriptionText></Typography>
        <Typography>
          <PropertiesText>
            <b>
              {meal.time}
              min
            </b>
            &nbsp;
            {meal.highlights !== null && '|'}
            &nbsp;
            {meal.highlights}
          </PropertiesText>
        </Typography>
      </BottomCard>
    </Meal>
  </Grid>
);

MealCard.propTypes = {
  meal: PropTypes.shape({
    meal_name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    highlights: PropTypes.string,
  }).isRequired,
  click: PropTypes.func.isRequired,
};

export default MealCard;
