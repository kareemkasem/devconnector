import { Router } from "express";
import { check } from "express-validator";

import auth from "../middleware/auth";
import getCurrentUserProfile from "../controllers/profiles/getCurrentUserProfile";
import postProfile from "../controllers/profiles/postProfile";

const router = Router();

// @route    GET api/profile/me
// @access   Private
// @desc     get current user profile
router.get("/me", auth, getCurrentUserProfile);

// @route    POST api/profile
// @access   Private
// @desc     create or update user profile
router.post(
  "/",
  auth,
  [
    check("skills", "skills field/s is required").notEmpty(),
    check("experience", "experience field/s is required").notEmpty(),
    check("education", "education field/s is required").notEmpty(),
    check("status", "status field is required").notEmpty(),
  ],
  postProfile
);

export default router;
