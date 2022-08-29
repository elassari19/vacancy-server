import { vacancy } from "../../models";
import db from "../../services";

export default () => async (req, res) => {
  const data = {
    ...req.value,
    createdBy: req.user?._id,
  };

  try {
    req.vacancy = await db.createOne("Vacancy", vacancy, {
      ...data,
    });

    // console.log("req.vacnacy", req.vacancy);
    if (req.vacancy[0]?._id) {
      res.status(200).send({
        success: true,
        message: "created success",
        vacancy: req.vacancy[0],
      });
    } else {
      res.status(203).send({
        success: false,
        message: "created vacancy filed",
        vacancy: req.vacancy.error,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(203)
      .send({ success: false, message: error, vacancy: req?.vacancy });
  }
};
