import express from "express";

import connectDB from "./config/db";
import connectRoutes from "./config/routes";

//vars
const PORT = process.env.PORT || 3000;
const app = express();

// global middlewares
app.use(express.json());

// routes
connectRoutes(app);

// initializing
try {
  async () => await connectDB();
  app.listen(PORT);
} catch (error) {
  console.log("failed to connect");
  process.exit();
}
