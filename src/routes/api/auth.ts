import { Router } from "express";

const router = Router();

// @route    GET api/auth
// @access   Public
// @desc     test route
router.get("/", (req, res) => res.send("tested auth route"));

export default router;
