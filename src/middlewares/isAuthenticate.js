import { User } from "../models";
import db from "../services";
import { verifyToken } from "../utils/token";

export default () => async (req, res, next) => {
  // console.log(req.body.cookies);

  if (!req.body.cookies) {
    res.status(401).send("UnAuthoriwed");
  } else {
    const { user_id } = verifyToken(req.body.cookies);

    // console.log(user_id);

    try {
      req.user = await db.findOne(
        "User",
        User,
        { _id: user_id },
        { createdAt: 0, updatedAt: 0, __v: 0, passwor: 0 }
      );
      if (req.user?._id) {
        next();
      } else {
        res
          .status(203)
          .send({ success: false, message: "UnAuthoriwed", error: req.user });
      }
    } catch (error) {
      res.status(401).send("not authorized");
    }
  }
};
