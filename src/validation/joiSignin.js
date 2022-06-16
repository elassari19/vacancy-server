// import Joi from "Joi"

import Joi from "joi";

// export default Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().min(4).max(128).required()
// })

export default Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  username: Joi.string().required()
})