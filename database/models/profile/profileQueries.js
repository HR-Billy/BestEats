module.exports = {
  selectData: `
  SELECT * FROM status WHERE user_id = $1;
  `,
};
