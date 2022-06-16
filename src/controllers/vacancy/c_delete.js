import { VacancyServices } from '../../services'
import { cloudinaryDeleteFiles, destructImageId } from '../../utils'

export default () => async (req,res) => {

  try {
  
    const vacancies = await VacancyServices.findMultiVacancy({_id: req.query.id}, {cv: 1, _id: 0})

    // set the public_id in array
    const image_ids = destructImageId(vacancies)

    if(vacancies) {

      // delete vacancy by id
      await VacancyServices.deleteVacancy({_id: req.query.id})

      // delete files of vacancy from cloudinary
      cloudinaryDeleteFiles(image_ids)

      res.status(200).send('successfully deleted vacancies'+ req.query.id)

    }else{
      res.status(409).send('somthing wrong')
    }
  
  } catch (error) {
  
    console.log(error)
    res.status(400).send(error)
  
  }
}