import usersRoutes from "../routes/api/users";
import postsRoutes from "../routes/api/posts";
import profileRoutes from "../routes/api/profile";
import authRoutes from "../routes/api/auth";

export default (app) => {
  app.use("/api/users", usersRoutes);
  app.use("/api/posts", postsRoutes);
  app.use("/api/profile", profileRoutes);
  app.use("/api/auth", authRoutes);
};
