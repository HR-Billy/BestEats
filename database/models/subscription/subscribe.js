/* eslint-disable camelcase */
const db = require('../..');
const { insertSubData } = require('./subscribeQueries');

module.exports = {
  patchSubscribeData: (userInfo, req, res) => {
    const subscribeQuery = {
      text: insertSubData,
      values: Object.values(userInfo),
    };
    db.query(subscribeQuery, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log('here is the data', data.rows);
        res.status(201).send(data.rows);
      }
    });
  },
};
