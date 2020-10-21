import { Router } from "express";
import auth from "../../middleware/auth";
import authUser from "../../controllers/authentication/authUser";

const router = Router();

// @route    GET api/auth
// @access   Public
// @desc     send a jwt token if user is authenticated
router.get("/", auth, authUser);

export default router;
