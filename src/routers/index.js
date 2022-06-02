const { Router } = require("express");
const signup = require("./signup");
const {User} = require('../models');
const verifyAccount = require("./verifyAccount");
const signout = require("./signout");
const signin = require("./signin");
const updateProfile = require("./updateProfile");
const updateAvatar = require("./updateAvatar");
const deleteUser = require("./deleteUser");

const router = Router();

router.use('/', signup);
router.use('/', signin);
router.use('/', verifyAccount);
router.use('/', signout);
router.use('/', updateProfile);
router.use('/', updateAvatar);

router.use('/', deleteUser)

module.exports = router