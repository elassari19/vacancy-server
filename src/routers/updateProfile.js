import { Router } from "express"
import { joiSignup } from "../validation"
import { isAuthenticate, joiValidateData, updateData } from "../middlewares"
import { updateprofile } from "../controllers/UserControl"

const router = Router()

export default router.post('/update'
  ,isAuthenticate()
  ,updateData()
  ,joiValidateData(joiSignup)
  ,updateprofile()
)