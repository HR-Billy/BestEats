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
};
