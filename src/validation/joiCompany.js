import Joi from "joi";

export default Joi.object({
  _id: Joi.object(),
  avatar: {
    public_id: Joi.string(),
    secure_url: Joi.string()
  },
  webUrl: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  createdBy: Joi.object(),
  Category: Joi.string(),
  description: Joi.string(),
  address: {
    country: Joi.string(),
    city: Joi.string(),
    street: Joi.string(),
    zip: Joi.string(),
    geo: {
      lon: Joi.number(),
      lat: Joi.number()
    }
  },
  social:{
    linkedin: Joi.string(),
    facebook: Joi.string(),
    tweeter: Joi.string(),
    github: Joi.string(),
    instagram: Joi.string(),
  },
  phome: Joi.number(),
  timeline: Joi.string() 
})