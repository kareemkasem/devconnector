import { Router } from "express";
import auth from "../middleware/auth";
import { check } from "express-validator";

import createPost from "../controllers/posts/createPost";
import getPost from "../controllers/posts/getPost";
import getAllPosts from "../controllers/posts/getAllPosts";
import deletePost from "../controllers/posts/deletePost";

const router = Router();

// @route    POST api/post/create
// @access   Private
// @desc     create post
router.post(
  "/create",
  auth,
  [check("content", "post is empty").notEmpty({ ignore_whitespace: true })],
  createPost
);

// @route    POST api/post/all
// @access   Private
// @desc     get all posts
router.get("/all", auth, getAllPosts);

// @route    POST api/post/:id
// @access   Private
// @desc     get a post
router.get("/:id", auth, getPost);

// @route    POST api/delete/:id
// @access   Private
// @desc     delete a post
router.delete("/delete/:id", auth, deletePost);

export default router;
