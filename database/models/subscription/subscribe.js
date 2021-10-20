/* eslint-disable camelcase */
const db = require('../..');
const { insertSubData } = require('./subscribeQueries');

module.exports = {
  patchSubscribeData: (req, res) => {
    const subscribeQuery = {
      text: insertSubData,
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
