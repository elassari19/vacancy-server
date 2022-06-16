import { Router } from "express";
import { User } from "../models";

const router = Router()

export default router.delete('/deleteAll', async (req, res) => {
  try {
    await User.deleteMany()
    res.send('all users deleted')
  } catch (error) {
    res.status(400).send(error)
  }
})