import { vacancy } from "../models"

export const findOneVacancy = async (query, selectQuery) => {
  try {
    return await vacancy.findOne(query).select(selectQuery)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

export const findMultiVacancy = async (query, selectQuery) => {
  try {
    return await vacancy.find(query).select(selectQuery)
  } catch (error) {
    throw new Error(error)
  }
}

export const findVacancyById = async (query, selectQuery) => {
  try {
    return await vacancy.findById(query).select(selectQuery)
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteVacancy = async (query) => {
  try {
    return await vacancy.deleteMany(query)
  } catch (error) {
    throw new Error(error)
  }
}

export const createVacancy = async (query) => {
  try {
    return await vacancy.create(query, {new: true})
  } catch (error) {
    throw new Error(error)
  }
}

export const findVacancyAndUpdate = async (query, updateQuery) => {
  try {
    return await vacancy.findOneAndUpdate(query, updateQuery, {new: true})
  } catch (error) {
    throw new Error(error)
  }
}


const VacancyServices = {
  deleteVacancy,
  findMultiVacancy,
  findOneVacancy,
  findVacancyAndUpdate,
  findVacancyById,
  createVacancy,
}
export default VacancyServices