import { Request, Response } from "express";
import Post from "../../models/post";

export default async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ date: "asc" });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: { msg: "server error" } });
  }
};
