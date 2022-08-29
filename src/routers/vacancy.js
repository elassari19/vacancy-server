import { Router } from "express";
import {
  c_create,
  c_delete,
  c_deleteAll,
  c_getAll,
  c_getOne,
  c_update,
} from "../controllers/vacancy";
import { isAuthenticate, validateData, handleData } from "../middlewares";
import { vacancy } from "../models";
import { joiVacancy } from "../validation";

const router = Router();

router.get("/", c_getOne());

router.get("/all", c_getAll());

router.post(
  "/create",
  isAuthenticate(),
  handleData("Vacancy", vacancy),
  validateData(joiVacancy),
  c_create()
);

router.delete("/delete", isAuthenticate(), c_delete());

router.delete("/delete_all", c_deleteAll());

router.put(
  "/update",
  isAuthenticate(),
  handleData("Vacancy", vacancy),
  validateData(joiVacancy),
  c_update()
);

export default router;
