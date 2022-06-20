import mongoose from "mongoose";

const db = mongoose.connection

export const createCompany = async (collection, query) => {
  try {
    return await db.collection(collection).create(query, {new: true})
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const findOneCompany = async (collection, query, selectQuery) => {
  try {
    return await db.collection(collection).findOne(query).select(selectQuery)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

export const findMultiCompany = async (collection, query, selectQuery) => {
  try {
    return await db.collection(collection).find(query).select(selectQuery)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const findCompanyById = async (collection, query, selectQuery) => {
  try {
    return await db.collection(collection).findById(query).select(selectQuery)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const deleteCompany = async (collection, query) => {
  try {
    return await db.collection(collection).deleteMany(query)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const findCompanyAndUpdate = async (collection, query, updateQuery) => {
  try {
    return await db.collection(collection).findOneAndUpdate(query, updateQuery, {new: true})
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}


const CompanyServices = {
  deleteCompany,
  findMultiCompany,
  findOneCompany,
  findCompanyAndUpdate,
  findCompanyById,
  createCompany,
}
export default CompanyServices