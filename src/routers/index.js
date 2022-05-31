const { Router } = require("express");
const signup = require("./signup");
const {User} = require('../models');
const verifyAccount = require("./verifyAccount");
const signout = require("./signout");
const signin = require("./signin");

const router = Router();

router.use('/', signup);
router.use('/', signin);
router.use('/', verifyAccount);
router.use('/', signout);
router.use('/delete', async(req, res) => {
  const { email } = req.body
  try {
    
    const user = await User.findOne({email});
    !user._id && res.status(402).send('not exist');

    const resault = await User.deleteOne({email})
    resault.deletedCount == 1 && res.send('email deleted')  

  } catch (error) {
    res.send(error)
  }
});

module.exports = router