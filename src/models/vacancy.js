import mongoose from "mongoose";
import { categoryVacancy } from "../constants";

const vacancy = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  avatar: {
    public_id: String,
    secure_url: String
  },
  webUrl: String,
  title: {
    type: String,
  },
  vacancy: {
    type: String,
    enum: categoryVacancy,
  },
  Responsibilities: {
    type: [String],
    required: true
  },
  Requirements: {
    type: [String],
    required: true
  },
  sub_description: String,
  Project_decription: {
    type: [String],
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  salary: {
    from: Number,
    to: Number
  },
  'additional options':{
    'Full employment': Boolean,
    'Underemployment': Boolean,
    'Without experience': Boolean,
    'Project work': Boolean
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
  phome: Number,
  cv: [{
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    title: String,
    disc: String,
    public_id: String,
    secure_url: String,
  }],
  messages: [{
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    title: String,
    body: String
  }]
},
{
  timestamps: true,
})

export default mongoose.model('Vacancy', vacancy)