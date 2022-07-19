import mongoose from 'mongoose'

export default {

  createOne: async (collection, shema, query) => {
    try {
      return await mongoose.model(collection, shema).create(query, {new: true})
    } catch (error) {
      return error
    }
  },

  findOne: async (collection, shema, filterQuery, selectQuery) => {
    try {
      return await mongoose.model(collection, shema).findOne(filterQuery).select(selectQuery)
    } catch (error) {

      return error
    }
  },

  findMany: async (collection, shema, filterQuery, selectQuery) => {
    try {
      return await mongoose.model(collection, shema).find(filterQuery).select(selectQuery)
    } catch (error) {

      return error
    }
  },

  findById: async (collection, shema, Id, selectQuery) => {
    try {
      return await mongoose.model(collection, shema).findById(Id).select(selectQuery)
    } catch (error) {

      return error
    }
  },

  deleteOne: async (collection, shema, filterQuery) => {
    try {
      return await mongoose.model(collection, shema).deleteOne(filterQuery)
    } catch (error) {

      return error
    }
  },

  deleteMany: async (collection, shema, filterQuery) => {
    try {
      return await mongoose.model(collection, shema).deleteMany(filterQuery)
    } catch (error) {

      return error
    }
  },

  findOneAndUpdate: async (collection, shema, filterQuery, updateQuery) => {
    try {
      return await mongoose.model(collection, shema).findOneAndUpdate(filterQuery, updateQuery, {new: true})
    } catch (error) {

      return error
    }
  }

}