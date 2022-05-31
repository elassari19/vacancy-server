const router = require("express").Router();
const { findOne, joiValidateData } = require("../middlewares");
const { joiSignup } = require("../joiValidation");


router.post('/signup'
  ,joiValidateData(joiSignup) // validation of req.body
  ,findOne()
  ,(req, res) => { res.status(201).send(req.user) }
);

module.exports = router;