import postsRoutes from "../routes/posts";
import profileRoutes from "../routes/profile";
import authRoutes from "../routes/auth";

export default (app) => {
  app.use("/api/posts", postsRoutes);
  app.use("/api/profile", profileRoutes);
  app.use("/api/auth", authRoutes);
};
