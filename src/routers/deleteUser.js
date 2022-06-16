import { isAuthenticate, protectRoute } from "../middlewares"
import {Router} from "express"
import { deleteAcount } from "../controllers/UserControl";

const router = Router()
export default router.delete('/delete'
  ,isAuthenticate()
  ,deleteAcount());