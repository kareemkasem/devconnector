import { Router } from "express";

const router = Router();

// @route    POST api/users
// @access   Public
// @desc     test
router.get("/", (req, res) => res.send("tested"));

export default router;
