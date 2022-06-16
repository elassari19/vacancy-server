import { joiSignin } from "../validation"
import { joiValidateData } from "../middlewares"
import { Router } from "express"
import { controlSignin } from "../controllers/UserControl"

const router = Router();

export default router.post('/signin'
  ,joiValidateData(joiSignin)
  ,controlSignin()
);
