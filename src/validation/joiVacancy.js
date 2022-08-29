import Joi from "joi";
import { categoryVacancy } from "../constants";

export default Joi.object({
  _id: Joi.object(),
  createdBy: Joi.any(),
  avatar: {
    public_id: Joi.string().required(),
    secure_url: Joi.string().required(),
  },
  webUrl: Joi.string(),
  // title: Joi.string().required(),
  vacancy: Joi.string()
    .required()
    .valid(...categoryVacancy),
  // Responsibilities: Joi.array().items(Joi.string()).required(),
  // Requirements: Joi.array().items(Joi.string()).required(),
  // Project_decription: Joi.array().items(Joi.string()).required(),
  skills: Joi.array().items(Joi.string()).required(),
  description: Joi.string(),
  salary: {
    delay: Joi.string().required(),
    from: Joi.number().required(),
    to: Joi.number().required(),
  },
  options: {
    "Full employment": Joi.boolean(),
    Underemployment: Joi.boolean(),
    "Without experience": Joi.boolean(),
    "Project work": Joi.boolean(),
  },
  // address: {
  //   country: Joi.string(),
  //   city: Joi.string(),
  //   street: Joi.string(),
  //   zip: Joi.string(),
  //   geo: {
  //     lon: Joi.number(),
  //     lat: Joi.number()
  //   }
  // },
  // phone: Joi.number(),
  // cv: Joi.array().items(Joi.object().keys({
  //   public_id: Joi.string(),
  //   secure_url: Joi.string(),
  //   _id: Joi.object()
  // })),
  // messages: Joi.array().items(Joi.object().keys({
  //   createdBy: Joi.object(),
  //   title: Joi.string(),
  //   body: Joi.string()
  // }))
});
