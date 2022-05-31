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
    type: Number,
  },
  profile: {
    image: String,
    title: String,
    description: String,
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
  confirmation: String
},{
  timestamps: true
})

module.exports = mongoose.model("User", User);