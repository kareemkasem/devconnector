import Post from "../../models/post";
import User from "../../models/user";
import { newComment } from "./posts.types";
import { validationResult } from "express-validator";

export default async (req, res) => {
  const postId = req.params.postId;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  try {
    const post: any = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ errors: [{ msg: "post not found" }] });
    }

    const user: any = await User.findById(req.user.id).select("name avatar");

    const comment: newComment = {
      user: req.user.id,
      content: req.body.content,
      username: user.name,
      avatar: user.avatar,
    };

    const newComments = [...post.comments, comment];

    post.comments = newComments;
    await post.save();

    res.status(201).json(post.comments);
  } catch (error) {
    console.log(error);
    if (error.kind == "ObjectId") {
      return res.status(400).json({ errors: [{ msg: "invalid objectId" }] });
    }
    res.status(500).json({ errors: [{ msg: "server error" }] });
  }
};
