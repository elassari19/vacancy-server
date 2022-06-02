const router = require("express").Router();
const { protectRoute, uploadFiles, joiValidateData } = require("../middlewares");
const { joiSignup } = require("../joiValidation");
const { User } = require("../models");

module.exports = router.post('/upload'
  ,protectRoute()
  ,uploadFiles()
  ,joiValidateData(joiSignup)
  ,async (req, res) => {

    try {
      req.cloudinary = await User.findOneAndUpdate({
        _id: req.user._id}, req.query.profile.avatar, {new: true
      });
      res.status(202).send(req.user.profile.avatar)
    } catch (error) {
      res.status(400).send(error)
    }

  });