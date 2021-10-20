module.exports = {
  selectData: `
  SELECT * FROM users WHERE username = $1;
  `,
};
