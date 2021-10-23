const db = require('../..');
const { profileData, status } = require('./profileQueries');

module.exports = {
  selectProfileData: (req, res) => {
    const { authId } = req.query;

    db.query(profileData, [authId], (err, data) => {
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
  insertStatus: (req, res) => {
    const { authId, text } = req.body;
    const date = new Date();

    db.query(status, [authId, text, date], (err) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(req.body);
      }
    });
  },
};
