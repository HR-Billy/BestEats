const db = require('../..');
const { selectProfile } = require('./profileQueries');

module.exports = {
  selectProfileData: (username, req, res) => {
    db.query(selectProfile, [username], (err, data) => {
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
