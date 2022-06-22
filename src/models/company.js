import mongoose from "mongoose";

export default new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  avatar: {
    public_id: String,
    secure_url: String
  },
  webUrl: String,
  name: {
    type: String,
    unique: true
  },
  email: String,
  Category: String,
  description: String,
  address: {
    country: String,
    city: String,
    street: String,
    zip: String,
    geo: {
      lon: Number,
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

// export default mongoose.model('Company', company)