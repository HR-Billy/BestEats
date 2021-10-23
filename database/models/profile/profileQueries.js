module.exports = {
  profileData: `
  SELECT json_build_object(
    'firstName', first_name,
    'subscriptionStartDate', subscription_start_date,
    'photo', profile_pic,
    'feed', (SELECT json_agg( json_build_object(
      'statusId', id,
      'emoji', 'insert emoji',
      'text', text,
      'createdAt', created_at
      ) ORDER BY created_at DESC)
      FROM status
      WHERE user_id = $1),
    'suggested', 'insert suggested meals query',
    'arriving', (SELECT json_agg( json_build_object(
    'mealId', meal.id,
    'mealName', meal.meal_name,
    'mealPhoto', meal.photo
    ) ORDER BY date_received DESC)
  FROM user_meal
  INNER JOIN meal ON meal.id = user_meal.meal_id
  WHERE user_id = $1 AND date_received IS NULL),
    'recent', (SELECT json_agg( json_build_object(
    'mealId', meal.id,
    'mealName', meal.meal_name,
    'mealPhoto', meal.photo
    ) ORDER BY date_ordered DESC)
      FROM user_meal
      INNER JOIN meal ON meal.id = user_meal.meal_id
      WHERE user_id = $1 AND date_received IS NOT NULL),
    'products', 'insert product query',
    'nutritionFacts', ((SELECT json_agg( json_build_object(
      'name', meal.meal_name,
      'carbs', meal.carbs,
      'fat', meal.fat,
      'calories', meal.calories
      ) ORDER BY date_ordered DESC)
      FROM user_meal
      INNER JOIN meal ON meal.id = user_meal.meal_id
      WHERE user_id = $1)),
    'mealAverages', (WITH avg AS
      (SELECT (sum(meal.carbs)/count(meal.carbs)) AS carbs,
      (sum(meal.fat)/count(meal.fat))AS fat,
      (sum(meal.calories) / count(meal.calories)) AS calories
      FROM user_meal
      INNER JOIN meal ON meal.id = user_meal.meal_id
      WHERE user_id = $1)
        SELECT json_agg (json_build_object(
          'carbsAverage', carbs,
          'fatAverage', fat,
          'caloriesAverage', calories
        )) FROM avg)
  ) as results
  FROM users
  WHERE id = $1;
  `,
  status: `
  INSERT INTO status(user_id, text, created_At)
  VALUES ($1, $2, $3);
  `,
};

// change all user_id to auth_id after refactoring
