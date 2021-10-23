const express = require('express');

const router = express.Router();
const model = require('../../database/models/profile/profile');

router.route('/user')
  .get((req, res) => {
    model.selectProfileData(req, res);
  });

router.route('/status')
  .post((req, res) => {
    model.insertStatus(req, res);
  })
  .patch((req, res) => {
    model.selectProfileData(req, res);
  });

module.exports = router;
