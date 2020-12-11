import express from "express";
import cors from "cors";

export default app => {
  app.use(express.json());
  app.options("*", cors());
  app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
};
