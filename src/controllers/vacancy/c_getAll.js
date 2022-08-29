import { vacancy } from "../../models";
import db from "../../services";

export default () => async (req, res) => {
  try {
    const vacancies = await db.findMany("Vacancy", vacancy);
    res.status(200).send({
      success: true,
      vacancy: vacancies.length > 0 ? vacancies : null,
      message:
        vacancies.length > 0 ? "get vacancies successfuly" : "no vacancy exist",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};
