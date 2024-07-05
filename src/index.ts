import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectMongoDB } from "./infrastructure/config/mongoConfig";
import apiRoutes from "./delivery/routers/routes";

import cors from "cors";
dotenv.config();

const app: Application = express();
app.use(cors());
connectMongoDB();
app.disable("x-powered-by");

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
