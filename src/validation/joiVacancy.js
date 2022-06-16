import Joi from "joi";
import {categoryVacancy} from '../constants'

export default Joi.object({
  createdBy: Joi.number(),
  avatar: {
    public_id: Joi.string().required(),
    secure_url: Joi.string().required(),
  },
  webUrl: Joi.string(),
  title: Joi.string().required(),
  vacancy: Joi.string().required().valid(...categoryVacancy),
  Responsibilities: Joi.array().items(Joi.string()).required(),
  Requirements: Joi.array().items(Joi.string()).required(),
  Project_decription: Joi.array().items(Joi.string()).required(),
  skills: Joi.array().items(Joi.string()).required(),
  description: Joi.string(),
  salary: {
    from: Joi.number(),
    to: Joi.number()
  },
  'additional options':{
    'Full employment': Joi.boolean(),
    'Underemployment': Joi.boolean(),
    'Without experience': Joi.boolean(),
    'Project work': Joi.boolean()
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
  phome: Joi.number(),
  cv: Joi.array().items(Joi.object().keys({
    public_id: Joi.string(),
    secure_url: Joi.string()
  })),
  messages: {
    createdBy: Joi.number(),
    title: Joi.string(),
    body: Joi.string()
  },
 })