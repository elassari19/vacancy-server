import { Router } from "express";
import {
  c_avatar,
  c_delete,
  c_deleteMany,
  c_forgot,
  c_getMany,
  c_getOne,
  c_resend,
  c_resetPassword,
  c_signin,
  c_signout,
  c_signup,
  c_update,
  c_confirmation,
} from "../controllers/User";
import {
  handleData,
  isAuthenticate,
  uploadFiles,
  validateData,
} from "../middlewares";
import { User } from "../models";
import { joiSignin, joiSignup } from "../validation";

const router = Router();

router.post(
  "/update",
  isAuthenticate(),
  handleData("User", User),
  validateData(joiSignin),
  c_update()
);

router.post(
  "/upload",
  isAuthenticate(),
  uploadFiles(),
  handleData("User", User),
  validateData(joiSignin),
  c_avatar()
);

router.get("/signout", c_signout());

router.post(
  "/signin",
  handleData("User", User),
  validateData(joiSignin),
  c_signin()
);

router.post(
  "/signup",
  handleData("User", User),
  validateData(joiSignup),
  c_signup()
);

router.post("/resend", c_resend());

router.delete("/delete", isAuthenticate(), c_delete());

router.delete("/deleteAll", isAuthenticate(), c_deleteMany());

router.get("/confirmation", c_confirmation());

router.get("/user", c_getOne());

router.get("/users", c_getMany());

router.post("/forgot", c_forgot());

router.get("/resetPssword", c_resetPassword());

export default router;
