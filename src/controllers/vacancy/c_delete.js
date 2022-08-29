import { vacancy } from "../../models";
import db from "../../services";
import { cloudinaryDeleteFiles, destructImageId } from "../../utils";

export default () => async (req, res) => {
  try {
    const vacancies = await db.findOne(
      "Vacancy",
      vacancy,
      { _id: req.query.id },
      { cv: 1, _id: 0 }
    );

    // set the public_id in array
    const image_ids = destructImageId(vacancies);

    // check if user own this vacancy
    if (vacancies.createdBy == req.user.id) {
      // delete vacancy by id
      await db.deleteMany("Vacancy", vacancy, { _id: req.query.id });

      // delete files of vacancy from cloudinary
      cloudinaryDeleteFiles(image_ids);

      res
        .status(200)
        .send({
          success: true,
          message: "successfully deleted vacancies" + req.query.id,
        });
    } else {
      res.status(409).send("somthing wrong");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
