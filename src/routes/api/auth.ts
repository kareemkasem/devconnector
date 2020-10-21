import { Router } from "express";
import { check } from "express-validator";

import auth from "../../middleware/auth";
import authUser from "../../controllers/authentication/authUser";
import login from "../../controllers/authentication/login";

const router = Router();

// @route    GET api/auth
// @access   Public
// @desc     send a jwt token if user is authenticated
router.get("/", auth, authUser);

// @route    POST api/users
// @access   Public
// @desc     login
router.post(
  "/",
  [
    check("email", "please provide a valid email").isEmail(),
    check("password", "please enter your password").exists({
      checkFalsy: true,
      checkNull: true,
    }),
  ],
  login
);

export default router;
