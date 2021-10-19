const db = require('../../index.js');
const { selectData } = require('./queries');

module.exports = {
  selectProfileData: (req, res) => {
    db.query(selectData, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
  updateProfilePic: (req, res) => {
    // db.query(updatePic)
  },
  insertStatus: () => {
    console.log('inserting user status');
  },
};
