const Joi = require("Joi");

module.exports = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required()
})