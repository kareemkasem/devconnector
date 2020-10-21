import express from "express";

import connectDB from "./config/db";
import connectRoutes from "./config/routes";

//vars
const app = express();

// global middlewares
app.use(express.json());

// routes
connectRoutes(app);

// initializing
try {
  connectDB();
  app.listen(process.env.PORT || 3000);
} catch (error) {
  console.log("failed to connect");
  process.exit();
}
