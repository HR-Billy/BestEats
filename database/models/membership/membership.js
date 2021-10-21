/* eslint-disable camelcase */
const db = require('../..');
const { insertNewUser, getSubscribed, updateSubData } = require('./memberQueries');

module.exports = {
  // adds a new user to the user table
  postNewUser: (req, res) => {
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

  // get subscription info
  getSubStatus: (req, res) => {
    console.log(req.body);
    const getSubscribedQuery = {
      text: getSubscribed,
      values: req.body,
    };
    db.query(getSubscribedQuery, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log('here is the data', data.rows);
        res.status(200).send(data.rows);
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
        console.log('here is the data', data.rows);
        res.status(200).send(data.rows);
      }
    });
  },
};
