import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const profileSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  bio: String,
  githubusername: String,
  company: String,
  website: String,
  location: String,
  status: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  experience: {
    type: [
      {
        jobTitle: String,
        company: String,
        location: String,
        from: Date,
        to: Date,
        description: String,
        current: Boolean,
      },
    ],
    required: true,
  },
  education: {
    type: [
      {
        school: String,
        degree: String,
        fieldOfStudy: String,
        from: Date,
        to: Date,
        description: String,
        current: Boolean,
      },
    ],
    required: true,
  },
  social: {
    twitter: String,
    linkedIn: String,
    youtube: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Profile", profileSchema);
