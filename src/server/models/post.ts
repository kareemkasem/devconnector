import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

const postSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "users",
  },
  username: String,
  avatar: String,
  content: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: ObjectId,
      ref: "users",
    },
  ],
  comments: [
    {
      user: {
        type: ObjectId,
        ref: "users",
      },
      avatar: String,
      username: String,
      content: String,
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Post", postSchema);
