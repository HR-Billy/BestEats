const { Client } = require('pg');
const { USERNAME, DATABASE, PASSWORD, HOST, PORT } = require('../config.js');

const client = new Client({
  user: USERNAME,
  database: DATABASE,
  password: PASSWORD,
  host: HOST,
  port: PORT,
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to PostgreSQL');
  }
});

module.exports = client;
