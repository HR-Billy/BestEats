const express = require('express');
const path = require('path');
const runProfileRte = require('./controllers/profile');
const runMealRte = require('./controllers/meals');
const runMembershipRte = require('./controllers/membership');
const runFarmerRte = require('./controllers/farmers');
const runGroceryRte = require('./controllers/grocery');

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
app.use('/meal-plan', runMealRte);
app.use('/api/farmers', runFarmerRte);
app.use('/api/store', runGroceryRte);
app.use('/health', FIX_ME);
app.use('/api/member', runMembershipRte);
app.use('/login', FIX_ME); // we can delete this route
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
