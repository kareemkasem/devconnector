import { ObjectId } from "mongodb";

export type newPost = {
  user: ObjectId;
  username: String;
  content: String;
  avatar: String;
};
