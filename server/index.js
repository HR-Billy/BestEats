const express = require('express');
const path = require('path');

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

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
