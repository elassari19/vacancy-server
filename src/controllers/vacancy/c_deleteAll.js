import { VacancyServices } from '../../services'
import {cloudinaryDeleteFiles, destructImageId} from '../../utils'

export default () => async (req,res) => {

  try {
    
    const vacancies = await VacancyServices.findMultiVacancy({}, {cv: 1, _id: 0})

    if(vacancies){

      const image_ids = destructImageId(vacancies)

      // delete files from cloud
      cloudinaryDeleteFiles(image_ids)

      // delete files from db
      await VacancyServices.deleteVacancy()
      res.status(200).send('successfully deleted all vacancies')

    }else{
      res.status(409).send('somthing wrong')
    }

  } catch (error) {

    console.log(error)
    res.status(400).send(error)

  }
}