import { VacancyServices } from '../../services'

export default () => async (req,res) => {
  // console.log('create', req.value)
  try {
    req.value = {
      ...req.value,
      createdBy: req.user?._id,
    }
    await VacancyServices.createVacancy(req.value)
    res.status(200).send('created success')
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}