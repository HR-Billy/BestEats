const express = require('express');

const router = express.Router();
const model = require('../../database/models/signup/signup');

router.route('/new')
  .post((req, res) => {
    console.log('here is the body', req.body);
    model.postUserData(req, res);
  });

module.exports = router;
