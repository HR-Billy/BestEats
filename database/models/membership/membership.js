/* eslint-disable camelcase */
const db = require('../..');
const {
  insertNewUser, selectStatus, selectSubscribed, updateSubData,
} = require('./memberQueries');

module.exports = {
  // checks if user exists in table. If not, add new user and return false. If so, return subscribed
  postUser: (req, res) => {
    const { auth_id } = req.body;
    db.query(selectStatus, [auth_id], (statusErr, statusData) => {
      if (statusErr) {
        res.status(500).send(statusErr);
      } else if (!statusData.rows[0].exists) {
        db.query(insertNewUser, Object.values(req.body), (insertErr) => {
          if (insertErr) {
            res.status(500).send(insertErr);
          } else {
            res.status(200).send(false);
          }
        });
      } else {
        db.query(selectSubscribed, [auth_id], (subscribedErr, subscribedData) => {
          if (subscribedErr) {
            res.status(500).send(subscribedErr);
          } else {
            res.status(200).send(subscribedData.rows[0].subscribed);
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
      } else {
        res.status(200).send(data);
      }
    });
  },
};
