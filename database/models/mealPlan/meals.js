const db = require('../..');

module.exports = {
  getMealData: (req, res) => {
    db.query('SELECT * FROM meal', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

  getUserMeals: (req, res) => {
    db.query(`SELECT subscribed, meals_per_week FROM users WHERE id=${req.params}`, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
};
