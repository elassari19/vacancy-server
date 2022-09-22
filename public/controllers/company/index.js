"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "c_create", {
  enumerable: true,
  get: function () {
    return _create.default;
  }
});
Object.defineProperty(exports, "c_delete", {
  enumerable: true,
  get: function () {
    return _delete.default;
  }
});
Object.defineProperty(exports, "c_deleteMany", {
  enumerable: true,
  get: function () {
    return _deleteMany.default;
  }
});
Object.defineProperty(exports, "c_get", {
  enumerable: true,
  get: function () {
    return _get.default;
  }
});
Object.defineProperty(exports, "c_getMany", {
  enumerable: true,
  get: function () {
    return _getMany.default;
  }
});
Object.defineProperty(exports, "c_update", {
  enumerable: true,
  get: function () {
    return _update.default;
  }
});

var _create = _interopRequireDefault(require("./create"));

var _delete = _interopRequireDefault(require("./delete"));

var _get = _interopRequireDefault(require("./get"));

var _getMany = _interopRequireDefault(require("./getMany"));

var _update = _interopRequireDefault(require("./update"));

var _deleteMany = _interopRequireDefault(require("./deleteMany"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }