const express = require('express');

const router = express.Router();
const model = require('../../database/models/profile/profile');

router.route('/user')
  .get((req, res) => {
    const { user_id } = req.query;
    console.log(user_id);

    model.selectProfileData(user_id, req, res);
  });

router.route('/status')
  .post((req, res) => {
    model.insertStatus(req.body, res, req);
  })
  .patch((req, res) => {
    model.selectProfileData(req, res);
  });

module.exports = router;
