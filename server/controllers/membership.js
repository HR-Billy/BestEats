const express = require('express');

const router = express.Router();
const model = require('../../database/models/membership/membership');

// adds new member to users table
router.route('/login')
  .post((req, res) => {
    console.log('here is the new login body', req.body);
    model.postUser(req, res);
  });

// checks if user is subscribed
router.route('/substatus')
  .get((req, res) => {
    console.log('checking subscription status');
    console.log('here is the body', req.body);
    model.getSubStatus(req, res);
  });

// adds subscription detail to users
router.route('/subscribe')
  .patch((req, res) => {
    console.log('here is the body', req.body);
    model.patchSubscribeData(req, res);
  });

module.exports = router;