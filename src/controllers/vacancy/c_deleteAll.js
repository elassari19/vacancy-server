import { vacancy } from "../../models";
import db from "../../services";
import { cloudinaryDeleteFiles } from "../../utils";

export default () => async (req, res) => {
  try {
    const vacancies = await db.findMany(
      "Vacancy",
      vacancy,
      {},
      { cv: 1, _id: 0 }
    );

    if (vacancies) {
      const public_id = [];

      // combine arrays in one array
      for (let index = 0; index < vacancies.length; index++) {
        const element = vacancies[index]["cv"];
        element.length > 0 && public_id.push(...element);
      }

      // destruct public_id from data
      const image_ids = public_id.map((items) => items.public_id);
      console.log(image_ids);

      // delete files from cloud
      cloudinaryDeleteFiles(image_ids);

      // delete files from db
      await db.deleteMany("Vacancy", vacancy);
      res
        .status(200)
        .send({
          success: true,
          message: "successfully deleted all vacancies",
          vacancy: null,
        });
    } else {
      res.status(409).send("somthing wrong");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
