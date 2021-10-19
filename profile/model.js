const db = require('../database');
const { selectData } = require('./queries');

module.exports = {
  selectProfileData: (req, res) => {
    db.query(selectData, (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data);
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
