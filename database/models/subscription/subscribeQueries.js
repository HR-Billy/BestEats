module.exports = {
  insertSubData: `UPDATE users
    SET (
      first_name,
      last_name,
      address1,
      address2,
      city,
      state,
      postal_code,
      country,
      subscribed,
      subscription_start_date,
      weekly_start_date,
      allow_meals,
      subscription_id,
      meals_per_week,
      cardholder_name,
      card_number,
      card_exp_date,
      billing_address1,
      billing_address2,
      billing_city,
      billing_state,
      billing_postal_code,
      billing_country
    ) = (
      $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,
      $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
    WHERE id = $1`,
};