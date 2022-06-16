import { VacancyServices } from '../../services'

export default () => async (req,res) => {

  try {

    // check if the vacancie exist
    const vacancie = await VacancyServices.findOneVacancy({_id: req.query.id}, {title: 1})

    if(vacancie._id == req.query.id) {
      await VacancyServices.findVacancyAndUpdate({_id: req.query.id}, req.body)
      res.status(200).send('successfully update vacancie ')
    }else{
      res.status(400).send('update field somthing wrong')
    }

  } catch (error) {

    console.log(error)
    res.status(400).send(error)

  }
}