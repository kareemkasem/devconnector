import Profile from "../../models/profile";

export default async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "server error" }] });
  }
};
