module.exports = {
  profileData: `
  SELECT json_build_object(
    'username', username,
    'subscriptionStartDate', subscription_start_date,
    'photo', profile_pic,
    'feed', (SELECT json_agg( json_build_object(
      'statusId', id,
      'emoji', 'insert emoji',
      'text', text,
      'createdAt', created_at
      ) ORDER BY created_at DESC)
      FROM status
      WHERE auth_id = $1),
    'suggested', 'insert suggested meals query',
    'arriving', (SELECT json_agg( json_build_object(
      'mealId', meal.id,
      'mealName', meal.meal_name,
      'mealPhoto', meal.photo,
      'expected', date_expected
      ) ORDER BY date_expected DESC)
      FROM user_meals
      INNER JOIN meal ON meal.id = user_meals.meal_id
      WHERE auth_id = $1 AND date_expected IS NULL),
    'recent', (SELECT json_agg( json_build_object(
      'mealId', meal.id,
      'mealName', meal.meal_name,
      'mealPhoto', meal.photo
      ) ORDER BY date_ordered DESC)
      FROM user_meals
      INNER JOIN meal ON meal.id = user_meals.meal_id
      WHERE auth_id = $1 AND date_expected IS NOT NULL),
    'products', 'insert product query',
    'nutritionFacts', (SELECT json_agg( json_build_object(
      'name', meal.meal_name,
      'carbs', meal.carbs,
      'fat', meal.fat,
      'calories', meal.calories
      ) ORDER BY date_ordered DESC)
      FROM user_meals
      INNER JOIN meal ON meal.id = user_meals.meal_id
      WHERE auth_id = $1),
    'mealAverages', (WITH avg AS
      (SELECT (sum(meal.carbs)/count(meal.carbs)) AS carbs, (sum(meal.fat)/count(meal.fat))AS fat, (sum(meal.calories) / count(meal.calories)) AS calories
      FROM user_meals
      INNER JOIN meal ON meal.id = user_meals.meal_id
      WHERE auth_id = $1)
      SELECT json_agg (json_build_object(
        'carbsAverage', carbs,
        'fatAverage', fat,
        'caloriesAverage', calories
        ))
      FROM avg)
  ) AS results
  FROM users
  WHERE auth_id = $1;
  `,
  status: `
  INSERT INTO status(auth_id, text, created_at)
  VALUES ($1, $2, $3);
  `,
};
