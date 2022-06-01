const router = require("express").Router();
const { protectRoute, updateData, joiValidateData } = require("../middlewares");
const { joiSignup } = require("../joiValidation");
const { User } = require("../models");
const { hashString } = require("../utils");

module.exports = router.post('/update'
  ,protectRoute()
  ,updateData()
  ,joiValidateData(joiSignup)
  ,async (req, res) => {

    if(req.query.password){
      req.query.password = await hashString(req.query.password);
    }

    try {
      req.user = await User.findOneAndUpdate({_id: req.user._id}, req.query, {new: true});
      res.status(202).send(req.user)
    } catch (error) {
      res.status(400).send(error)
    }
  }

)