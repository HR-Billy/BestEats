const express = require('express');
const path = require('path');

const router = express.Router();
const model = require('../../database/models/profile/profile');

router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

module.exports = router;
