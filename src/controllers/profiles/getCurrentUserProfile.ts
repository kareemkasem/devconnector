import Profile from "../../models/profile";

export default async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(404).json({ error: { msg: "profile not found" } });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { msg: "server error" } });
  }
};
