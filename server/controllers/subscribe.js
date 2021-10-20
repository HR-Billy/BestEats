const express = require('express');

const router = express.Router();
const model = require('../../database/models/subscription/subscribe');

router.route('/subscribe')
  .patch((req, res) => {
    console.log('here is the body', req.body);
    model.selectProfileData(req, res);
  });

module.exports = router;
