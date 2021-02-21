import express from "express";

import connectDB from "./config/db";
import connectRoutes from "./config/routes";
import applyMiddleWares from "./config/middlewares";

const app = express();
applyMiddleWares(app);
connectRoutes(app);

try {
	connectDB();
	app.listen(process.env.PORT || 4000);
} catch (error) {
	console.log("failed to connect");
	process.exit();
}
