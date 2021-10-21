module.exports = {
  insertNewUser: `INSERT INTO users (auth_id, username, email, member_start_date, profile_pic)
  VALUES ($1, $2, $3, $4, $5)`,
};

