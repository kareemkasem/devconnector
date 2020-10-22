import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token: string | undefined = req.header("x-auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ error: { msg: "no token found, unautherized" } });
  }

  try {
    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: { msg: "Token is invalid" } });
  }
};
