"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  createOne: async (collection, shema, query) => {
    try {
      return await _mongoose.default.model(collection, shema).create(query, {
        new: true
      });
    } catch (error) {
      return error;
    }
  },
  findOne: async (collection, shema, filterQuery, selectQuery) => {
    try {
      return await _mongoose.default.model(collection, shema).findOne(filterQuery).select(selectQuery);
    } catch (error) {
      return error;
    }
  },
  findMany: async (collection, shema, filterQuery, selectQuery) => {
    try {
      return await _mongoose.default.model(collection, shema).find(filterQuery).select(selectQuery);
    } catch (error) {
      return error;
    }
  },
  findById: async (collection, shema, Id, selectQuery) => {
    try {
      return await _mongoose.default.model(collection, shema).findById(Id).select(selectQuery);
    } catch (error) {
      return error;
    }
  },
  deleteOne: async (collection, shema, filterQuery) => {
    try {
      return await _mongoose.default.model(collection, shema).deleteOne(filterQuery);
    } catch (error) {
      return error;
    }
  },
  deleteMany: async (collection, shema, filterQuery) => {
    try {
      return await _mongoose.default.model(collection, shema).deleteMany(filterQuery);
    } catch (error) {
      return error;
    }
  },
  findOneAndUpdate: async (collection, shema, filterQuery, updateQuery) => {
    try {
      return await _mongoose.default.model(collection, shema).findOneAndUpdate(filterQuery, updateQuery, {
        new: true
      });
    } catch (error) {
      return error;
    }
  }
};
exports.default = _default;