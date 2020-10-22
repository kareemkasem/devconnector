import { Router } from "express";

const router = Router();

// @route    GET api/profile
// @access   Public
// @desc     test route
router.get("/", (req, res) => res.send("tested profile route"));

export default router;
