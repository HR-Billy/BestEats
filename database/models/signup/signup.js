const db = require('../..');
const { insertNewUser } = require('./signupQueries');

module.exports = {
  postUserData: (req, res) => {
    const newUserQuery = {
      text: insertNewUser,
      values: Object.values(req.body),
    };
    db.query(newUserQuery, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log('here is the data', data.rows);
        res.status(200).send(data.rows);
      }
    });
  },
};

