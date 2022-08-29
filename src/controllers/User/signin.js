import { User } from "../../models";
import db from "../../services";
import { compareString, createToken } from "../../utils";
import { verifyToken } from "../../utils/token";
import cookie from "cookie";

export default () => async (req, res) => {
  if (!req.cookies.token) {
    const { email, password } = req.body;

    req.user = await db.findOne(
      "User",
      User,
      { email: email },
      { _id: 1, password: 1, status: 1, permission: 1 }
    );

    if (!req.user?._id) {
      return res
        .status(203)
        .send({ success: false, message: "Email account not found!" });
    }

    if (await compareString(password, req.user?.password)) {
      if (req.user.status != "Active")
        return res
          .status(202)
          .send({ success: false, message: "Please Active you Account" });

      const token = createToken(req.user.id, "30d");

      res
        .setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 60,
            sameSite: "strict",
            path: "/",
          })
        )
        .status(200)
        .send({
          success: true,
          id: req.user._id,
          token,
          permission: req.user.permission,
        });
    } else {
      return res
        .status(203)
        .send({ success: false, message: "Invalid Email or Password" });
    }
  } else {
    const { user_id } = verifyToken(req.cookies.token);

    if (user_id) {
      req.user = await db.findById("User", User, user_id);

      res.cookie("token", createToken(user_id, "30d"));
      res.status(200).send({ success: true, message: "already signed" });
    } else {
      res.status(500).send({ success: false, message: error.message });
    }
  }
};
