import { validationResult } from "express-validator";
import { Document } from "mongoose";

import User from "../../models/user";
import Post from "../../models/post";
import { newPost } from "./posts.types";

export default async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user: any = await User.findById(req.user.id).select("name avatar");

    const newPost: newPost = {
      user: req.user.id,
      username: user.name,
      avatar: user.avatar,
      content: req.body.content,
    };

    const newPostDoc: Document = new Post(newPost);
    await newPostDoc.save();

    res.status(201).json(newPostDoc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: { msg: "server error" } });
  }
};
