import {Router} from "express"
import {  uploadFiles, joiValidateData, isAuthenticate } from "../middlewares"
import { avatar } from '../controllers/UserControl'
import { joiSignup } from "../validation"
import { User } from "../models"

const router = Router()

export default router.post('/upload'
  ,isAuthenticate()
  ,uploadFiles()
  ,joiValidateData(joiSignup)
  ,avatar()
);