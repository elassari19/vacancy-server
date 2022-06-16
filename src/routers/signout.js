import { Router } from "express";
import { controlSignout } from "../controllers/UserControl"
import { isAuthenticate } from "../middlewares";

const router = Router();

export default router.get('/signout'
  ,isAuthenticate()
  ,controlSignout()
)