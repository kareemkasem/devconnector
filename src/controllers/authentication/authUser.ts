import User from "../../models/user";

export default async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: { msg: error.message } });
  }
};
