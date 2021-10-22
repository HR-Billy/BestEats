module.exports = {
  profileData: `
  SELECT json_build_object(
    'id', id,
    'username', username,
    'first_name', first_name,
    'member_start_date', member_start_date,
    'subscription_start_date', subscription_start_date,
    'weekly_start_date', weekly_start_date,
    'photo', profile_pic,
    'subscribed', subscribed,
    'feed', (SELECT jsonb_agg( json_build_object(
      'status_id', id,
      'emoji', 'insert emoji',
      'text', text,
      'created_at', created_at
      ) ORDER BY created_at DESC)
      FROM status
      WHERE user_id = $1),
    'suggested', 'insert suggested meals query',
    'arriving', (SELECT jsonb_agg( json_build_object(
    'meal_id', meal.id,
    'meal_name', meal.meal_name,
    'meal_photo', meal.photo
    ) ORDER BY date_received DESC)
  FROM user_meal
  INNER JOIN meal ON meal.id = user_meal.meal_id
  WHERE user_id = $1 AND date_received IS NULL),
    'recent', (SELECT jsonb_agg( json_build_object(
    'meal_id', meal.id,
    'meal_name', meal.meal_name,
    'meal_photo', meal.photo
    ) ORDER BY date_ordered DESC)
      FROM user_meal
      INNER JOIN meal ON meal.id = user_meal.meal_id
      WHERE user_id = $1 AND date_received IS NOT NULL),
    'products', 'insert product query',
    'nutrition-facts', ((SELECT jsonb_agg( json_build_object(
      'carbs', meal.carbs,
      'fat', meal.fat,
      'calories', meal.calories
      ) ORDER BY date_ordered DESC)
      FROM user_meal
      INNER JOIN meal ON meal.id = user_meal.meal_id
      WHERE user_id = 1)),
    'meal_averages', (WITH avg AS
      (SELECT (sum(meal.carbs)/count(meal.carbs)) AS carbs,
      (sum(meal.fat)/count(meal.fat))AS fat,
      (sum(meal.calories) / count(meal.calories)) AS calories
      FROM user_meal
      INNER JOIN meal ON meal.id = user_meal.meal_id
      WHERE user_id = $1)
        SELECT json_agg (json_build_object(
          'carbs_average', carbs,
          'fat_average', fat,
          'calories_average', calories
        )) FROM avg)
  ) as results
  FROM users
  WHERE id = $1;
  `,
  status: `
  INSERT INTO status(user_id, text, created_at)
  VALUES ($1, $2, current_timestamp);
  `,
};
