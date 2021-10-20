module.exports = {
  selectProfile: `
  SELECT json_build_object(
    'id', id,
    'username', username,
    'first_name', first_name,
    'photo', 'add a photo column',
    'subscribed', subscribed,
    'member_start_date', member_start_date,
    'subscription_start_date', subscription_start_date,
    'weekly_start_date', weekly_start_date,
    'feed', (SELECT jsonb_agg( json_build_object(
      'status_id', id,
      'emoji', emoji,
      'text', text,
      'created_at', created_at
      ))
      FROM status
      WHERE user_id = $1),
    'meals', (SELECT jsonb_agg( json_build_object(
      'meal_id', meal.id,
      'meal-name', meal.meal_name,
      'meal_photo', meal.photo,
      'vegetarian', meal.vegetarian,
      'pescatarian', meal.pescatarian,
      'vegan', meal.vegan,
      'halal', meal.halal,
      'spicy', meal.spicy
      ))
      FROM user_meals
      INNER JOIN meal ON meal.id = user_meals.meal_id
      WHERE user_id = $1),
    'products', (SELECT jsonb_agg( json_build_object(
      'product_id', products.id,
      'date_ordered', user_products.date_ordered,
      'date_received', user_products.date_received,
      'product_name', products.product_name,
      'category', products.category,
      'calories', products.calories,
      'carbs', products.carbs,
      'protein', products.protein,
      'fats', products.fats,
      'image', products.image,
      'quantity', products.quantity,
      'serving_size', products.serving_size
      ))
      AS products
      FROM user_products
      INNER JOIN products ON products.id = user_products.product_id
      WHERE user_id = $1)
  ) as results
  FROM users
  WHERE id = $1;
  `,
};
