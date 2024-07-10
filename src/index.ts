import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { connectMongoDB } from "./infrastructure/config/mongoConfig";
import apiRoutes from "./delivery/routers/routes";
import cors from "cors";
import { corsOptions } from "./infrastructure/config/cors.config";

dotenv.config();
const port = process.env.PORT || 3000;
const app: Application = express();
app.use(cors(corsOptions));

connectMongoDB();
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api", apiRoutes);
app.use((err:any, req:any, res:any, next:any) => {
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
