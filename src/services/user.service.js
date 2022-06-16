import { User } from "../models"

export const findOneUser = async (query) => {
  try {
    return await User.findOne(query)
  } catch (error) {
    throw new Error(error)
  }
}

export const findMultiUser = async (query) => {
  try {
    return await User.find(query)
  } catch (error) {
    throw new Error(error)
  }
}

export const findUserById = async (query, selectQuery) => {
  try {
    return await User.findById(query).select(selectQuery)
  } catch (error) {
    throw new Error(error)
  }
}

export const findUserAndSelect = async (query, selectQuery) => {
  try {
    return await User.findOne(query).select(selectQuery)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}

export const deleteUser = async (query) => {
  try {
    return await User.delete(query)
  } catch (error) {
    throw new Error(error)
  }
}

export const createUser = async (query) => {
  try {
    return await User.create(query, {new: true})
  } catch (error) {
    throw new Error(error)
  }
}

export const findUserAndUpdate = async (query, updateQuery) => {
  try {
    return await User.findOneAndUpdate(query, updateQuery, {new: true})
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllUsers = async (selectQuery) => {
  try {
    return await User.find().select(selectQuery)
  } catch (error) {
    throw new Error(error)
  }
}

const UserServices = {
  getAllUsers,
  deleteUser,
  findMultiUser,
  findOneUser,
  findUserAndSelect,
  findUserAndUpdate,
  findUserById,
  createUser
}
export default UserServices