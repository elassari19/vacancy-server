import mongoose from "mongoose";

const company = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  avatar: {
    public_id: String,
    secure_url: String
  },
  webUrl: String,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  Category: String,
  description: String,
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
  social:{
    linkedin: String,
    facebook: String,
    tweeter: String,
    github: String,
    instagram: String,
  },
  phome: Number,
  timeline: String

},
{
  timestamps: true,
})

export default mongoose.model('Company', company)