const db = require('../..');
const { profileData, status } = require('./profileQueries');

module.exports = {
  selectProfileData: (auth, req, res) => {
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
    const { auth, text } = req.body;
    // console.log(req.body);

    db.query(status, [auth, text, Date().slice(0, 24)], (err) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(req.body);
      }
    });
  },
};
