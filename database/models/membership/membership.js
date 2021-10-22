/* eslint-disable camelcase */
const db = require('../..');
const {
  insertNewUser, selectStatus, selectSubscribed, updateSubData,
} = require('./memberQueries');

module.exports = {
  // adds a new user to the user table if not already there and returns whether subscribed
  postUser: (req, res) => {
    db.query(selectStatus, [req.body.auth_id], (err, data) => {
      if (err) {
        res.status(500).send(err);
        console.log('error', err);
      } else if (!data.rows[0].exists) {
        db.query(insertNewUser, Object.values(req.body), (err2) => {
          if (err2) {
            res.status(500).send(err2);
            console.log('error', err2);
          } else {
            // console.log('send false for new user');
            res.status(200).send(false);
          }
        });
      } else {
        db.query(selectSubscribed, [req.body.auth_id], (err3, data3) => {
          if (err3) {
            res.status(500).send(err3);
            console.log('error', err3);
          } else {
            // console.log('here is the data', data.rows[0].subscribed);
            res.status(200).send(data3.rows[0].subscribed);
          }
        });
      }
    });
  },

  // updates user table with subscription details
  patchSubscribeData: (req, res) => {
    const subscribeQuery = {
      text: updateSubData,
      values: Object.values(req.body),
    };
    db.query(subscribeQuery, (err, data) => {
      if (err) {
        res.status(500).send(err);
        console.log('error', err);
      } else {
        // console.log('here is the data', data);
        res.status(200).send(data);
      }
    });
  },
};
