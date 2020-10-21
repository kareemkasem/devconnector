import { validationResult } from "express-validator";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";

import User from "../models/user";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // check if email exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        errors: [
          {
            msg: "email already exists",
            param: "email",
            location: "body",
          },
        ],
      });
    }
    // making an avatar using gravatar
    const avatar = gravatar.url(email, {
      size: "200",
      default: "mm",
      rating: "pg",
    });

    //encrypting password
    const encryptedPassword = await bcrypt.hash(password, 12);

    //saving user
    const user = new User({ name, email, password: encryptedPassword, avatar });
    await user.save();

    res.status(201).json({ message: "user added" });
  } catch (error) {
    res.status(500).json({ error: { msg: "server error" } });
  }
};
