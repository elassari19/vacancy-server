import { vacancy } from "../../models";
import db from "../../services";

export default () => async (req, res) => {
  try {
    const vacancies = await db.findOne("Vacancy", vacancy, {
      _id: req.query.id,
    });

    res.status(200).send({
      success: true,
      vacancy: vacancies?._id ? vacancies : null,
      message: vacancies?._id
        ? "get vacancy successfuly"
        : "this vacancy dosn´t exist",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};
