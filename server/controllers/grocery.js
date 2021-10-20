const express = require('express');

const router = express.Router();
const model = require('../../database/models/grocery/grocery');

router.route('/produce')
  .get((req, res) => {
    model.selectProduce(req, res);
  });

router.route('/products')
  .get((req, res) => {
    model.selectProducts(req, res);
  });

module.exports = router;
