const db = require('../..');
const { selectData } = require('./profileQueries');

module.exports = {
  selectProfileData: (username, req, res) => {
    db.query(selectData, [username], (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        console.log('here is the data', data.rows);
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
