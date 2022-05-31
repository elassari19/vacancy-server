const Joi = require("Joi");

module.exports = Joi.object({
  firstname: Joi.string().min(3).max(20).required(),
  lastname: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(20).required(),
  phone: Joi.number().min(9999999).max(9999999999999999),
  profile: {
    image: Joi.string(),
    title: Joi.string(),
    description: Joi.string().min(50).max(300)
  },
  social:{
    linkedin: Joi.string(),
    facebook: Joi.string(),
    tweeter: Joi.string(),
    github: Joi.string(),
    instagram: Joi.string()
  },
  skill: Joi.array().items(Joi.string()),
  experience: Joi.array().items(Joi.string()),
  pay: {
    hour: Joi.number(),
    distance: Joi.number(),
    day: Joi.number()
  },
  address: {
    country: Joi.string(),
    city: Joi.string(),
    street: Joi.string(),
    zip: Joi.string()
  },
  status: Joi.string()
})
