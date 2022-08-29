import mongoose from "mongoose";

export default new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    profileImage: {
      public_id: String,
      secure_url: String,
    },
    webUrl: String,
    name: {
      type: String,
      unique: true,
    },
    email: String,
    category: String,
    description: String,
    address: {
      country: String,
      city: String,
      street: String,
      zip: String,
      geo: {
        lon: Number,
        lat: Number,
      },
    },
    social: {
      linkedin: String,
      facebook: String,
      tweeter: String,
      github: String,
      instagram: String,
    },
    phone: Number,
    timeline: String,
    benfits: {
      events: Boolean,
      insurance: Boolean,
      bonus: Boolean,
      review: Boolean,
      discount: Boolean,
      schedule: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

// export default mongoose.model('Company', company)
