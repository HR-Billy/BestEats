const db = require('../..');
const { selectFarmers } = require('./farmerQueries');

module.exports = {
  selectFarmerData: (req, res) => {
    db.query(selectFarmers, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log('here is the data', data.rows);
        res.status(200).send(data.rows);
      }
    });
  },
};
