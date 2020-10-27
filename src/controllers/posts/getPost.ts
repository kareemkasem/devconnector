import { Request, Response } from "express";
import Post from "../../models/post";

export default async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: { msg: "post not found" } });
    }

    res.status(200).json(post);
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(400).json({ error: { msg: "invalid objectId" } });
    }
    res.status(500).json({ error: { msg: "server error" } });
  }
};
