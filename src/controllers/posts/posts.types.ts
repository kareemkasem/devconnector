import { ObjectId } from "mongodb";

export type newPost = {
  user: ObjectId;
  username: String;
  content: String;
  avatar: String;
};

export type newComment = {
  user: ObjectId;
  username: String;
  content: String;
  avatar: String;
};

export type comment = {
  _id: ObjectId;
  date: Date;
  user: ObjectId;
  username: String;
  content: String;
  avatar: String;
};
