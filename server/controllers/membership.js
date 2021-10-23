const express = require('express');

const router = express.Router();
const model = require('../../database/models/membership/membership');

// adds a new user to the users table and returns subscription status
router.route('/login')
  .post((req, res) => {
    model.postUser(req, res);
  });

// adds subscription detail to users
router.route('/subscribe')
  .patch((req, res) => {
    model.patchSubscribeData(req, res);
  });

module.exports = router;
