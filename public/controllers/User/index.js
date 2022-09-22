"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "c_avatar", {
  enumerable: true,
  get: function () {
    return _avatar.default;
  }
});
Object.defineProperty(exports, "c_confirmation", {
  enumerable: true,
  get: function () {
    return _confirmation.default;
  }
});
Object.defineProperty(exports, "c_delete", {
  enumerable: true,
  get: function () {
    return _deleteAcount.default;
  }
});
Object.defineProperty(exports, "c_deleteMany", {
  enumerable: true,
  get: function () {
    return _deleteMany.default;
  }
});
Object.defineProperty(exports, "c_forgot", {
  enumerable: true,
  get: function () {
    return _forgot.default;
  }
});
Object.defineProperty(exports, "c_getMany", {
  enumerable: true,
  get: function () {
    return _getAllUsers.default;
  }
});
Object.defineProperty(exports, "c_getOne", {
  enumerable: true,
  get: function () {
    return _getOne.default;
  }
});
Object.defineProperty(exports, "c_resend", {
  enumerable: true,
  get: function () {
    return _resend.default;
  }
});
Object.defineProperty(exports, "c_resetPassword", {
  enumerable: true,
  get: function () {
    return _resetPassword.default;
  }
});
Object.defineProperty(exports, "c_signin", {
  enumerable: true,
  get: function () {
    return _signin.default;
  }
});
Object.defineProperty(exports, "c_signout", {
  enumerable: true,
  get: function () {
    return _signout.default;
  }
});
Object.defineProperty(exports, "c_signup", {
  enumerable: true,
  get: function () {
    return _signup.default;
  }
});
Object.defineProperty(exports, "c_update", {
  enumerable: true,
  get: function () {
    return _updateprofile.default;
  }
});

var _signin = _interopRequireDefault(require("./signin"));

var _signup = _interopRequireDefault(require("./signup"));

var _signout = _interopRequireDefault(require("./signout"));

var _updateprofile = _interopRequireDefault(require("./updateprofile"));

var _confirmation = _interopRequireDefault(require("./confirmation"));

var _avatar = _interopRequireDefault(require("./avatar"));

var _deleteAcount = _interopRequireDefault(require("./deleteAcount"));

var _getAllUsers = _interopRequireDefault(require("./getAllUsers"));

var _deleteMany = _interopRequireDefault(require("./deleteMany"));

var _getOne = _interopRequireDefault(require("./getOne"));

var _forgot = _interopRequireDefault(require("./forgot"));

var _resetPassword = _interopRequireDefault(require("./resetPassword"));

var _resend = _interopRequireDefault(require("./resend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }