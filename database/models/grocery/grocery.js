const db = require('../..');

module.exports = {
  selectProduce: (req, res) => {
    const queryString = 'SELECT * FROM products WHERE category = $1';
    db.query(queryString, ['Produce'], (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log('here is the data', data.rows);
        res.status(200).send(data.rows);
      }
    });
  },
  selectProducts: (req, res) => {
    const queryString = 'SELECT * FROM products';
    console.log('in select in products');
    db.query(queryString, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
};
