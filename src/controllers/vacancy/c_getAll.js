import { VacancyServices } from '../../services'

export default () => async (req,res) => {

  try {
    const vacancies = await VacancyServices.findMultiVacancy()
    res.status(200).send(vacancies.length>0?vacancies:'no vacancies exist')
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}