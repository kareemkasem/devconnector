import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../../models/user";
import { Schema } from "mongoose";

export default async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // check if email exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errors: [
          {
            msg: "user not found",
            param: "email",
            location: "body",
          },
        ],
      });
    }

    //encrypting password
    const passwordIsCorrect: boolean = await bcrypt.compare(
      password,
      //@ts-ignore
      user.password
    );
    if (!passwordIsCorrect) {
      return res.status(400).json({
        errors: [
          {
            msg: "incorrect password",
            param: "password",
            location: "body",
          },
        ],
      });
    }

    // jwt auth
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(500).json({ error: { msg: "server error" } });
  }
};
