module.exports = {
  selectData: `
  SELECT json_agg( json_build_object(
    'username', username,
    'first_name', first_name,
    'photo', 'add a photo column',
    'subscribed', subscribed,
    'member_start_date', member_start_date,
    'subscription_start_date', subscription_start_date,
    'weekly_start_date', weekly_start_date,
    'status', (SELECT jsonb_agg( json_build_object( 'id', id, 'emoji', emoji, 'text', text, 'created_at', created_at))
    FROM status
    WHERE user_id = $1)
  )) as results
  FROM users
  WHERE id = $1;
  `,
};
