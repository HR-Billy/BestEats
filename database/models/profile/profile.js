const db = require('../..');
const { profileData, status } = require('./profileQueries');

module.exports = {
  selectProfileData: (username, req, res) => {
    db.query(profileData, [username], (err, data) => {
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
  insertStatus: (obj, res, req) => {
    const { text } = obj;
    console.log(text);

    db.query(status, [text], (err, data) => {
      if (err) {
        res.status.send(err);
      } else {
        res.status(201).send(data);
      }
    });
  },
};
