import mongoose from "mongoose"

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
    Underemployment: Boolean,
  },
  skill: [String],
  experience: [String],
  company: [String],
  education: [String],
  birthday: Date,
  timeline: String,
  empolyeType: String,
  social:{
    linkedin: String,
    facebook: String,
    tweeter: String,
    github: String,
    instagram: String,
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
    zip: String,
    geo: {
      lan: Number,
      lat: Number
    }
  },
  status: {
    type: String, 
    enum: ['Pending', 'Active'],
    default: 'Pending'
  },
  permission: {
    type: String,
    enum: ['User', 'Admin'],
    default: "User"
  },
  confirmation: String
},{
  timestamps: true
})

module.exports = mongoose.model("User", User);