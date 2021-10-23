const express = require('express');
const path = require('path');

const router = express.Router();
const model = require('../../database/models/mealPlan/meals');

router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

router.route('/meals')
  .get((req, res) => {
    model.getMealData(req, res);
  });

router.route('/user/:userId')
  .get((req, res) => {
    model.getSubscribeStatus(req, res);
  });

module.exports = router;
