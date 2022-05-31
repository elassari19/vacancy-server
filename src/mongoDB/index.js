const mongoose  = require("mongoose");

const mongoConnect = async () => { 
  try {
    const connect = await mongoose.connect(process.env.MONGOOSE_URI,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log("db is connected")
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
 }

 module.exports = mongoConnect;