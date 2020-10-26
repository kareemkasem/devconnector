import User from "../../models/user";
import Profile from "../../models/profile";

export default async (req, res) => {
  const userId = req.user.id;
  try {
    await User.findByIdAndDelete(userId);
    await Profile.findOneAndRemove({ user: userId });
    res.status(200).json({ success: { msg: "account deleted successfully" } });
  } catch (error) {
    res.status(500).json({ error: { msg: "server error" } });
  }
};
