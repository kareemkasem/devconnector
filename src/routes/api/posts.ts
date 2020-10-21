import { Router } from "express";

const router = Router();

// @route    GET api/posts
// @access   Public
// @desc     test route
router.get("/", (req, res) => res.send("tested posts route"));

export default router;
