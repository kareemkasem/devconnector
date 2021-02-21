import express from "express";
import cors from "cors";
import path from "path";

export default app => {
	app.use(express.json());
	app.use(cors());

	if (process.env.NODE_ENV === "production") {
		// only the build folder will run this (that's why it has an extra up)
		app.use(express.static("../../client/build"));
		app.get("*", (req, res) => {
			res.sendFile(
				path.resolve(__dirname, "..", "..", "client", "build", "index.html")
			);
		});
	}
};
