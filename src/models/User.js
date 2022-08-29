import mongoose from "mongoose";

export default mongoose.Schema(
  {
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
        secure_url: String,
      },
      title: String,
      description: String,
      Underemployment: Boolean,
    },
    about: [String],
    skill: [String],
    crypto: Boolean,
    experience: [String],
    companies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
    vacancies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vacancy" }],
    education: [String],
    birthday: String,
    timeline: String,
    empolyeType: String,
    social: {
      linkedin: String,
      facebook: String,
      tweeter: String,
      github: String,
      instagram: String,
    },
    pay: {
      hour: Number,
      distance: Number,
      day: Number,
    },
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
    status: {
      type: String,
      enum: ["Pending", "Active"],
      default: "Pending",
    },
    permission: {
      type: String,
      enum: ["Employer", "Applicant"],
      default: "Employer",
    },
    confirmation: String,
  },
  {
    timestamps: true,
  }
);
