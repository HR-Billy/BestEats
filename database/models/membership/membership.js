/* eslint-disable camelcase */
const db = require('../..');
const { insertNewUser, selectStatus, selectSubscribed, updateSubData } = require('./memberQueries');

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
        console.log('error', err)
      } else {
        console.log('rows inserted', data.rowCount);
        res.status(200).send(data);
      }
    });
  },

  // get user info
  getStatus: (req, res) => {
    console.log('request for status check', req.body)
    const getStatusQuery = {
      text: selectStatus,
      values: [req.body.auth_id],
    };
    db.query(getStatusQuery, (err, data) => {
      if (err) {
        res.status(500).send(err);
        console.log('error', err)

      } else {
        console.log('here is the data', data.rows[0].exists);
        res.status(200).send(data.rows[0].exists);
      }
    });
  },

  // get subscription info
  getSubStatus: (req, res) => {
    console.log(req.body);
    const getSubscribedQuery = {
      text: selectSubscribed,
      values: [req.body.auth_id],
    };
    db.query(getSubscribedQuery, (err, data) => {
      if (err) {
        res.status(500).send(err);
        console.log('error', err)
      } else {
        console.log('here is the data', data.rows);
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
        console.log('error', err)
      } else {
        console.log('here is the data', data);
        res.status(200).send(data);
      }
    });
  },
};
