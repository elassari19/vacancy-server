"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _cloudinary = require("cloudinary");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.youtube.com/watch?v=8Q5p3xQOH6E
var _default = () => async (req, res, next) => {
  // console.log("upload", req.value?.profileImage);
  // the path file exist
  if (!req.value?.profileImage) next(); // // size of file
  // const file = req.value?.profileImage;
  // if (file.size > 1024 * 1024) {
  //   removeTmp(file);
  //   return res.status(203).json({ msg: "Size too large" });
  // }
  // file extension
  // if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/svg") {
  //   removeTmp(file);
  //   return res.status(400).json({ msg: "File format is incorrect." });
  // }
  // console.log(req.value?.profileImage);

  if (req.value.profileImage?.public_id) {
    console.log(`image didn't change`);
    next();
  }

  try {
    // upload file
    const result = await _cloudinary.v2.uploader.upload(req.value?.profileImage, {
      folder: "avatar"
    });
    console.log(1);

    if (result.public_id) {
      req.value.profileImage = {
        public_id: result.public_id,
        secure_url: result.secure_url
      };
    }

    console.log("result", result.public_id);
    next();
  } catch (err) {
    return res.status(203).json({
      success: false,
      message: "upload image filed " + err.message
    });
  }
}; // cleare request from files


exports.default = _default;

const removeTmp = path => {
  _fs.default.unlink(path, err => {
    if (err) throw err;
  });
};