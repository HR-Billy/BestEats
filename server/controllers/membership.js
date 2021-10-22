const express = require('express');

const router = express.Router();
const model = require('../../database/models/membership/membership');

// adds new member to users table
router.route('/new')
  .post((req, res) => {
    console.log('here is the body', req.body);
    model.postNewUser(req, res);
  });

// checks if user exists
router.route('/status')
  .get((req, res) => {
    console.log('checking existence on', req.body);
    // console.log('exists?', res);
    model.getStatus(req, res);
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
