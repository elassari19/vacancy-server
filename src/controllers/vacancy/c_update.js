import { vacancy } from "../../models";
import db from "../../services";

export default () => async (req, res) => {
  try {
    // check if the vacancie exist
    req.vacancy = await db.findOne(
      "Vacancy",
      vacancy,
      { _id: req.query.id },
      { title: 1 }
    );

    if (req.vacancy?._id) {
      req.vacancy = await db.findOneAndUpdate(
        "Vacancy",
        vacancy,
        { _id: req.query.id },
        req.body
      );
      res.status(200).send({
        success: true,
        message: "successfully update vacancie ",
        vacancy: req.vacancy,
      });
    } else {
      res
        .status(203)
        .send({
          success: false,
          message: "update field somthing wrong",
          vacancy: req.vacancy,
        });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
