import { Router } from "express";
import {
  c_create,
  c_delete,
  c_deleteMany,
  c_get,
  c_getMany,
  c_update,
} from "../controllers/company";
import {
  handleData,
  isAuthenticate,
  uploadFiles,
  validateData,
} from "../middlewares";
import company from "../models/company";
import joiCompany from "../validation/joiCompany";

const router = Router();

router.post(
  "/create",
  // isAuthenticate(),
  handleData("Company", company),
  validateData(joiCompany),
  uploadFiles(),
  c_create()
);

router.delete("/delete", isAuthenticate(), c_delete());

router.delete("/deletemany", isAuthenticate(), c_deleteMany());

router.put(
  "/",
  isAuthenticate(),
  handleData("Company", company),
  validateData(joiCompany),
  c_update()
);

router.get("/get", c_get());

router.get("/", c_getMany());

export default router;
