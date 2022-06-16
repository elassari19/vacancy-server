import {Router} from "express"
import { controlSignup } from "../controllers/UserControl";
import { joiValidateData } from "../middlewares"
import { joiSignup } from "../validation"

const router = Router()

export default router.post('/signup'
  ,joiValidateData(joiSignup) // validation of req.body
  ,controlSignup()
);

