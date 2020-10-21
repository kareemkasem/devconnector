import { Router } from "express";
import { check } from "express-validator";
import registerUser from "../../controllers/authentication/registerUser";

const router = Router();

// @route    POST api/users
// @access   Public
// @desc     registering users
router.post(
  "/",
  [
    check("name", "please provide a name").notEmpty(),
    check("email", "please provide a valid email").isEmail(),
    check("password", "password must be between 6 an 18 characters").isLength({
      min: 6,
      max: 18,
    }),
  ],
  registerUser
);

export default router;
