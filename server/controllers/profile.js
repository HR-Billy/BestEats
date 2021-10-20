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
    console.log('here is the body', req.body);
  })
  .patch((req, res) => {
    model.selectProfileData(req, res);
  });

module.exports = router;
