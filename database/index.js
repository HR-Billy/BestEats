const { Client } = require('pg');
const { USERNAME, DATABASE, PASSWORD, HOST, PORT } = require('../config.js');

const client = new Client({
  user: USERNAME,
<<<<<<< HEAD
  database: 'besteats',
  password: PASSWORD,
  host: '34.203.40.177',
  port: 5432,
=======
  database: DATABASE,
  password: PASSWORD,
  host: HOST,
  port: PORT,
>>>>>>> main
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to PostgreSQL');
  }
});

module.exports = client;
