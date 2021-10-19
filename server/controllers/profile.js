const model = require('../../database/models/profile/profile.js');

const router = (req, res) => {
  const { username } = req.query;
  console.log(username);

  switch (req.method) {
    case 'POST':
      model.insertStatus(username, req, res);
      break;
    case 'PATCH':
      model.updateProfilePic(username, req, res);
      break;
    default:
      model.selectProfileData(req, res);
  }
};

module.exports = router;
