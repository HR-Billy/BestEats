const express = require('express');
const path = require('path');
const runProfileRte = require('../profile/controller.js');

const app = express();
const port = 3000;

const staticUrl = path.join(__dirname, '../public');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticUrl));

// Identifies properties of the request being sent
app.use((req, res, next) => {
  console.log('-----------------------------');
  console.log(req.body);
  console.log(req.url);
  console.log(req.params);
  console.log(req.method);
  console.log('-----------------------------');
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Allows refresh of page on routes
app.get('/*', (req, res) => {
  const { url } = req;
  const routes = url.split('/');
/*
  switch (routes[1]) {
    case 'meal-plan':
      // DO SOMETHING
      break;
    case 'farmers':
    // DO SOMETHING
      break;
    case 'store':
      // DO SOMETHING
      break;
    case 'health':
      // DO SOMETHING
      break;
    case 'login':
      // DO SOMETHING
      break;
    case 'profile':
      runProfileRte(req, res);
      break;
    default:
      res.status(404).send('Page Isn\'t Available');
  }
*/

  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post('/*', (req, res) => {
  const { url } = req;
  const routes = url.split('/');

  switch (routes[1]) {
    case 'meal-plan':
      // DO SOMETHING
      break;
    case 'farmers':
    // DO SOMETHING
      break;
    case 'store':
      // DO SOMETHING
      break;
    case 'health':
      // DO SOMETHING
      break;
    case 'login':
      // DO SOMETHING
      break;
    case 'profile':
      runProfileRte(req, res);
      break;
    default:
      res.status(404).send('Page Isn\'t Available');
  }
});

app.patch('/*', (req, res) => {
  const { url } = req;
  const routes = url.split('/');

  switch (routes[1]) {
    case 'meal-plan':
      // DO SOMETHING
      break;
    case 'farmers':
    // DO SOMETHING
      break;
    case 'store':
      // DO SOMETHING
      break;
    case 'health':
      // DO SOMETHING
      break;
    case 'login':
      // DO SOMETHING
      break;
    case 'profile':
      runProfileRte(req, res);
      break;
    default:
      res.status(404).send('Page Isn\'t Available');
  }
});

module.exports = app;
