const mongoose = require("mongoose");

const User = mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
  },
  profile: {
    avatar: {
      public_id: String,
      secure_url: String
    },
    title: String,
    description: String,
  },
  company: {
    type: [String]
  },
  social:{
    linkedin: String,
    facebook: String,
    tweeter: String,
    github: String,
    instagram: String
  },
  skill: {
    type: [String]
  },
  education: {
    type: [String]
  },
  experience: {
    type: [String]
  },
  pay: {
    hour: Number,
    distance: Number,
    day: Number
  },
  address: {
    country: String,
    city: String,
    street: String,
    zip: String
  },
  status: {
    type: String, 
    enum: ['Pending', 'Active'],
    default: 'Pending'
  },
  permissioon: {
    type: String,
    default: "user"
  },
  confirmation: String
},{
  timestamps: true
})

module.exports = mongoose.model("User", User);