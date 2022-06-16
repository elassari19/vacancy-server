import Joi from "Joi"

export default Joi.object({
  _id: Joi.any(),
  firstname: Joi.string().min(3).max(20).required(),
  lastname: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(200).required(),
  phone: Joi.string().min(4).max(128),
  gender: Joi.string(),
  profile: {
    avatar: {
      public_id: Joi.string(),
      secure_url: Joi.string()
    },
    title: Joi.string(),
    description: Joi.string().min(50).max(300),
    Underemployment: Joi.boolean()
  },
  about: Joi.array().items(Joi.string()),
  skill: Joi.array().items(Joi.string()),
  company: Joi.array().items(Joi.string()),
  education: Joi.array().items(Joi.string()),
  experience: Joi.array().items(Joi.string()),
  birthday: Joi.string(),
  timeline: Joi.string(),
  empolyeType: Joi.string(),
  social:{
    linkedin: Joi.string(),
    facebook: Joi.string(),
    tweeter: Joi.string(),
    github: Joi.string(),
    instagram: Joi.string()
  },
  pay: {
    hour: Joi.number(),
    distance: Joi.number(),
    day: Joi.number()
  },
  address: {
    country: Joi.string(),
    city: Joi.string(),
    street: Joi.string(),
    zip: Joi.string(),
    geo: {
      lan: Joi.number(),
      lat: Joi.number()
    }
  },
  status: Joi.string().default('Pending'),
  permission: Joi.string().default('User'),
  confirmation: Joi.string(),
})
