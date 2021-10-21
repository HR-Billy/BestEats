const express = require('express');
const path = require('path');
const runProfileRte = require('./controllers/profile');
const runSubscribeRte = require('./controllers/subscribe');
require('dotenv').config();

const app = express();
const port = 3000;

const staticUrl = path.join(__dirname, '../public');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticUrl));

const FIX_ME = () => {
  console.log(
    'https://www.youtube.com/watch?v=iM_S4RczozU router helper video'
  );
};
app.use('/home', FIX_ME);
app.use('/meal-plan', FIX_ME);
app.use('/farmers', FIX_ME);
app.use('/health', FIX_ME);
app.use('/subscribe', runSubscribeRte);
app.use('/login', FIX_ME);
app.use('/profile', runProfileRte);

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
