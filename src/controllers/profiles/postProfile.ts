import { validationResult } from "express-validator";
import { profileReqBody } from "./profiles.types";
import Profile from "../../models/profile";

export default async (req, res) => {
  const errros = validationResult(req);
  if (!errros.isEmpty()) {
    return res.status(400).json({ errors: errros.array() });
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

  // adding optional fileds if exist
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

  // adding social links if exist
  for (const key in social) {
    if (social[key]) {
      profileFields.social[key] = social[key];
    }
  }

  try {
    const profileExists =
      (await Profile.findOne({
        user: req.user.id,
      }).countDocuments((err, count) => {
        if (err) {
          throw err;
        } else {
          return count;
        }
      })) == 1;

    if (profileExists) {
      const profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true } // defaults to false which will return the original document
      );
      res.status(201).json(profile);
    } else {
      const profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { msg: "server error" } });
  }
};
