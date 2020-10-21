import { validationResult } from "express-validator";

export const registerUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    return res.status(201).json({ message: "user create successfully" });
  }
};
