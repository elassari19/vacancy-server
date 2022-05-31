const bcrypt = require("bcrypt");

const hashString = async (string) => { 
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(string , salt);
  } catch (error) {
    console.log(error)
  }
}

const compareString = async (string, compare) => {
  return await bcrypt.compare(string, compare);
}
 module.exports = {
  hashString,
  compareString
 };