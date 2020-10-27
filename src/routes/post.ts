import { Router } from "express";
import auth from "../middleware/auth";
import { check } from "express-validator";

import createPost from "../controllers/posts/createPost";

const router = Router();

// @route    POST api/post/create
// @access   Public
// @desc     create post
router.post(
  "/create",
  auth,
  [check("content", "post is empty").notEmpty({ ignore_whitespace: true })],
  createPost
);

export default router;
