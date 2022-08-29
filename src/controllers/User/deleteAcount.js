import { User } from "../../models";
import db from "../../services";

export default () => async (req, res) => {
  try {
    const resault = await db.deleteOne("User", User, { _id: req.body.id });

    if (resault.deletedCount == 1) {
      res.clearCookie("token");
      res.send("user successfuly deleted");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
