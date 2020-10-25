import Profile from "../../models/profile";

export default async (req, res) => {
  const userId = req.param.userId;

  try {
    const profile = await Profile.findOne({ user: userId }).populate("user", [
      "name",
      "avatar",
    ]);

    if (!profile) {
      return res.status(404).json({ error: { msg: "profile not found" } });
    }

    res.status(200).json(profile);
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(404).json({ error: { msg: "profile not found" } });
    }
    res.status(500).json({ error: { msg: "server error" } });
  }
};
