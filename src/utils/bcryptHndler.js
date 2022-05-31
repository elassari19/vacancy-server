const bcryptjs = require("bcrypt");

const hashString = async (string) => { 
  try {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(string , salt);
  } catch (error) {
    console.log(error)
  }
}

const compareString = async (string, compare) => {
  return await bcryptjs.compare(string, compare);
}
 module.exports = {
  hashString,
  compareString
 };