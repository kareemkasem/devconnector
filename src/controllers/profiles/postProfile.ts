import { validationResult } from "express-validator";
import { profileReqBody } from "./profiles.types";

export default async (req, res) => {
  const errros = validationResult(req);
  if (!errros.isEmpty()) {
    return res.staus(400).json({ errors: errros.array() });
  }

  const {
    bio,
    githubusername,
    company,
    website,
    location,
    status,
    skills,
    experience,
    education,
    social,
  }: profileReqBody = req.body;

  const profileFields = {
    user: req.user.id,
    status,
    skills,
    experience,
    education,
    social: {},
  };

  const optionalFields = {
    bio,
    githubusername,
    company,
    website,
    location,
  };

  for (const key in optionalFields) {
    if (optionalFields[key]) {
      profileFields[key] = optionalFields[key];
    }
  }

  for (const key in social) {
    if (social[key]) {
      profileFields.social[key] = social[key];
    }
  }

  res.json(profileFields);

  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { msg: "server error" } });
  }
};
