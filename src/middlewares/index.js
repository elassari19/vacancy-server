const findOne = require("./findOne");
const findUser = require("./findUser");
const joiValidateData = require("./joiValidateData");
const verifyCode = require("./verifyCode");
const protectRoute = require("./protectRoute");
const updateData = require("./updateData");
const uploadFiles = require("./uploadFiles");

module.exports = {
  findOne,
  findUser,
  joiValidateData,
  verifyCode,
  protectRoute,
  updateData,
  uploadFiles,
}