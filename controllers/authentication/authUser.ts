import User from "../../models/user";

export default async (req, res) => {
  try {
    const user: any = await User.findById(req.user.id);

    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      date: user.date,
    });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
};
