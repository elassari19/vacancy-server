import Joi from "Joi"

export default Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(128).required()
})
