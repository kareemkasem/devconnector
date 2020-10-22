import { Router } from "express";

import auth from "../middleware/auth";
import getCurrentUserProfile from "../controllers/profiles/getCurrentUserProfile";

const router = Router();

// @route    GET api/profile/me
// @access   Private
// @desc     get current user profile
router.get("/", auth, getCurrentUserProfile);

export default router;
