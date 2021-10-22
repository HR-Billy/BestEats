const express = require('express');

const router = express.Router();
const model = require('../../database/models/farmers/farmers');

router.route('/').get((req, res) => {
  model.selectFarmerData(req, res);
});

module.exports = router;
