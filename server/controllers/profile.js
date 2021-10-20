const express = require('express');

const router = express.Router();
const model = require('../../database/models/profile/profile');

router
  .route('/user')
  .get((req, res) => {
    const { username } = req.query;
    console.log(username);

    model.selectProfileData(username, req, res);
  })
  .post((req, res) => {
    model.insertStatus(req, res);
  })
  .patch((req, res) => {
    model.selectProfileData(req, res);
  });

module.exports = router;
