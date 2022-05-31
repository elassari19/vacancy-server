const { createToken } = require('../utils');

const router = require('express').Router();

module.exports = router.get('/signout', (req, res) => {
  res.clearCookie('token');
  res.send('signout')
})