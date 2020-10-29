import Post from "../../models/post";

export default async (req, res) => {
  const postId = req.params.id;
  try {
    const postToDelete: any = await Post.findById(postId);
    if (!postToDelete) {
      return res
        .status(404)
        .json({
          errors: [{ msg: "post doesn't exist or no longer available." }],
        });
    }
    if (postToDelete.user.toString() != req.user.id) {
      return res.status(401).json({ errors: [{ msg: "unauthorized" }] });
    }
    res.status(200).json({ msg: "deleted successfully" });
  } catch (error) {
    if (error.kind == "ObjectId") {
      return res.status(400).json({ errors: [{ msg: "invalid objectId" }] });
    }
    res.status(500).json({ errors: [{ msg: "server error" }] });
  }
};
