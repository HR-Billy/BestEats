const { Client } = require('pg');
const { USERNAME, PASSWORD } = require('../config.js');

const client = new Client({
  user: USERNAME,
  database: 'besteats',
  // database: 'best_eats',
  password: PASSWORD,
  host: '34.203.40.177',
  // host: 'localhost',
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to PostgreSQL');
  }
});

module.exports = client;
