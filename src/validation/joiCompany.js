import Joi from "joi";

export default Joi.object({
  _id: Joi.object(),
  profileImage: Joi.any(),
  webUrl: Joi.string(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  createdBy: Joi.object(),
  category: Joi.string(),
  description: Joi.string(),
  address: {
    country: Joi.string(),
    city: Joi.string(),
    street: Joi.string(),
    zip: Joi.string(),
    geo: {
      lon: Joi.number(),
      lat: Joi.number(),
    },
  },
  social: {
    linkedin: Joi.string(),
    facebook: Joi.string(),
    tweeter: Joi.string(),
    github: Joi.string(),
    instagram: Joi.string(),
  },
  telegram: Joi.string(),
  phone: Joi.number(),
  timeline: Joi.string(),
  benfits: {
    events: Joi.boolean(),
    insurance: Joi.boolean(),
    bonus: Joi.boolean(),
    review: Joi.boolean(),
    discount: Joi.boolean(),
    schedule: Joi.boolean(),
  },
});
