import mongoose from "mongoose";


export const createOne = async (collection, shema, query) => {
  try {
    return await mongoose.model(collection, shema).create(query, {new: true})
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const findOne = async (collection, shema, query, selectQuery) => {
  try {
    return await mongoose.model(collection, shema).findOne(query).select(selectQuery)
  } catch (error) {

    throw new Error(error)
  }
}

export const findMany = async (collection, shema, query, selectQuery) => {
  try {
    return await mongoose.model(collection, shema).find(query).select(selectQuery)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const findById = async (collection, shema, query, selectQuery) => {
  try {
    return await mongoose.model(collection, shema).findById(query).select(selectQuery)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const deleteOne = async (collection, shema, query) => {
  try {
    return await mongoose.model(collection, shema).deleteMany(query)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const deleteMany = async (collection, shema, query) => {
  try {
    return await mongoose.model(collection, shema).deleteMany()
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const findOneAndUpdate = async (collection, shema, query, updateQuery) => {
  try {
    return await mongoose.model(collection, shema).findOneAndUpdate(query, updateQuery, {new: true})
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}


const CompanyServices = {
  deleteOne,
  deleteMany,
  findMany,
  findOne,
  findOneAndUpdate,
  findById,
  createOne,
}
export default CompanyServices